﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Security;
using System.Web.SessionState;

namespace BASTALive
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            BundleTable.Bundles.Add(new StyleBundle("~/app/css"));
            BundleTable.Bundles.Add(new ScriptBundle("~/app/js"));
        }
    }
}