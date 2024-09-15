using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApi.Model
{
    public class Roles
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdRoles {get;set;}
        [Column(TypeName ="varchar(50)")]
        public string CodeRoles {get;set;}
        [Column(TypeName ="varchar(255)")]
        public string Description {get;set;}
        public DateTime DateCreate {get;set;} 
        public DateTime DateUpdate {get;set;} 
        public bool Enable {get;set;}
        public bool status { get; set; } 
    }
}