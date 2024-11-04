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

    public IEnumerable<Object> GetAll(int record_value)
    {
        string query = "SELECT * FROM \"patient\" order by stt asc OFFSET @offset LIMIT 20;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new {offset = record_value});
        }
    }

    public int GetCount() {
        string query = "SELECT count(*) FROM \"patient\";";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.QuerySingle<int>(query);
        }
    }

   public IEnumerable<Object> sreach(string keysreach)
    {
        string query = "SELECT * FROM \"patient\" WHERE patient_code = @code;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new { code = keysreach });
        }
    }



}
