using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApi.Data;
using ServerApi.Model;

namespace ServerApi.Services
{
    public class AccountRepository : IAccountRepository
    {
        private readonly ApplicationDBContext _applicationDBContext;
        

        public AccountRepository(ApplicationDBContext applicationDBContext){
            _applicationDBContext = applicationDBContext;
        }
        public Account Add(Account account)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public List<Account> GetAll()
        {
            return _applicationDBContext.Account.ToList();
        }

        public Account GetById(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Account account)
        {
            throw new NotImplementedException();
        }
    }
}