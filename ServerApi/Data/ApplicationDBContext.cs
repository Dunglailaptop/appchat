using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using ServerApi.Model;

namespace ServerApi.Data
{
    public class ApplicationDBContext: DbContext
    {
     
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions) : base(dbContextOptions)
        {
            try
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if(databaseCreator != null)
                {
                    if (!databaseCreator.CanConnect()) databaseCreator.Create();
                    if (!databaseCreator.HasTables()) databaseCreator.CreateTables();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public DbSet<RefreshToken> RefreshTokens {get;set;}
        public DbSet<Account> Account {get;set;}
        public DbSet<InfoAccount> InfoAccounts {get;set;}
        public DbSet<Perrmisson> Perrmissons {get;set;}

        public DbSet<Roles> Roles  {get;set;}

        public DbSet<BoxChat> BoxChats {get;set;}

        public DbSet<BoxChatGroup> BoxChatGroups {get;set;}

        public DbSet<Message> Messages {get;set;}

        public DbSet<MessageGroup> MessageGroups {get;set;}

        public DbSet<ListUserOfBoxChat> listUserOfBoxChats {get;set;}
 
    }
}