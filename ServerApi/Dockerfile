# Sử dụng image .NET SDK để build project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Thiết lập thư mục làm việc
WORKDIR /src

# Sao chép file .csproj của project chính và thư viện bên ngoài
COPY ["ServerApi/ServerApi.csproj", "ServerApi/"]


# Restore các dependencies
RUN dotnet restore "ServerApi/ServerApi.csproj"

# Sao chép toàn bộ project và thư viện bên ngoài
COPY ServerApi/ "ServerApi/"


# Build project
WORKDIR "/src/ServerApi/"
RUN dotnet build "ServerApi.csproj" -c Release -o /app/build

# Publish project
FROM build AS publish
RUN dotnet publish "ServerApi.csproj" -c Release -o /app/publish

# Sử dụng image ASP.NET Core runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final

# Thiết lập thư mục làm việc cho giai đoạn cuối
WORKDIR /app

# Sao chép các file đã publish từ giai đoạn build
COPY --from=publish /app/publish .

EXPOSE 5218

# Thiết lập entry point cho ứng dụng
ENTRYPOINT ["dotnet", "ServerApi.dll"]
