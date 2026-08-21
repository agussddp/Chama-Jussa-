using System.ComponentModel.DataAnnotations;

namespace Chama_Jussa.API.DTO
{
    public class ChamadoDTO
    {
        [Required(ErrorMessage = "O Email do usuário é obrigatório!")]
        public string? Titulo { get; set; }

        public string? Descricao { get; set; }

        public string? Equipamento { get; set; }

        [Required(ErrorMessage = "A Foto do usuário é obrigatória!")]
        public IFormFile? Foto_OS { get; set; }

        [Required(ErrorMessage = "O Nome do usuário é obrigatória!")]
        public string? Localizacao { get; set; }

        [Required(ErrorMessage = "O Status do chamado é obrigatório!")]
        public string? StatusOs { get; set; }
    }
}
