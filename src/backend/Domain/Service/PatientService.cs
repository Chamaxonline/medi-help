using AutoMapper;
using Domain.Service.Interface;
using Entity.Models;
using Entity.ViewModels;
using Microsoft.AspNetCore.Http;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Service
{
    public class PatientService : Profile, IPatientService
    {
        private readonly IPatientRepository _patientRepository;
        public PatientService(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public async Task<Patient> Create(Patient patient)
        {
            return await _patientRepository.Add(patient);
        }
        public async Task<Patient> Get(int id)
        {
            return await _patientRepository.GetById(id);
        }
        public async Task<List<Patient>> GetAll()
        {
            IEnumerable<Patient> patients = await _patientRepository.GetAll();
            return patients.ToList();
        }

    }
}
