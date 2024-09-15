using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerApi.Model
{
    public class BoxChatGroup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdBoxChatGroup { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string CodeBoxChatGroup {get;set;} 
        [Column(TypeName = "varchar(255)")]
        public string ImageBoxGroup {get;set;} = string.Empty;
        [Column(TypeName = "varchar(255)")] 
        public string TitleBoxChatGroup {get;set;} = string.Empty;
        public int type = 2;
        public DateTime dateCreate {get;set;} 
        public DateTime dataUpdate {get;set;}          
        public bool Enable {get;set;}
        public bool status { get; set; }
    }
}