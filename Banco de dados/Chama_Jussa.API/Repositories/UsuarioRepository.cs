using Chama_Jussa.API.Iterfaces;
using Chama_Jussa.API.Models;
using Chama_Jussa.API.Utils;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace Chama_Jussa.API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
    private readonly ChamaJussaContext _context;

    public UsuarioRepository(ChamaJussaContext context)
    {
        _context = context;
    }

        public TbUsuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                TbUsuario usuarioBuscado = _context.TbUsuarios.FirstOrDefault(u => u.Email == email)!;

                if (usuarioBuscado != null)
                {
                    bool confere = Criptografia.CompararHash(senha, usuarioBuscado.Senha);

                    if (confere)
                    {
                        return usuarioBuscado;
                    }
                }
                return null!;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public TbUsuario BuscarPorId(Guid id)
        {
            try
            {
                TbUsuario UsuarioBuscado = _context.TbUsuarios.Find(id.ToString())!;
                return UsuarioBuscado;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(TbUsuario novoUsuario)
        {
            try
            {
                novoUsuario.IdUsuario = Guid.NewGuid().ToString();

                novoUsuario.Senha = Criptografia.GerarHash(novoUsuario.Senha!);

                _context.TbUsuarios.Add(novoUsuario);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                TbUsuario UsuarioBuscado = _context.TbUsuarios.Find(id.ToString())!;

                if (UsuarioBuscado != null)
                {
                    _context.TbUsuarios.Remove(UsuarioBuscado);
                }
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }





}
