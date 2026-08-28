using Chama_Jussa.API.DTO;
using Chama_Jussa.API.Iterfaces;
using Chama_Jussa.API.Models;
using Chama_Jussa.API.Repositories;
using Microsoft.AspNetCore.Authorization;
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


        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {

            try
            {
                return Ok(_usuarioRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_usuarioRepository.Listar());

            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
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

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrador")]
        public async Task<IActionResult> Put(Guid id, [FromForm] UsuarioDTO dto)
        {
            try
            {
                var usuario = _usuarioRepository.BuscarPorId(id);

                if (usuario == null)
                    return NotFound("Usuário não encontrado!");

                usuario.NomeCompleto = dto.Nome;
                usuario.Email = dto.Email;
                usuario.TipoUsuario = dto.TipoUsuario.ToString();

                if (!string.IsNullOrEmpty(dto.Senha))
                    usuario.Senha = dto.Senha;

                if (dto.Foto_usuario != null && dto.Foto_usuario.Length > 0)
                {
                    var extensao = Path.GetExtension(dto.Foto_usuario.FileName);
                    var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

                    var pastaRelativa = "wwwroot/imagens";
                    var caminhoPasta = Path.Combine(
                        Directory.GetCurrentDirectory(),
                        pastaRelativa
                    );

                    if (!Directory.Exists(caminhoPasta))
                        Directory.CreateDirectory(caminhoPasta);

                    // Apaga a foto antiga
                    if (!string.IsNullOrEmpty(usuario.FotoPerfilUrl))
                    {
                        var fotoAntiga = Path.Combine(
                            caminhoPasta,
                            usuario.FotoPerfilUrl
                        );

                        if (System.IO.File.Exists(fotoAntiga))
                            System.IO.File.Delete(fotoAntiga);
                    }

                    var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

                    using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
                    {
                        await dto.Foto_usuario.CopyToAsync(stream);
                    }

                    usuario.FotoPerfilUrl = nomeArquivo;
                }

                _usuarioRepository.Atualizar(usuario);

                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
    }

