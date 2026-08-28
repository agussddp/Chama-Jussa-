using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Chama_Jussa.API.Models;

public partial class ChamaJussaContext : DbContext
{
    public ChamaJussaContext()
    {
    }

    public ChamaJussaContext(DbContextOptions<ChamaJussaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TbChamado> TbChamados { get; set; }

    public virtual DbSet<TbUsuario> TbUsuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Chama_Jussa;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TbChamado>(entity =>
        {
            entity.HasKey(e => e.IdChamado).HasName("PK__tb_Chama__3592CFDD2C86E2E4");

            entity.ToTable("tb_Chamado");

            entity.Property(e => e.IdChamado)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("ID_Chamado");
            entity.Property(e => e.DataAtualizacao)
                .HasColumnType("datetime")
                .HasColumnName("data_atualizacao");
            entity.Property(e => e.DataCriacao)
                .HasColumnType("datetime")
                .HasColumnName("data_criacao");
            entity.Property(e => e.Descricao).HasMaxLength(255);
            entity.Property(e => e.Equipamento).HasMaxLength(100);
            entity.Property(e => e.FotoOsUrl)
                .HasMaxLength(150)
                .HasColumnName("foto_OS_url");
            entity.Property(e => e.IdUsuario)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("ID_Usuario");
            entity.Property(e => e.Localiza).HasMaxLength(100);
            entity.Property(e => e.StatusOs)
                .HasMaxLength(30)
                .HasColumnName("status_OS");
            entity.Property(e => e.Titulo).HasMaxLength(100);

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.TbChamados)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK__tb_Chamad__ID_Us__5FB337D6");
        });

        modelBuilder.Entity<TbUsuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__tb_Usuar__DE4431C5EBD194C8");

            entity.ToTable("tb_Usuario");

            entity.HasIndex(e => e.Email, "UQ__tb_Usuar__AB6E6164B0595951").IsUnique();

            entity.Property(e => e.IdUsuario)
                .HasMaxLength(40)
                .IsUnicode(false)
                .HasColumnName("ID_Usuario");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.FotoPerfilUrl)
                .HasMaxLength(150)
                .HasColumnName("foto_perfil_url");
            entity.Property(e => e.NomeCompleto)
                .HasMaxLength(255)
                .HasColumnName("nome_completo");
            entity.Property(e => e.Senha)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("senha");
            entity.Property(e => e.TipoUsuario)
                .HasMaxLength(20)
                .HasDefaultValue("Comum")
                .HasColumnName("tipo_usuario");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
