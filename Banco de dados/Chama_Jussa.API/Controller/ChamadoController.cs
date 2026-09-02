    using Chama_Jussa.API.DTO;
    using Chama_Jussa.API.Iterfaces;
    using Chama_Jussa.API.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http.HttpResults;
    using Microsoft.AspNetCore.Mvc;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using static System.Net.WebRequestMethods;

    namespace Chama_Jussa.API.Controller
    {

        [ApiController]
        [Route("api/[controller]")]
        [Authorize]     
        public class ChamadoController : ControllerBase
        {
            private readonly IChamadoRepository _chamadoRepository;

            public ChamadoController(IChamadoRepository chamadoRepository)
            {
                _chamadoRepository = chamadoRepository;
            }

            [HttpGet]
            public IActionResult Get()
            {




                try
                {
                    var idUsuarioLogado = User.FindFirst(JwtRegisteredClaimNames.Jti)?.Value;
                    var tipoUsuario = User.FindFirst(ClaimTypes.Role)?.Value;

                    var chamados = tipoUsuario == "Administrador"
                        ? _chamadoRepository.Listar()
                        : _chamadoRepository.ListarPorUsuario(idUsuarioLogado!);



                    return Ok(chamados);

                }
                catch (Exception e)
                {

                    return BadRequest(e.Message);
                }
            }


            [HttpGet("{id}")]
            public IActionResult GetById(Guid id)
            {

                try
                {
                    return Ok(_chamadoRepository.BuscarPorId(id));
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }


            [HttpPost]
            public async Task<IActionResult> Post([FromForm] ChamadoDTO novoChamado)
            {


                var usuarioId = User.FindFirst(JwtRegisteredClaimNames.Jti)?.Value; 
                if (usuarioId == null)
                    return Unauthorized("Usuário não identificado.");

                if (string.IsNullOrEmpty(novoChamado.Titulo) ||
                    string.IsNullOrEmpty(novoChamado.Localizacao)
                    )
                {

                    return BadRequest("É obrigatório que o Chamado tenha Titulo e Localização");

                }

                TbChamado chamado = new TbChamado();

                if (novoChamado.Foto_OS != null && novoChamado.Foto_OS.Length > 0)
                {
                    var extensao = Path.GetExtension(novoChamado.Foto_OS.FileName);
                    var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

                    var pastaRelativa = "wwwroot/imagens";
                    var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

                    //Garante que a pasta existe
                    if (!Directory.Exists(caminhoPasta))
                        Directory.CreateDirectory(caminhoPasta);

                    var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

                    using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
                    {
                        await novoChamado.Foto_OS.CopyToAsync(stream);
                    }

                    chamado.FotoOsUrl = nomeArquivo;
                }

                chamado.Titulo = novoChamado.Titulo!;
                chamado.Localiza = novoChamado.Localizacao;
                chamado.Descricao = novoChamado.Descricao ?? "";
                chamado.Equipamento = novoChamado.Equipamento;
                chamado.IdUsuario = usuarioId;


                chamado.StatusOs = "Aberta";
                chamado.DataCriacao = DateTime.Now;
                chamado.DataAtualizacao  = DateTime.Now;

                try
                {
                    _chamadoRepository.Cadastrar(chamado);
                    return StatusCode(201);
                }
                catch (Exception e)
                {
                    return BadRequest(e.InnerException?.Message ?? e.Message);
                }
            }



            [HttpPut("{id}")]
            [Authorize(Roles = "Administrador")]
            public async Task<IActionResult> Put(Guid id, ChamadoDTO chamado)
            {

               
                var ChamadoBuscado = _chamadoRepository.BuscarPorId(id);

                if (ChamadoBuscado == null)
                    return NotFound("Chamado não encontrado");


                var ehAdministrador = User.IsInRole("Administrador");


                // Usuário comum só edita OS aberta
                if (!ehAdministrador && ChamadoBuscado.StatusOs != "Aberta")
                {
                    return BadRequest("Usuários comuns só podem editar chamados em aberto.");
                }

                // Atualiza o status convertendo enum para string
                ChamadoBuscado.StatusOs = chamado.StatusOs.ToString();


                if (ChamadoBuscado == null)
                    return NotFound("Chamado não encontrado");

                if (!string.IsNullOrWhiteSpace(chamado.Titulo))
                    ChamadoBuscado.Titulo = chamado.Titulo;

                if (!string.IsNullOrWhiteSpace(chamado.Localizacao))
                    ChamadoBuscado.Localiza = chamado.Localizacao;

                if (!string.IsNullOrWhiteSpace(chamado.Descricao))
                    ChamadoBuscado.Descricao = chamado.Descricao;

                if (!string.IsNullOrWhiteSpace(chamado.Equipamento))
                    ChamadoBuscado.Equipamento = chamado.Equipamento;

                // Altera o status convertendo enum para string
                ChamadoBuscado.StatusOs = chamado.StatusOs.ToString();

                if (chamado.Foto_OS != null && chamado.Foto_OS.Length != 0)
                {
                    var pastaRelativa = "wwwroot/imagens";
                    var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

                    //Deleta o arquivo antigo
                    if (!String.IsNullOrEmpty(ChamadoBuscado.FotoOsUrl))
                    {
                        var caminhoAntigo = Path.Combine(caminhoPasta, ChamadoBuscado.FotoOsUrl);

                        if (System.IO.File.Exists(caminhoAntigo))
                            System.IO.File.Delete(caminhoAntigo);

                    }

                    //Salva a nova imagem 
                    var extensao = Path.GetExtension(chamado.Foto_OS.FileName);
                    var nomeArquivo = $"{Guid.NewGuid()}{extensao}";    

                    if (!Directory.Exists(caminhoPasta))
                        Directory.CreateDirectory(caminhoPasta);

                    var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);
                    using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
                    {
                        await chamado.Foto_OS.CopyToAsync(stream);
                    }

                    ChamadoBuscado.FotoOsUrl = nomeArquivo;
                }



                try
                {


                    ChamadoBuscado.DataAtualizacao = DateTime.Now;

                    _chamadoRepository.AtualizarIdUrl(id, ChamadoBuscado);
                    return NoContent();
                }
                catch (Exception e)
                {

                    return BadRequest(e.Message);
                }


            }


            [HttpDelete("{id}")]
            [Authorize(Roles = "Administrador")]
            public IActionResult Delete(Guid id)
            {
                var ChamadoBuscado = _chamadoRepository.BuscarPorId(id);
                if (ChamadoBuscado == null)
                    return NotFound("Chamado não encontrado!");

                var pastaRelativa = "wwwroot/imagens";
                var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);


                if (!string.IsNullOrEmpty(ChamadoBuscado.FotoOsUrl))
                {
                    var caminho = Path.Combine(caminhoPasta, ChamadoBuscado.FotoOsUrl);

                    if (System.IO.File.Exists(caminho))
                        System.IO.File.Delete(caminho);
                }


                try
                {
                    _chamadoRepository.Deletar(id);

                    return NoContent();


                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }





            }
        }
    }
