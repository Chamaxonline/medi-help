using Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entity.Models
{
    public class Patient: BaseEntity
    {
        [Key]
        public int Id { get; set; }
        [StringLength(250)]
        public string FirstName { get; set; }
        [StringLength(250)]
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public GenderEnum Gender { get; set; }
    }
}
