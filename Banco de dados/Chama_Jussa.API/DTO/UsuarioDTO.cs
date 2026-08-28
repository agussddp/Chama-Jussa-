using System.ComponentModel.DataAnnotations;
using Chama_Jussa.API.Enum;

namespace Chama_Jussa.API.DTO
{
    public class UsuarioDTO
    {
        [Required(ErrorMessage = "O Email do usuário é obrigatório!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "A Senha do usuário é obrigatória!")]
        public string? Senha { get; set; }

        public IFormFile? Foto_usuario { get; set; }

        public TipoUsuario TipoUsuario { get; set; }


        public string? Nome { get; set; }
    }
}
