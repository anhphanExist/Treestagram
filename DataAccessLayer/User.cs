using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class User
    {
        DataAccess dataAccess;
        public User()
        {
            dataAccess = new DataAccess();
        }
        public bool CheckUserLogin(string username, string password)
        {
            return dataAccess.CheckUserInfo(username, password);
        }
    }
}
