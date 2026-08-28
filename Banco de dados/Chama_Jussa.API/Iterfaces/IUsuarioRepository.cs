using Chama_Jussa.API.Models;

namespace Chama_Jussa.API.Iterfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(TbUsuario novoUsuario);
        void Deletar(Guid id);
        void Atualizar(TbUsuario usuario);
        List<TbUsuario> Listar();
        TbUsuario BuscarPorId(Guid id);
        TbUsuario BuscarPorEmailESenha(string email, string senha);
    }
}
