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
        public IActionResult getlistpatient(int record_value, string? keysreach ){
            IEnumerable<Object> datares;

            if (!string.IsNullOrEmpty(keysreach)) {
                datares = _patienService.sreach(keysreach);
            } else {
                datares = _patienService.GetAll(record_value);
            }
           
            var countdata = _patienService.GetCount();

            // Khởi tạo dataArray với cú pháp đối tượng ẩn danh
            var dataArray = new
            {
                datares = datares,
                countdata = countdata
            };

            ApiResponse apires = new ApiResponse
            {
                Data = dataArray,
                Message = "200",
                Success = true
            };

            return Ok(apires);
        }
        
    }
}