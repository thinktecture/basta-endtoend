using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BASTAEndToEnd.Models;

namespace BASTAEndToEnd.Repositories.EF
{
    public class CustomersRepository : EntityFrameworkRepository<EndToEndDbContext, Customer>
    {
    }
}