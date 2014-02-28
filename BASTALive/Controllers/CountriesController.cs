using System.Linq;
using System.Threading;
using System.Web.Http;
using BASTAEndToEnd.Models;
using BASTAEndToEnd.Repositories.EF;
using Thinktecture;

namespace BASTAEndToEnd.ApiControllers
{
    public class CountriesController : ApiController
    {
        private IRepository<Country> repository;

        public CountriesController()
        {
            Thread.Sleep(500);
            repository = new CountriesRepository();
        }

        [HttpGet]
        public string Ping()
        {
            return "OK";
        }

        [HttpGet]
        [ActionName("list")]
        public Result<Country> GetCountries()
        {
            return new Result<Country>(repository.GetAll().ToList());
        }
    }
}