using MalokaOutlet.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace MalokaOutlet.Repository.Config {
    public class UserConfiguration : IEntityTypeConfiguration<User> {
        public void Configure(EntityTypeBuilder<User> builder) {
            builder.HasKey(user => user.Id);

            // Builder use Fluent Pattern
            builder
                .Property(user => user.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(user => user.Name)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(user => user.Password)
                .IsRequired()
                .HasMaxLength(400);

            builder
                .Property(user => user.LastName)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .HasMany(user => user.Orders)
                .WithOne(order => order.User);
        }
    }
}
