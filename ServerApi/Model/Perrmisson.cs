using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApi.Model
{
    public class Perrmisson
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdPermisson { get; set; }
        [Column(TypeName = "varchar(50)")]
        public string CodePermisson { get; set; }

        public int IdRoles { get; set; }

        public bool IsRead { get; set; } = true;
        public bool IsCreate { get; set; } = true;
        public bool IsUpdate { get; set; } = true;
        public bool IsDetele { get; set; } = true;
        public DateTime DateCreate { get; set; }
        public DateTime DateUpdate { get; set; }
        public bool Enable { get; set; }
        public bool status { get; set; }

    }
}