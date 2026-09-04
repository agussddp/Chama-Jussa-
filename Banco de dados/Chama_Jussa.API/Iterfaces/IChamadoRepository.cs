using Chama_Jussa.API.Models;
using static System.Net.WebRequestMethods;

namespace Chama_Jussa.API.Iterfaces
{
    public interface IChamadoRepository
    {
        void Cadastrar(TbChamado novoFilme);
        List<TbChamado> Listar();

        void AtualizarIdCorpo(TbChamado filmeAtualizado);

        void AtualizarIdUrl(Guid id, TbChamado filmeAtualizado);

        IEnumerable<TbChamado> ListarPorUsuario(string idUsuario);

        void Deletar(Guid id);
        TbChamado? BuscarPorId(Guid id);
    }
}
