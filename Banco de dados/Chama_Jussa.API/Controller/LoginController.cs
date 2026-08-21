using Chama_Jussa.API.DTO;
using Chama_Jussa.API.Iterfaces;
using Chama_Jussa.API.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;


namespace Chama_Jussa.API.Controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public LoginController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]

        public IActionResult Login([FromForm]LoginDTO loginDTO)
        {
            try
            {
                TbUsuario usuarioBuscado = _usuarioRepository.BuscarPorEmailESenha(loginDTO.Email, loginDTO.Senha!);

                if (usuarioBuscado == null)
                {
                    return NotFound("Email ou Senha Inválidos");
                }


                var claims = new[]
                {
                new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario),
                new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email!)


            };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("ChamaJussa-chave-autenticacao-webapi-dev"));


                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


                var token = new JwtSecurityToken
                    (

                        issuer: "api_ChamaJussa",

                        audience: "api_ChamaJussa",

                        claims: claims,

                        expires: DateTime.Now.AddMinutes(5),

                        signingCredentials: creds
                    );


                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }





    }
}
