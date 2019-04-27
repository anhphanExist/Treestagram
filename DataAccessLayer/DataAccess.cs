using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer
{
    public class DataAccess
    {
        string connectionString = "Data Source=DESKTOP-PDSIPHP;Initial Catalog = MisaBook; Integrated Security = True";
        SqlConnection sqlConnection;
        SqlCommand sqlCommand;

        public DataAccess()
        {
            sqlConnection = new SqlConnection(connectionString);
            if (sqlConnection.State == ConnectionState.Closed)
            {
                sqlConnection.Open();
            }
        }

        public bool CheckUserInfo(string username, string password)
        {
            sqlCommand = sqlConnection.CreateCommand();
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.CommandText = "[dbo].[Proc_CheckLoginInfo]";
            sqlCommand.Parameters.AddWithValue("@Username", username);
            sqlCommand.Parameters.AddWithValue("@Password", password);
            bool res = (bool)sqlCommand.ExecuteScalar();
            return res;
        }
    }
}
