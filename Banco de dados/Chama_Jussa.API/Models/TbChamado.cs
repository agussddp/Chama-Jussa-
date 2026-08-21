using System;
using System.Collections.Generic;

namespace Chama_Jussa.API.Models;

public partial class TbChamado
{
    public string IdChamado { get; set; } = null!;

    public string Titulo { get; set; } = null!;

    public string? Equipamento { get; set; }

    public string Localiza { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string? FotoOsUrl { get; set; }

    public string StatusOs { get; set; } = null!;

    public DateTime DataCriacao { get; set; }

    public DateTime DataAtualizacao { get; set; }

    public string? IdUsuario { get; set; }

    public virtual TbUsuario? IdUsuarioNavigation { get; set; }
}
