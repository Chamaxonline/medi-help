using Common.Enum;
using Entity.Mappings;
using Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entity.ViewModels
{
    public class PatientViewModel: IMapBoth<Patient>
    {
        public int? Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public Gender Gender { get; set; }
    }
}
