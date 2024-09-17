using System.Text;
using Microsoft.EntityFrameworkCore;
using ServerApi.Data;
using ServerApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ServerApi.Model;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
Guid guid = Guid.NewGuid();
// Khởi tạo đối tượng Configuration
var idtoken = builder.Configuration.GetSection("AppSetting");
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.Configure<AppSetting>(builder.Configuration.GetSection("AppSetting"));


var dbhost = Environment.GetEnvironmentVariable("DB_HOST");
var dbName = Environment.GetEnvironmentVariable("DB_NAME");
var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD");
var connectionString = $"Host={dbhost};Port=5432;Database={dbName};Username=postgres;Password={dbPassword};Pooling=true;";
builder.Services.AddDbContext<ApplicationDBContext>(option =>
   option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();

var getkey = builder.Configuration["AppSetting:SecretKey"];
var securityKey = Encoding.UTF8.GetBytes(getkey);
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt =>
{
   opt.TokenValidationParameters = new TokenValidationParameters
   {
      ValidateIssuer = false,
      ValidateAudience = false,

      ValidateIssuerSigningKey = true,
      IssuerSigningKey = new SymmetricSecurityKey(securityKey),

      ClockSkew = TimeSpan.Zero,
   };
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();

