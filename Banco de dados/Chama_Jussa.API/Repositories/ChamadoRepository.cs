using Chama_Jussa.API.Iterfaces;
using Chama_Jussa.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Chama_Jussa.API.Repositories
{
    public class ChamadoRepository : IChamadoRepository
    {

        private readonly ChamaJussaContext _context;

        public ChamadoRepository(ChamaJussaContext context)
        {
            _context = context;
        }


        public void AtualizarIdCorpo(TbChamado ChamadoAtualizado)
        {
            try
            {
                TbChamado ChamadoBuscado = _context.TbChamados.Find(ChamadoAtualizado.IdChamado)!;

                if (ChamadoBuscado != null)
                {
                    ChamadoBuscado.Titulo = ChamadoAtualizado.Titulo;
                    ChamadoBuscado.IdChamado = ChamadoAtualizado.IdChamado;
                }

                _context.TbChamados.Update(ChamadoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarIdUrl(Guid id, TbChamado ChamadoAtualizado)
        {
            try
            {
                TbChamado ChamadoBuscado = _context.TbChamados.Find(id.ToString())!;
                if (ChamadoBuscado != null)
                {
                    ChamadoBuscado.Titulo = ChamadoAtualizado.Titulo;
                    ChamadoBuscado.IdChamado = ChamadoAtualizado.IdChamado;
                }

                _context.TbChamados.Update(ChamadoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public TbChamado BuscarPorId(Guid id)
        {
            try
            {
              
                return _context.TbChamados
                .Include(c => c.IdUsuarioNavigation)
                .FirstOrDefault(c => c.IdChamado == id.ToString());
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(TbChamado novoChamado)
        {
            try
            {
                novoChamado.IdChamado = Guid.NewGuid().ToString();

                _context.TbChamados.Add(novoChamado);
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
                TbChamado ChamadoBuscado = _context.TbChamados.Find(id.ToString())!;

                if (ChamadoBuscado != null)
                {
                    _context.TbChamados.Remove(ChamadoBuscado);
                }
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<TbChamado> Listar()
        {
            var chamados = _context.TbChamados
                .Include(c => c.IdUsuarioNavigation)
                .ToList();


            return chamados;
        }

        public IEnumerable<TbChamado> ListarPorUsuario(string idUsuario)
        {
            return _context.TbChamados
                .Where(c => c.IdUsuario == idUsuario)
                .ToList();
        }
    }
}
