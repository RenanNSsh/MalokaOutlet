using MalokaOutlet.Domain.Contracts;
using MalokaOutlet.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalokaOutlet.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UserController: ControllerBase{

        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository) {
            _userRepository = userRepository;
        }

        
        [HttpPost("Verify")]
        public ActionResult VerifyUser([FromBody] User user) {
            try {
                var userSearched = _userRepository.Get(user.Email, user.Password);
                if(userSearched != null) {
                    return Ok(userSearched);
                }
                return BadRequest("Usuário ou Senha Inválido");

            }
            catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }

        [HttpPost]
        public ActionResult Create([FromBody] User user) {
            try {
                var userAlreadyCreated = _userRepository.Get(user.Email);
                if(userAlreadyCreated != null) {
                    return BadRequest("Usuário já foi cadastrado no sistema");
                }
                _userRepository.Add(user);
                return Ok();
            }catch(Exception exception) {
                return BadRequest(exception.ToString());
            }
        }
    }

}
