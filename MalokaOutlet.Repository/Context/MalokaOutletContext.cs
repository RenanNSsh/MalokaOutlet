using MalokaOutlet.Domain.Entities;
using MalokaOutlet.Domain.Entities.Enumarates;
using MalokaOutlet.Domain.Entities.ValueObject;
using MalokaOutlet.Repository.Config;
using Microsoft.EntityFrameworkCore;

namespace MalokaOutlet.Repository.Context {
    public class MalokaOutletContext: DbContext {
    
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ItemOrder> ItensOrder { get; set; }
        public DbSet<PaymentMethod> PaymentMethod { get; set; }

        public MalokaOutletContext(DbContextOptions options) : base(options) {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            /// Mapping Class here
            modelBuilder.ApplyConfiguration(new ItemOrderConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentMethodConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());

            modelBuilder.Entity<PaymentMethod>().HasData(new PaymentMethod() { Id = (int) TypePaymentMethod.BankSlip, Name = "Boleto", Description = "Forma de Pagamento Boleto" });
            modelBuilder.Entity<PaymentMethod>().HasData(new PaymentMethod() { Id = (int) TypePaymentMethod.CreditCard, Name = "Cartão de Crédito", Description = "Forma de Pagamento Cartão de Crédito" });
            modelBuilder.Entity<PaymentMethod>().HasData(new PaymentMethod() { Id = (int) TypePaymentMethod.Deposit, Name = "Depósito", Description = "Forma de Pagamento Depósito" });

            base.OnModelCreating(modelBuilder);
        }

    }
}
