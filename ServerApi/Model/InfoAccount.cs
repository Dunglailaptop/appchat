using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace ServerApi.Model
{
    public class InfoAccount
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdInfoAccount {get;set;}
        [Column(TypeName ="varchar(50)")]
        public string CodeInfoAccount  {get;set;}        
        public int IdAccount {get;set;}
        [Column(TypeName ="char(9)")]
        public string phone {get;set;} =string.Empty;
        [Column(TypeName ="varchar(255)")]
        public string Address {get;set;}=string.Empty;
        [Column(TypeName ="varchar(150)")]
        public string Email {get;set;}=string.Empty;
        [Column(TypeName = "varchar(255)")]
        public string Image {get;set;} =string.Empty;
        public DateTime DateCreate {get;set;} 
        public DateTime DateUpdate {get;set;} 
        public bool Enable {get;set;}
        public bool status { get; set; } 

    }
}