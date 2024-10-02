using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApi.Model;

namespace ServerApi.Services
{
    public interface IAccountRepository
    {
        List<Account> GetAll();
        Account GetById(int id);
        Task<ApiResponse> Add(Account account);
        
        void Update(Account account);

        void Delete(int id);
    }
}