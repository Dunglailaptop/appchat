using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApiDataBVND2.Model
{
    public class Account
    {
       
        public int IdAccount { get; set; }
       
        public string CodeAccount { get; set; }
       
        public string Username { get; set; }
       
        public string Password { get; set; }
        public int IdRole { get; set; }
        public DateTime dateCreate { get; set; }
        public DateTime dataUpdate { get; set; }

        public bool Enable { get; set; }
        public bool status { get; set; }

    }
    public class recordvalue {
        public int record_value {get;set;}
    }
}