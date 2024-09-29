using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApi.Model
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdAccount { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string CodeAccount { get; set; }
        [Column(TypeName = "varchar(255)")]
        public string Username { get; set; }
        [Column(TypeName = "varchar(255)")]
        public string Password { get; set; }
        public int IdRole {get;set;}
        public DateTime dateCreate {get;set;} 
        public DateTime dataUpdate {get;set;}  
        
        public bool Enable {get;set;}
        public bool status { get; set; }    

    }

    public class LoginModel {
        public string Username {get;set;}

        public string Password {get;set;}
    }
}