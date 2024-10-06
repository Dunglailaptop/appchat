using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApi.Model;

namespace ServerApi.Services
{
    public interface IAuthenticationRepository
    {
        Task<TokenModel> generatekey(Account account);
        Task<ApiResponse> RenewToken(TokenModel tokenModel);
        Account Login(LoginModel loginModel);
        
        Task<ApiResponse> Logout(int id);
         
    }
}