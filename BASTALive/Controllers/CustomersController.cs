using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Web.Http;
using BASTAEndToEnd.Models;
using BASTAEndToEnd.Repositories.EF;
using Thinktecture;

namespace BASTAEndToEnd.ApiControllers
{
    public class CustomersController : ApiController
    {
        private IRepository<Customer> repository;

        public CustomersController()
        {
            repository = new CustomersRepository();
        }

        [HttpGet]
        public string Ping()
        {
            return "OK";
        }

        [HttpGet]
        [ActionName("list")]
        public Result<Customer> GetCustomers()
        {
            return new Result<Customer>(repository.GetAll().ToList());
        }

        [HttpGet]
        [ActionName("list")]
        public Result<dynamic> GetCustomers(string query)
        {
            var lcQuery = query.ToLowerInvariant();

            var result = repository.GetAll().Where(p =>
                p.Company.ToLower().Contains(lcQuery) ||
                p.Firstname.ToLower().Contains(lcQuery) ||
                p.Lastname.ToLower().Contains(lcQuery)).Select(r => new
                {
                    r.Id,
                    r.Firstname,
                    r.Lastname,
                    r.Company
                }).ToList();

            return new Result<dynamic>(result);
        }

        [HttpGet]
        [ActionName("single")]
        public Customer GetCustomer(int id)
        {
            var result = repository.FindBy(c => c.Id == id).SingleOrDefault();

            if (result != null)
            {
                return result;
            }

            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpPost]
        [ActionName("single")]
        public Customer Save(Customer customer)
        {
            Thread.Sleep(1000);
            if (customer != null)
            {
                Customer updatedCustomer;

                if (customer.Id == 0)
                {
                    updatedCustomer = repository.Insert(customer);
                }
                else
                {
                    updatedCustomer = repository.Update(customer);
                }

                return updatedCustomer;
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }
    }
}