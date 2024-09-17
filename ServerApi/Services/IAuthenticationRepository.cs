using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApi.Model;

namespace ServerApi.Services
{
    public interface IAuthenticationRepository
    {
        TokenModel generatekey(Account account);

        Account Login(LoginModel loginModel);
    }
}