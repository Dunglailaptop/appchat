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

namespace ServerApi.Services
{
    public class AuthenticationRepository : IAuthenticationRepository
    {
        private readonly ApplicationDBContext _applicationDBcontext;
        private readonly AppSetting _appsetting;
        public AuthenticationRepository(ApplicationDBContext applicationDBContext,IOptionsMonitor<AppSetting> optionsMonitor)
        {
            _appsetting = optionsMonitor.CurrentValue;
            _applicationDBcontext = applicationDBContext;
        }
       

        private string generatekeys(Account account)
        {
            Console.WriteLine(_appsetting.SecretKey);
           var jwtTokenHandler = new JwtSecurityTokenHandler();
              var secretKeyBytes = Encoding.UTF8.GetBytes(_appsetting.SecretKey);
        
              var tokenDesciption = new SecurityTokenDescriptor
              {
                Subject = new ClaimsIdentity(new[] {
                    new Claim("Username", account.Username),
                    new Claim("Id",account.IdAccount.ToString()),

                    new Claim("TokenId",Guid.NewGuid().ToString())
                }),
                 Expires = DateTime.UtcNow.AddMinutes(1),
                 SigningCredentials = new SigningCredentials(new SymmetricSecurityKey (secretKeyBytes),SecurityAlgorithms.HmacSha512Signature)
              };
            var token = jwtTokenHandler.CreateToken(tokenDesciption);
            return jwtTokenHandler.WriteToken(token);
        }

        public string generatekey(Account account)
        {
            return generatekeys(account);
        }

        public Account Login(LoginModel loginModel)
        {
             var user = _applicationDBcontext.Account.Where(x=>x.Username == loginModel.Username && x.Password == loginModel.Password).SingleOrDefault();
             return user;
        }
    }
}