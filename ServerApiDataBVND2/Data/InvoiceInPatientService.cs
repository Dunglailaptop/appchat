using System;
using System.Collections.Generic;
using System.Collections.Generic;
using System.Data.SqlClient;
using Dapper;
using ServerApiDataBVND2.Model;
using Npgsql;



public class InvoiceInPatientService
{
    private readonly string _connectionString;

    public InvoiceInPatientService(string connectionString)
    {
        _connectionString = connectionString;
    }

    public IEnumerable<Object> GetAll(int record_value)
    {
        string query = "SELECT * FROM \"invoiceinpatient\" order by stt asc OFFSET @offset LIMIT 20;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new { offset = record_value });
        }
    }

    public int GetCount()
    {
        string query = "SELECT count(*) FROM \"invoiceinpatient\";";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.QuerySingle<int>(query);
        }
    }

    public IEnumerable<Object> sreach(string keysreach)
    {
        string query = "SELECT * FROM \"invoiceinpatient\" WHERE patient_id = @code;";
        using (var connection = new NpgsqlConnection(_connectionString))
        {
            connection.Open();
            return connection.Query<Object>(query, new { code = keysreach });
        }
    }
}
