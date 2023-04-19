using Common.Enum;
using Entity.Context;
using Entity.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Implementation
{
    public class PatientRepository: EfRepository<Patient> , IPatientRepository
    {
        protected PatientDbContext _context;
        public PatientRepository(PatientDbContext context) :base(context)
        {
            _context = context;
        }
        
    }
}
