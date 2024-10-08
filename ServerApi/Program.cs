using System.Text;
using Microsoft.EntityFrameworkCore;
using ServerApi.Data;
using ServerApi.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using ServerApi.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;
using System.Runtime.Intrinsics.X86;

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
builder.Services.AddCors(options => {
    options.AddDefaultPolicy(
        policy => {
            policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
        }
    );
});

var dbhost = Environment.GetEnvironmentVariable("DB_HOST");
var dbName = Environment.GetEnvironmentVariable("DB_NAME");
var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD");
var connectionString = $"Host={dbhost};Port=5432;Database={dbName};Username=postgres;Password={dbPassword};Pooling=true;";
builder.Services.AddDbContext<ApplicationDBContext>(option =>
   option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);
builder.Services.AddScoped<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
builder.Services.AddScoped<IUpLoadFileRepository, UpLoadFileRepository>();
builder.Services.AddSingleton<TimeService>();
builder.Services.AddHostedService<TimeService>();

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

builder.Services.AddSwaggerGen(c =>
{
    // Cấu hình Swagger để sử dụng JWT Bearer Token
    c.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = Microsoft.OpenApi.Models.SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Nhập JWT Token vào đây (ví dụ: Bearer yourToken)"
    });

    c.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});


var app = builder.Build();
app.UseStaticFiles();
app.UseCors();
// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();


app.MapControllers();

app.Run();

