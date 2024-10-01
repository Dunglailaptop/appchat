using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ApiResponse> Add(Account account)
        {

            try
            {
                Account account1 = new Account();
                Account AccCheckUsed = await _applicationDBContext.Account.Where(x => x.Username == account.Username).FirstOrDefaultAsync();
                if (AccCheckUsed == null)
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
                    return new ApiResponse
                    {
                        Message = "Tao tai khoan thanh cong",
                        Data = null,
                        Success = true
                    };
                }

                return new ApiResponse
                {
                    Message = "Tai khoan da ton tai",
                    Data = null,
                    Success = false
                };
            }
            catch (Exception e)
            {
                return new ApiResponse
                {
                    Message = "Khong tao duoc tai khoan co van de xay ra",
                    Data = null,
                    Success = false
                };
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