using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServerApi.Data;
using ServerApi.Services;

namespace ServerApi.Controllers
{
    [Route(("api/Account"))]
    [ApiController]
    public class AccountController: ControllerBase
    {
         private readonly AccountRepository _AccountRepository;
         public AccountController(AccountRepository accountRepository)
         {
           _AccountRepository = accountRepository;
         }
         
         [HttpGet]
         public IActionResult GetAll()
         {
            try {
                return Ok(_AccountRepository.GetAll());
                 
            }catch {
               return StatusCode(StatusCodes.Status500InternalServerError);
            }
         }
         [HttpGet("{id}")]
         public IActionResult GetById(int id) {
            try {
               var data  = _AccountRepository.GetById(id);
               if (data != null){
                  return Ok(data);
               }else {
                  return NotFound();
               }
            }catch {
               return StatusCode(StatusCodes.Status500InternalServerError);
            }
         }
        
    }
}