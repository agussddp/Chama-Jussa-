using Chama_Jussa.API.DTO;
using Chama_Jussa.API.Iterfaces;
using Chama_Jussa.API.Models;
using Chama_Jussa.API.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Chama_Jussa.API.Controller
{



    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public async Task <IActionResult> Post(UsuarioDTO novoUsuario)
        {
            try
            {
                var usuario = new TbUsuario
                {
                    NomeCompleto = novoUsuario.Nome,
                    Email = novoUsuario.Email,
                    Senha = novoUsuario.Senha
                };

                if (novoUsuario.Foto_usuario != null && novoUsuario.Foto_usuario.Length > 0)
                {
                    var extensao = Path.GetExtension(novoUsuario.Foto_usuario.FileName);
                    var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

                    var pastaRelativa = "wwwroot/imagens";
                    var caminhoPasta = Path.Combine(
                        Directory.GetCurrentDirectory(),
                        pastaRelativa
                    );

                    // Garante que a pasta existe
                    if (!Directory.Exists(caminhoPasta))
                        Directory.CreateDirectory(caminhoPasta);

                    var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

                    using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
                    {
                        await novoUsuario.Foto_usuario.CopyToAsync(stream);
                    }

                    usuario.FotoPerfilUrl = nomeArquivo;
                }

                _usuarioRepository.Cadastrar(usuario);

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = ex.Message,
                    innerException = ex.InnerException?.Message,
                    innerInnerException = ex.InnerException?.InnerException?.Message
                });
            }


            }


        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            var ChamadoBuscado = _usuarioRepository.BuscarPorId(id);
            if (ChamadoBuscado == null)
                return NotFound("Chamado não encontrado!");

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);


            if (!string.IsNullOrEmpty(ChamadoBuscado.FotoPerfilUrl))
            {
                var caminho = Path.Combine(caminhoPasta, ChamadoBuscado.FotoPerfilUrl);

                if (System.IO.File.Exists(caminho))
                    System.IO.File.Delete(caminho);
            }


            try
            {
                _usuarioRepository.Deletar(id);

                return NoContent();


            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }



        }

       
        }
    }

