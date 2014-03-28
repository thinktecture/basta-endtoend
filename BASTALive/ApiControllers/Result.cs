using System.Collections.Generic;

namespace BASTAEndToEnd.ApiControllers
{
    public class Result<T>
    {
        public IEnumerable<T> Entries { get; set; }

        public Result(IEnumerable<T> entries)
        {
            Entries = entries;
        }
    }
}