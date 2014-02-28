using System;
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
            BundleTable.Bundles.Add(new StyleBundle("~/app/css")
                .IncludeDirectory("~/libs", "*.css", true)
                .IncludeDirectory("~/app", "*.css", true)
                );

            BundleTable.Bundles.Add(new ScriptBundle("~/app/js")
                .IncludeDirectory("~/libs", "*.js", true)
                .IncludeDirectory("~/app", "*.js", true)
                );
        }
    }
}