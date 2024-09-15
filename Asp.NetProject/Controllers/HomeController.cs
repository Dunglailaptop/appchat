using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Asp.NetProject.Models;

namespace Asp.NetProject.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
     private readonly ExternalApiService _externalApiService;

    public HomeController(ILogger<HomeController> logger, ExternalApiService externalApiService)
    {
        _logger = logger;
        _externalApiService = externalApiService;
    }

    public async Task<IActionResult> Index()
    {
        
        var apiUrl = "http://demoblazorserverapp:8080/api/Account";  // Replace with the actual API URL
        var data = await _externalApiService.GetMyModelData(apiUrl);  // Replace `object` with your expected data type
        return View(data);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
