using Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> getSecret()
        {
            return "Secret thing";
        }

        [HttpGet("not-found")]
        public ActionResult<string> getNotFound()
        {
            var thing = _context.Users.Find(-1);
            if (thing == null) return NotFound();
            return Ok(thing);
        }

        [HttpGet("server-error")]
        public ActionResult<string> getServerError()
        {
            var thing = _context.Users.Find(-1);
            var thingtoreturn = thing.ToString();
            return Ok(thingtoreturn);

        }

        [HttpGet("bad-request")]
        public ActionResult<string> getBadRequest()
        {
            return BadRequest("this is a bad request");

        }

    }
}