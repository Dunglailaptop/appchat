using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ServerApi.Data;
using ServerApi.Model;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel;

namespace ServerApi.Services
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly ApplicationDBContext _applicationDBcontext;
        private readonly AppSetting _appsetting;
        public AuthenticationRepository(ApplicationDBContext applicationDBContext, IOptionsMonitor<AppSetting> optionsMonitor)
        {
            _appsetting = optionsMonitor.CurrentValue;
            _applicationDBcontext = applicationDBContext;
        }

     

        private async Task<TokenModel> generatekeys(Account account)
        {
            
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var secretKeyBytes = Encoding.UTF8.GetBytes(_appsetting.SecretKey);

            var tokenDesciption = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(JwtRegisteredClaimNames.Email, account.Username),
                    new Claim(JwtRegisteredClaimNames.Sub, account.Username),
                     new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim("Username", account.Username),
                    new Claim("Id",account.IdAccount.ToString()),

                    new Claim("TokenId",Guid.NewGuid().ToString())
                }),
                Expires = DateTime.UtcNow.AddSeconds(20),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(secretKeyBytes), SecurityAlgorithms.HmacSha512Signature)
            };
            var token = jwtTokenHandler.CreateToken(tokenDesciption);
            var accesstoken = jwtTokenHandler.WriteToken(token);
            var refreshtoken = GenerateRefreshToken();

            var refreshtokenentity = new RefreshToken
            {
                Id = Guid.NewGuid(),
                JwtId = token.Id,
                UserId = account.IdAccount,
                token = refreshtoken,
                IsUsed = false,
                IsRevoked = false,
                IssuedAt = DateTime.UtcNow,
                ExpiredAt = DateTime.UtcNow.AddHours(1)
            };
            await _applicationDBcontext.AddAsync(refreshtokenentity);
            await _applicationDBcontext.SaveChangesAsync();
            // kiem tra xem nguoi dung da dang nhap o noi nao khac khong
            var AccountUpdate = await _applicationDBcontext.Account.FindAsync(account.IdAccount);
            AccountUpdate.status = true;
            _applicationDBcontext.Account.Update(AccountUpdate);
            _applicationDBcontext.SaveChangesAsync();


            return new TokenModel
            {
                AccessToken = accesstoken,
                RefreshToken = refreshtoken
            };
        }
        private string GenerateRefreshToken()
        {
            var random = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(random);

                return Convert.ToBase64String(random);
            }
        }

        public async Task<ApiResponse> RenewRefreshToken(TokenModel tokenModel)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var secretKeyBytes = Encoding.UTF8.GetBytes(_appsetting.SecretKey);
            var para = new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(secretKeyBytes),

                ClockSkew = TimeSpan.Zero,
                ValidateLifetime = false
            };
            try
            {
                var TokenValidationParameters = jwtTokenHandler.ValidateToken(tokenModel.AccessToken, para, out var validatedToken);
                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    var result = jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha512, StringComparison.InvariantCulture);
                    if (!result)
                    {
                        return new ApiResponse
                        {
                            Success = false,
                            Message = "Invalid token"
                        };
                    }
                }
                var utcExpireDate = long.Parse(TokenValidationParameters.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp).Value);
                var expireDate = ConvertUnixTimeToDateTime(utcExpireDate);
                if (expireDate > DateTime.UtcNow)
                {
                    return new ApiResponse
                    {
                        Success = false,
                        Message = "Token not valid"
                    };
                }
                //check refesh token in DB
                var storeToken = _applicationDBcontext.RefreshTokens.FirstOrDefault(x => x.token == tokenModel.RefreshToken);
                if (storeToken == null)
                {
                    return new ApiResponse
                    {
                        Success = false,
                        Message = "Refresh token does not exists"
                    };
                }
                //check user revoked
                if (storeToken.IsUsed)
                {
                    return new ApiResponse
                    {
                        Success = false,
                        Message = "Refresh token does not exists"
                    };
                }
                if (storeToken.IsRevoked)
                {
                    return new ApiResponse
                    {
                        Success = false,
                        Message = "Refresh token does not exists"
                    };
                }
                var jti = TokenValidationParameters.Claims.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti).Value;
                if (storeToken.JwtId != jti)
                {
                    return new ApiResponse
                    {
                        Success = false,
                        Message = "Token dont match"
                    };
                }
                //update
                storeToken.IsRevoked = true;
                storeToken.IsUsed = true;
                _applicationDBcontext.Update(storeToken);
                await _applicationDBcontext.SaveChangesAsync();
                var user = await _applicationDBcontext.Account.FirstOrDefaultAsync(nd=>nd.IdAccount == storeToken.UserId);
                var token = await generatekeys(user);
                return new ApiResponse
                {
                    Success = true,
                    Message = "Success token",
                    Data = token
                };
            }
            catch (Exception ex)
            {
                return new ApiResponse
                {
                    Success = false,
                    Message = "Invalid token"
                };
            }
        }

        private DateTime ConvertUnixTimeToDateTime(long utcExpireDate)
        {
            var datetimeInterval = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            datetimeInterval.AddSeconds(utcExpireDate).ToUniversalTime();
            return datetimeInterval;
        }

        public async Task<TokenModel> generatekey(Account account)
        {
            return await generatekeys(account);
        }

        public Account Login(LoginModel loginModel)
        {
            var user = _applicationDBcontext.Account.Where(x => x.Username == loginModel.Username && x.Password == loginModel.Password).SingleOrDefault();
            return user;
        }

        public async Task<ApiResponse> RenewToken(TokenModel tokenModel)
        {
             return await RenewRefreshToken(tokenModel);

        }
    }
}