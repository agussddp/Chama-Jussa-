    using Chama_Jussa.API.Iterfaces;
    using Chama_Jussa.API.Models;
    using Chama_Jussa.API.Repositories;
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.IdentityModel.Tokens;
    using Microsoft.OpenApi;
    using System.Security.Claims;

    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddDbContext<ChamaJussaContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    builder.Services.AddScoped<IChamadoRepository, ChamadoRepository>();
    builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

    builder.Services.AddAuthentication(options =>
    {
        options.DefaultChallengeScheme = "JwtBearer";
        options.DefaultAuthenticateScheme = "JwtBearer";
    })

        .AddJwtBearer("JwtBearer", options =>
        {
            options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
            {
                ValidateIssuer = true,

                ValidateAudience = true,

                ValidateLifetime = true,

                IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("ChamaJussa-chave-autenticacao-webapi-dev")),

                ClockSkew = TimeSpan.FromMinutes(5),

                ValidIssuer = "api_ChamaJussa",

                ValidAudience = "api_ChamaJussa",

                RoleClaimType = ClaimTypes.Role
            };
        });


    builder.Services.AddEndpointsApiExplorer();

    builder.Services.AddSwaggerGen(options =>
    {
        options.SwaggerDoc("v1", new Microsoft.OpenApi.OpenApiInfo
        {
            Version = "v1",
            Title = "Chama Jussa API",
            Description = "Uma API com os chamados do Chama Jusaa",
            TermsOfService = new Uri("https://exemplo.com/terms"),
            Contact = new Microsoft.OpenApi.OpenApiContact
            {
                Name = "Digsdev",
                Url = new Uri("https://youtu.be/Fm9XLDoOu6w?si=u-yJ6h6if3jipMM6")
            },
            License = new Microsoft.OpenApi.OpenApiLicense
            {
                Name = "Example License",
                Url = new Uri("https://example.com/license")
            }
        });
        options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "Bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "Insira o Token"
        });

        options.AddSecurityRequirement(document => new OpenApiSecurityRequirement
        {
            [new OpenApiSecuritySchemeReference("Bearer", document)] = Array.Empty<string>().ToList()
        });
    });

    builder.Services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
            });
        });


        builder.Services.AddControllers()
      .AddJsonOptions(options =>
       {
           options.JsonSerializerOptions.Converters.Add(
               new System.Text.Json.Serialization.JsonStringEnumConverter()
           );
       });


    // Adiciona serviço de Controllers
    var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger(options => { });

            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
                options.RoutePrefix = string.Empty;
            });
        }

        app.UseCors("CorsPolicy");

        app.UseStaticFiles();


        app.UseAuthentication();

        app.UseAuthorization();




    //Adiciona o mapeamento de controles
    app.MapControllers();

app.Run("http://192.168.0.244:5000");



