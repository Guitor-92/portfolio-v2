# Etapa de build com SDK do .NET
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copia os arquivos do projeto
COPY . ./

# Publica o projeto
RUN dotnet publish PortfolioApi.csproj -c Release -o out

# Etapa de runtime com ASP.NET
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Copia os arquivos publicados
COPY --from=build /app/out .

# Inicia a aplicação
ENTRYPOINT ["dotnet", "PortfolioApi.dll"]
