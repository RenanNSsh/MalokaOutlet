using MalokaOutlet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MalokaOutlet.Repository.Config {
    public class OrderConfiguration : IEntityTypeConfiguration<Order> {
        public void Configure(EntityTypeBuilder<Order> builder) {
            builder.HasKey(order => order.Id);

            builder.Property(order => order.OrderDate)
                .IsRequired();

            builder.Property(order => order.EstimatedDeliveryDate)
                .IsRequired();

            builder.Property(order => order.ShipAddressNumber)
                .IsRequired();

            builder.Property(order => order.ShipCity)
                .HasMaxLength(25)
                .IsRequired();

            builder.Property(order => order.ShipFullAddress)
                .HasMaxLength(40)
                .IsRequired();

            builder.Property(order => order.ShipState)
                .HasMaxLength(40)
                .IsRequired();

            builder.Property(order => order.ShipZipCode)
                .HasMaxLength(20)
                .IsRequired();

            /// Reduntant
            builder
                .HasOne(order => order.User);
        }
    }
}
