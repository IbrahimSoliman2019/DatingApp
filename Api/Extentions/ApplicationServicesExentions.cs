using Api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Extentions
{
    public static class ApplicationServicesExentions
    {
        public static IServiceCollection AddApplicationServicesExentions(this IServiceCollection services, IConfiguration config)
        {
             services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            return services;
        }
    }
}