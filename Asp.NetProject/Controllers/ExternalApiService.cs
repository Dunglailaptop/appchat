using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.NetProject.Models;
using Newtonsoft.Json;

namespace Asp.NetProject.Controllers
{
    public class ExternalApiService
    {
        private readonly HttpClient _httpClient;

        public ExternalApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<T> GetDataFromApi<T>(string url)
        {
            var response = await _httpClient.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var jsonData = await response.Content.ReadAsStringAsync();
                var dataprint = JsonConvert.DeserializeObject<T>(jsonData);
                Console.Write(dataprint);
                return JsonConvert.DeserializeObject<T>(jsonData);
            }
            else
            {
                // Handle error response
                throw new HttpRequestException($"Error getting data from API. Status code: {response.StatusCode}");
            }
        }
        public async Task<List<Account>> GetMyModelData(string url)
        {
            return await GetDataFromApi<List<Account>>(url);
        }


    }
}