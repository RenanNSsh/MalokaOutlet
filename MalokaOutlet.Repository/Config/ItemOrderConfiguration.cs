using MalokaOutlet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace MalokaOutlet.Repository.Config {
    public class ItemOrderConfiguration : IEntityTypeConfiguration<ItemOrder> {
        public void Configure(EntityTypeBuilder<ItemOrder> builder) {
            builder.HasKey(itemOrder => itemOrder.Id);

            builder.Property(itemOrder => itemOrder.ProductId)
                .IsRequired();

            builder
                .Property(itemOrder => itemOrder.Amount)
                .IsRequired();


        }
    }
}
