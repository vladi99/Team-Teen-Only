﻿using System.Data.Entity;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using StupidChessBase.Data;
using StupidChessBase.Data.Contexts;
using StupidChessBase.Data.Migrations;
using StupidChessBase.Data.Migrations.BestGamesContext;
using StupidChessBase.Data.Models.SqlLiteModels;

namespace StupidChessBase
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // SQL SERVER
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ApplicationDbContext, DbMigrationsConfig>());

            //Postgre
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<BestGamesContext, Configuration>());

            //SQLite
            IClubContext clubs = new ClubContext();
            clubs.Clubs.Add(new Club() { Name = "Sofia" });
            clubs.SaveChanges();

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
