using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using ServerApiDataBVND2.Model;
using Npgsql;

public class PrescriptionService
{
    private readonly string _connectionString;

    public PrescriptionService(string connectionString)
    {
        _connectionString = connectionString;
    }
    public IEnumerable<Object> GetAll(int record_value)
    {
        string query = "SELECT * FROM \"prescription\" order by stt asc OFFSET @offset LIMIT 20;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new { offset = record_value });
        }
    }
    public int GetCount()
    {
        string query = "SELECT count(*) FROM \"prescription\";";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.QuerySingle<int>(query);
        }
    }

    public IEnumerable<Object> sreach(string keysreach)
    {
        string query = "SELECT * FROM \"prescription\" WHERE prescription_id = @code;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();

            // Attempt to parse keysreach as an integer
            if (int.TryParse(keysreach, out int code))
            {
                return connection.Query<Object>(query, new { code });
            }
            else
            {
                throw new ArgumentException("The search key must be a valid integer.");
            }
        }
    }
    //lấy chi tiết toa thuốc
     public IEnumerable<Object> GetAllDetail(int record_value)
    {
        string query = "SELECT * FROM \"prescription_details\" order by stt asc OFFSET @offset LIMIT 20;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new { offset = record_value });
        }
    }
    public int GetCountDetail()
    {
        string query = "SELECT count(*) FROM \"prescription_details\";";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.QuerySingle<int>(query);
        }
    }

    public IEnumerable<Object> sreachDetail(string keysreach)
    {
        string query = "SELECT * FROM \"prescription_details\" WHERE prescription_id = @code;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();

            // Attempt to parse keysreach as an integer
            if (int.TryParse(keysreach, out int code))
            {
                return connection.Query<Object>(query, new { code });
            }
            else
            {
                throw new ArgumentException("The search key must be a valid integer.");
            }
        }
    }
}
