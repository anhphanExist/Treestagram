using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Treestagram.Controllers
{
    public class UserController : ApiController
    {
        BusinessLogicLayer.User logicUser;

        
        [HttpGet]
        public bool CheckInfoLogin(string username, string password)
        {
            logicUser = new BusinessLogicLayer.User();
            return logicUser.CheckUserLogin(username, password);
        }
    }
}