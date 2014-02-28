using BASTAEndToEnd.Models;

namespace BASTAEndToEnd.Repositories.EF
{
    public class CountriesRepository : EntityFrameworkRepository<EndToEndDbContext, Country>
    {
    }
}