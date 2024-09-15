using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApi.Model
{
    public class FriendUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdConnect { get; set; }

        public int IdUser { get; set; }

        public int IdFriend { get; set; }

        public DateTime DateCreate { get; set; }
        public DateTime DateUpdate { get; set; }
        public bool Enable { get; set; }
        public bool status { get; set; }
    }
}