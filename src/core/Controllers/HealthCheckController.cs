using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HealthCheckController : ControllerBase
    {
        // GET api/healthcheck
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Healthy :)");
        }
        
    }
}
