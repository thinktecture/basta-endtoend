using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BASTALive
{
    public class DemoController :
        ApiController
    {
        public string Get()
        {
            return "OK";
        }
    }
}