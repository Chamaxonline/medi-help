using Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Service.Interface
{
    public interface IPatientService
    {
        Task<Patient> Create(Patient patient);
        Task<Patient> Get(int id);
        Task<List<Patient>> GetAll();
    }
}
