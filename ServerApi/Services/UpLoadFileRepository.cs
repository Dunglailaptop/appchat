using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualBasic;
using ServerApi.Data;
using ServerApi.Model;

namespace ServerApi.Services
{
    public class UpLoadFileRepository : IUpLoadFileRepository
    {

        private readonly ApplicationDBContext _applicationDBcontext;
        private readonly IWebHostEnvironment _environment;

        public UpLoadFileRepository(ApplicationDBContext applicationDBContext, IWebHostEnvironment environment)
        {

            _applicationDBcontext = applicationDBContext;
            _environment = environment;
        }

        public async Task<ApiResponse> UploadFile(List<IFormFile> files)
        {
            bool Results = false;
            var uploadedFileNames = new List<string>();
            var apiresponse = new ApiResponse();
            try
            {
                foreach (IFormFile source in files)
                {
                    string Filename = source.FileName;
                    string Filepath = GetFilePath(Filename);

                    if (!System.IO.Directory.Exists(Filepath))
                    {
                        System.IO.Directory.CreateDirectory(Filepath);
                    }

                    string imagepath = Path.Combine(Filepath, Filename);

                    if (System.IO.File.Exists(imagepath))
                    {
                        System.IO.File.Delete(imagepath);
                    }
                    using (FileStream stream = System.IO.File.Create(imagepath))
                    {
                        await source.CopyToAsync(stream); // Đừng quên await để tránh lỗi bất đồng bộ
                        uploadedFileNames.Add(Filename + "/" + Filename);
                        apiresponse.Success = true;
                        apiresponse.Message = Filename + "/" + Filename;
                        apiresponse.Data = uploadedFileNames;

                        Results = true;
                    }
                }
            }
            catch (Exception e)
            {
                // Xử lý ngoại lệ
                apiresponse.Success = false;
                apiresponse.Message = "Error uploading file: " + e.Message;
            }

            return apiresponse;
        }


        private string GetFilePath(string ProductCode)
        {
            // Use Path.Combine to ensure platform-independent path construction
            return this._environment.WebRootPath + "/Uploads/Movie/" + ProductCode;
        }
    }
}