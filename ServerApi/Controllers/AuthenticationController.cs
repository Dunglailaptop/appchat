using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public IActionResult Login(LoginModel loginModel) {
           var user = _authenticationrepository.Login(loginModel);
             if (user == null) {
                  return Ok(new ApiResponse{
                      Success = false,
                      Message = "Không tìm thấy tài khoản"
                  });
             }  
             return Ok(new ApiResponse {
                Success = true,
                Message = "Đăng nhập thành công tài khoản",
                Data = _authenticationrepository.generatekey(user)
             });
        }


    }
}