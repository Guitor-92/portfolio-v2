var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurar CORS para permitir requisições do frontend React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy
            .WithOrigins(
                "http://localhost:3000",
                "https://portfolio-v2-66fchx8b9-guilherme-vitor-neves-pereiras-projects.vercel.app",
                "https://portfolio-v2-blond.vercel.app"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
    );
});

var app = builder.Build();

// Ativar CORS
app.UseCors("AllowFrontend");

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Endpoint de contato
app.MapPost("/contato", async (PortfolioApi.DTOs.ContactRequestDto dto) =>
{
    if (string.IsNullOrWhiteSpace(dto.Name) || string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Message))
    {
        return Results.BadRequest("Todos os campos são obrigatórios.");
    }

    var service = new PortfolioApi.Services.ContactService();
    var result = await service.SendContactEmailAsync(dto);
    if (result)
        return Results.Ok(new { success = true, message = "Mensagem enviada com sucesso!" });
    else
        return Results.StatusCode(500);
});

app.Run();

