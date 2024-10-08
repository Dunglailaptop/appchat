using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServerApi.Model;

namespace ServerApi.Services
{
    public interface IUpLoadFileRepository
    {
        Task<ApiResponse> UploadFile(List<IFormFile> files); 
    }
}