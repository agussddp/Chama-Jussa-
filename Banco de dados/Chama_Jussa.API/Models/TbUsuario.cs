using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Chama_Jussa.API.Models;

public partial class TbUsuario
{
    public string IdUsuario { get; set; } = null!;

    public string NomeCompleto { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string? FotoPerfilUrl { get; set; }

    public string TipoUsuario { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<TbChamado> TbChamados { get; set; } = new List<TbChamado>();
}
