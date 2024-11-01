using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApiDataBVND2.Model;
using ServerApiDataBVND2.Data;

namespace ServerApiDataBVND2.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
    
        [HttpGet("getListPatient")]
        public IActionResult getlistpatient(){
            List<Account> account = PatientData.instance.showlistdanhmuc();
            return Ok(account);
        }
    }
}