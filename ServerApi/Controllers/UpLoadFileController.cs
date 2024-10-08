using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApi.Model;
using ServerApi.Services;

namespace ServerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UpLoadFileController : ControllerBase
    {
        private readonly IUpLoadFileRepository _IUpLoadFileRepository;

        public UpLoadFileController(IUpLoadFileRepository IUpLoadFileRepository)
        {

            _IUpLoadFileRepository = IUpLoadFileRepository;
        }

        [HttpPost("UpLoadFile")]
        public async Task<IActionResult> UpLoadFile()
        {
            try
            {
                // Lấy danh sách file từ request
                var files = Request.Form.Files.ToList(); // Chuyển thành List<IFormFile>

                // Gọi repository để upload file
                var apiresponse = await _IUpLoadFileRepository.UploadFile(files);

                // Trả về phản hồi HTTP dựa trên kết quả
                if (apiresponse.Success == true)
                {
                    return Ok(apiresponse); // Trả về kết quả thành công
                }
                else
                {
                    return BadRequest(apiresponse); // Trả về lỗi
                }
            }
            catch (Exception ex)
            {
                // Xử lý lỗi và trả về phản hồi lỗi
                return StatusCode(500, new ApiResponse
                {
                    Success = false,
                    Message = $"Internal server error: {ex.Message}"
                });
            }
        }


    }
}