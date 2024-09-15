using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ServerApi.Migrations
{
    /// <inheritdoc />
    public partial class ver6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Account",
                columns: table => new
                {
                    IdAccount = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeAccount = table.Column<string>(type: "varchar(50)", nullable: false),
                    Username = table.Column<string>(type: "varchar(255)", nullable: false),
                    Password = table.Column<string>(type: "varchar(255)", nullable: false),
                    IdRole = table.Column<int>(type: "integer", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Account", x => x.IdAccount);
                });

            migrationBuilder.CreateTable(
                name: "BoxChatGroups",
                columns: table => new
                {
                    IdBoxChatGroup = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeBoxChatGroup = table.Column<string>(type: "varchar(50)", nullable: false),
                    ImageBoxGroup = table.Column<string>(type: "varchar(255)", nullable: false),
                    TitleBoxChatGroup = table.Column<string>(type: "varchar(255)", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoxChatGroups", x => x.IdBoxChatGroup);
                });

            migrationBuilder.CreateTable(
                name: "BoxChats",
                columns: table => new
                {
                    IdBoxChat = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeBoxChat = table.Column<string>(type: "varchar(50)", nullable: false),
                    ImageBox = table.Column<string>(type: "varchar(255)", nullable: false),
                    TitleBoxChat = table.Column<string>(type: "varchar(255)", nullable: false),
                    IdUser = table.Column<int>(type: "integer", nullable: false),
                    IdFriend = table.Column<int>(type: "integer", nullable: false),
                    type = table.Column<int>(type: "integer", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BoxChats", x => x.IdBoxChat);
                });

            migrationBuilder.CreateTable(
                name: "InfoAccounts",
                columns: table => new
                {
                    IdInfoAccount = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeInfoAccount = table.Column<string>(type: "varchar(50)", nullable: false),
                    IdAccount = table.Column<int>(type: "integer", nullable: false),
                    phone = table.Column<string>(type: "char(9)", nullable: false),
                    Address = table.Column<string>(type: "varchar(255)", nullable: false),
                    Email = table.Column<string>(type: "varchar(150)", nullable: false),
                    Image = table.Column<string>(type: "varchar(255)", nullable: false),
                    DateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InfoAccounts", x => x.IdInfoAccount);
                });

            migrationBuilder.CreateTable(
                name: "listUserOfBoxChats",
                columns: table => new
                {
                    IdListUserOfBoxChat = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    IdUser = table.Column<int>(type: "integer", nullable: false),
                    IdBoxChatGroup = table.Column<int>(type: "integer", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_listUserOfBoxChats", x => x.IdListUserOfBoxChat);
                });

            migrationBuilder.CreateTable(
                name: "MessageGroups",
                columns: table => new
                {
                    IdMessageGroup = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MessagesGroup = table.Column<string>(type: "TEXT", nullable: false),
                    IdBoxChatGroup = table.Column<int>(type: "integer", nullable: false),
                    IdUser = table.Column<int>(type: "integer", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MessageGroups", x => x.IdMessageGroup);
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    IdMessage = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Messages = table.Column<string>(type: "TEXT", nullable: false),
                    IdBoxChat = table.Column<int>(type: "integer", nullable: false),
                    IdUser = table.Column<int>(type: "integer", nullable: false),
                    type_message = table.Column<int>(type: "integer", nullable: false),
                    dateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    dataUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.IdMessage);
                });

            migrationBuilder.CreateTable(
                name: "Perrmissons",
                columns: table => new
                {
                    IdPermisson = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodePermisson = table.Column<string>(type: "varchar(50)", nullable: false),
                    IdRoles = table.Column<int>(type: "integer", nullable: false),
                    IsRead = table.Column<bool>(type: "boolean", nullable: false),
                    IsCreate = table.Column<bool>(type: "boolean", nullable: false),
                    IsUpdate = table.Column<bool>(type: "boolean", nullable: false),
                    IsDetele = table.Column<bool>(type: "boolean", nullable: false),
                    DateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Perrmissons", x => x.IdPermisson);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    IdRoles = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CodeRoles = table.Column<string>(type: "varchar(50)", nullable: false),
                    Description = table.Column<string>(type: "varchar(255)", nullable: false),
                    DateCreate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    Enable = table.Column<bool>(type: "boolean", nullable: false),
                    status = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.IdRoles);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Account");

            migrationBuilder.DropTable(
                name: "BoxChatGroups");

            migrationBuilder.DropTable(
                name: "BoxChats");

            migrationBuilder.DropTable(
                name: "InfoAccounts");

            migrationBuilder.DropTable(
                name: "listUserOfBoxChats");

            migrationBuilder.DropTable(
                name: "MessageGroups");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "Perrmissons");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
