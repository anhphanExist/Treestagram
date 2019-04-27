using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer
{
    public class User
    {
        DataAccessLayer.User accessUser;

        public User()
        {
            accessUser = new DataAccessLayer.User();
        }

        public bool CheckUserLogin(string username, string password)
        {
            return accessUser.CheckUserLogin(username, password);
        }
    }
}
