using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApiDataBVND2.Model;



namespace ServerApiDataBVND2.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly PatientService _patienService;
        
        public PatientController(PatientService PatientService) {
            _patienService = PatientService;
        }

        [HttpGet("getListPatient")]
        public IActionResult getlistpatient(){
            var Account = _patienService.GetAll();
            ApiResponse apires = new ApiResponse {
                 Data = Account,
                 Message = "200",
                 Success = true
            };
           return Ok(apires);
        }
    }
}