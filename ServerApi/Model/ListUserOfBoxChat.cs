using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerApi.Model
{
    public class ListUserOfBoxChat
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdListUserOfBoxChat { get; set; }

        public int IdUser { get; set; }

        public int IdBoxChatGroup { get; set; }

        public DateTime dateCreate { get; set; }
        public DateTime dataUpdate { get; set; }

        public bool Enable { get; set; }
        public bool status { get; set; }
    }
}