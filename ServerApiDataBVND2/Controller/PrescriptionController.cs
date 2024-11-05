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
    public class PrescriptionController : ControllerBase
    {
        private readonly PrescriptionService _prescriptionService;
        public PrescriptionController(PrescriptionService PrescriptionService)
        {
            _prescriptionService = PrescriptionService;
        }

        [HttpGet("getListPrescription")]
        public IActionResult getListPrescription(int record_value, string? keysreach ){
            IEnumerable<Object> datares;

            if (!string.IsNullOrEmpty(keysreach)) {
                datares = _prescriptionService.sreach(keysreach);
            } else {
                datares = _prescriptionService.GetAll(record_value);
            }
           
            var countdata = _prescriptionService.GetCount();

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
        
        [HttpGet("getPrescriptionDetail")]
        public IActionResult getPrescriptionDetail(int record_value, string? keysreach ){
            IEnumerable<Object> datares;

            if (!string.IsNullOrEmpty(keysreach)) {
                datares = _prescriptionService.sreachDetail(keysreach);
            } else {
                datares = _prescriptionService.GetAllDetail(record_value);
            }
           
            var countdata = _prescriptionService.GetCountDetail();

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