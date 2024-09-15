using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.X509Certificates;

namespace ServerApi.Model
{
    public class Message
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdMessage { get; set; }
        [Column(TypeName = "TEXT")]
        public string Messages { get; set; }
        public int IdBoxChat { get; set; }

        public int IdUser { get; set; }
        
        public int type_message {get;set;}
        public DateTime dateCreate { get; set; }
        public DateTime dataUpdate { get; set; }

        public bool Enable { get; set; }
        public bool status { get; set; }

    }
}