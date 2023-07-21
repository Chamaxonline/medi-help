using Common.Enum;
using Domain.Service.Interface;
using Entity.Models;
using Entity.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/patient")]
    [ApiController]
    public class PatientController : ApiController
    {
        private readonly IPatientService _patientService;
        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult> Register([FromBody]PatientViewModel viewModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }               
                var patient = Mapper.Map<Patient>(viewModel);
                var result = Mapper.Map<PatientViewModel>(await _patientService.Create(patient));
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex.InnerException;
            }

        }

    }
}
