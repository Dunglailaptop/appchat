using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApiDataBVND2.Model
{
    public class ApiResponse
    {
        public bool Success {get;set;}
        public string Message {get;set;}
        public object Data {get;set;}
    }
}