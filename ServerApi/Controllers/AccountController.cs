using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServerApi.Data;
using ServerApi.Model;
using ServerApi.Services;

namespace ServerApi.Controllers
{
   [Route(("api/Account"))]
   [ApiController]
   public class AccountController : ControllerBase
   {
      private readonly IAccountRepository _AccountRepository;
      private readonly TimeService _timerService;
      public AccountController(IAccountRepository accountRepository, TimeService timeService)
      {
         _AccountRepository = accountRepository;
         _timerService = timeService;
      }

      [HttpGet]
      [Authorize]
      public IActionResult GetAll()
      {
         try
         {
            return Ok(_AccountRepository.GetAll());

         }
         catch
         {
            return StatusCode(StatusCodes.Status500InternalServerError);
         }
      }
      [HttpGet("{id}")]
      public IActionResult GetById(int id)
      {
         try
         {
            var data = _AccountRepository.GetById(id);
            if (data != null)
            {
               return Ok(data);
            }
            else
            {
               return NotFound();
            }
         }
         catch
         {
            return StatusCode(StatusCodes.Status500InternalServerError);
         }
      }
      [HttpPost("CreateAccount")]
      public IActionResult CreateAccount(Account account)
      {
         try
         {
            Account accresponse = _AccountRepository.Add(account);
            if (accresponse != null)
            {
               return Ok(accresponse);
            }
            else
            {
               return BadRequest("Khong tao duoc tai khoan");
            }
         }
         catch
         {
            return StatusCode(StatusCodes.Status500InternalServerError);
         }
      }
      [HttpGet("currenttime")]
      public IActionResult GetCurrentTime()
      {
         var formattedTime = _timerService.GetFormattedTime();
         return Ok(new { currentTime = formattedTime });
      }

   }
}