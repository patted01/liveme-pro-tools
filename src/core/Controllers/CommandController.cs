using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommandController : ControllerBase
    {
        /// Shutdown the LMPT.core background application
        [HttpPost("shutdown")]
        public void Shutdown()
        {
            Environment.Exit(0);
        }
    }
}
