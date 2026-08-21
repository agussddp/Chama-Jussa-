using System.ComponentModel.DataAnnotations;

namespace Chama_Jussa.API.DTO
{
    public class UsuarioDTO
    {
        [Required(ErrorMessage = "O Email do usuário é obrigatório!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "A Senha do usuário é obrigatória!")]
        public string? Senha { get; set; }

        [Required(ErrorMessage = "A Foto do usuário é obrigatória!")]
        public IFormFile? Foto_usuario { get; set; }


        public string? Nome { get; set; }
    }
}
