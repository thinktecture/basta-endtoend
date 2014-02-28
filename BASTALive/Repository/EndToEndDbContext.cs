using System.Data.Entity;
using BASTAEndToEnd.Models;

namespace BASTAEndToEnd.Repositories.EF
{
    public class EndToEndDbContext : DbContext
    {
        public EndToEndDbContext()
            : base("name=EndToEndDbContext")
        {
            this.Configuration.AutoDetectChangesEnabled = false;
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            this.Configuration.ValidateOnSaveEnabled = false;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Customer>().HasKey(k => k.Id);
            modelBuilder.Entity<Country>().HasKey(k => k.Id);
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}