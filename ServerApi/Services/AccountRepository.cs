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


        public AccountRepository(ApplicationDBContext applicationDBContext)
        {
            _applicationDBContext = applicationDBContext;
        }
        public Account Add(Account account)
        {
            Account account1 = new Account();
            try
            {
                
                account1.Username = account.Username;
                account1.Password = account.Password;
                account1.dataUpdate = DateTime.UtcNow;
                account1.dateCreate = DateTime.UtcNow;
                account1.IdRole = 1;
                account1.status = false;
                account1.CodeAccount = Helpers.GenerateCode();
                _applicationDBContext.Account.Add(account1);
                _applicationDBContext.SaveChanges();
                return account1;
            }
            catch (Exception e)
            {
                return account1;
            }
           

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