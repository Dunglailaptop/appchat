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
    public class InvoiceIntPatientController : ControllerBase
    {
         private readonly InvoiceInPatientService _invoiceInPatientService;
        public InvoiceIntPatientController(InvoiceInPatientService invoiceInPatientService)
        {
            _invoiceInPatientService = invoiceInPatientService;
        }

        [HttpGet("getListInvoiceInPatient")]
        public IActionResult getListInvoiceInPatient(int record_value, string? keysreach ){
            IEnumerable<Object> datares;

            if (!string.IsNullOrEmpty(keysreach)) {
                datares = _invoiceInPatientService.sreach(keysreach);
            } else {
                datares = _invoiceInPatientService.GetAll(record_value);
            }
           
            var countdata = _invoiceInPatientService.GetCount();

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