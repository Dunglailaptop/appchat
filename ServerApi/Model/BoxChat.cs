using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerApi.Model
{
    public class BoxChat
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdBoxChat { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string CodeBoxChat {get;set;} 
        [Column(TypeName = "varchar(255)")]
        public string ImageBox {get;set;} = string.Empty;
        [Column(TypeName = "varchar(255)")] 
        public string TitleBoxChat {get;set;} = string.Empty;

        public int IdUser {get;set;}

        public int IdFriend {get;set;}

        public int type {get;set;} = 1;
        public DateTime dateCreate {get;set;} 
        public DateTime dataUpdate {get;set;}          
        public bool Enable {get;set;}
        public bool status { get; set; }
        

    }
}