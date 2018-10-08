using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace eduexperts.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpPost("[action]")]
        public void LoginCheck(string Username, string Password)
        {
            return;
        }
    }
}