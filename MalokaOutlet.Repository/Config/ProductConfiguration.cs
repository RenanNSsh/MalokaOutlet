using MalokaOutlet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace MalokaOutlet.Repository.Config {
    public class ProductConfiguration : IEntityTypeConfiguration<Product> {
        public void Configure(EntityTypeBuilder<Product> builder) {
            builder.HasKey(product => product.Id);

            builder.Property(product => product.Description)
                .HasColumnType("TEXT");

            builder.Property(product => product.Name)
                .HasMaxLength(40)
                .IsRequired();

            builder.Property(product => product.Price)
                .HasColumnType("decimal(18,6)")
                .IsRequired();

                
        }
    }
}
