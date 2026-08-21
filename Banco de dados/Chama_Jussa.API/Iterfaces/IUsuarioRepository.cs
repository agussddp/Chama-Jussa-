using Chama_Jussa.API.Models;

namespace Chama_Jussa.API.Iterfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(TbUsuario novoUsuario);
        TbUsuario BuscarPorId(Guid id);
        TbUsuario BuscarPorEmailESenha(string email, string senha);
    }
}
