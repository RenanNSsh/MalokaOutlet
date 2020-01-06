using MalokaOutlet.Domain.Entities.ValueObject;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MalokaOutlet.Repository.Config {
    public class PaymentMethodConfiguration : IEntityTypeConfiguration<PaymentMethod> {
        public void Configure(EntityTypeBuilder<PaymentMethod> builder) {
            builder.HasKey(paymentMethod => paymentMethod.Id);
            builder
                .Property(paymentMethod => paymentMethod.Description)
                .HasMaxLength(100);

            builder
                .Property(paymentMethod => paymentMethod.Name)
                .HasMaxLength(30)
                .IsRequired();

           
        }
    }
}
