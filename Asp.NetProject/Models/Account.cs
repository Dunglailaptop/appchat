using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.NetProject.Models
{
    public class Account
    {
        public int IdAccount { get; set; }
       
        public string CodeAccount { get; set; }
        
        public string Username { get; set; }
       
        public string Password { get; set; }

        public bool status { get; set; } = true;

    }
}