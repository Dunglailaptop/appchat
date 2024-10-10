using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServerApi.Data;
using ServerApi.Model;
using ServerApi.Services;

namespace  ServerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        
        private readonly IAuthenticationRepository _authenticationrepository;

        public AuthenticationController(IAuthenticationRepository authenticationRepository) {
            
             _authenticationrepository = authenticationRepository;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel loginModel) {
           var user =  _authenticationrepository.Login(loginModel);
             if (user == null) {
                  return BadRequest(new ApiResponse{
                      Success = false,
                      Message = "Không tìm thấy tài khoản"
                  });
             }
             var token = await _authenticationrepository.generatekey(user);
             return Ok(new ApiResponse {
                Success = true,
                Message = "Đăng nhập thành công tài khoản",
                Data = new {
                    accessToken = token,
                    IdRole = user.IdRole,
                    Username = user.Username
                }
             });
        }
        [HttpPost("RefreshToken")]
        public async Task<IActionResult> ReFreshToken(TokenModel tokenModel){
            ApiResponse apiResponse = await _authenticationrepository.RenewToken(tokenModel);
            if(apiResponse.Success) {
                return Ok(apiResponse);
            }else {
                return BadRequest(apiResponse);
            }
        }

        [HttpPost("Logout")]
        public async Task<IActionResult> LogoutAccount(int idacc) {
           ApiResponse apiResponse = await _authenticationrepository.Logout(idacc);
           if(apiResponse.Success) {
              return Ok(apiResponse);
           }
        return BadRequest(apiResponse);
        }

         
    }
}