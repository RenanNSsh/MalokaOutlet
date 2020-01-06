using Microsoft.EntityFrameworkCore.Migrations;

namespace MalokaOutlet.Repository.Migrations
{
    public partial class ChargePaymentMethod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "PaymentMethod",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 1, "Forma de Pagamento Boleto", "Boleto" });

            migrationBuilder.InsertData(
                table: "PaymentMethod",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 2, "Forma de Pagamento Cartão de Crédito", "Cartão de Crédito" });

            migrationBuilder.InsertData(
                table: "PaymentMethod",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 3, "Forma de Pagamento Depósito", "Depósito" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "PaymentMethod",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "PaymentMethod",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "PaymentMethod",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
