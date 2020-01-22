using Microsoft.EntityFrameworkCore.Migrations;

namespace MalokaOutlet.Repository.Migrations
{
    public partial class NewColumnPictureName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PictureName",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PictureName",
                table: "Products");
        }
    }
}
