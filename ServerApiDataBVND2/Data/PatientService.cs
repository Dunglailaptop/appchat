using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using ServerApiDataBVND2.Model;
using Npgsql;

public class PatientService
{
    private readonly string _connectionString;

    public PatientService(string connectionString)
    {
        _connectionString = connectionString;
    }

    public IEnumerable<Object> GetAll()
    {
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>("SELECT * FROM \"patient\" order by stt asc OFFSET 1 LIMIT 20; ");
        }
    }



}
