using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using ServerApiDataBVND2.Model;

namespace ServerApiDataBVND2.Data
{
    public class PatientData
    {

        private static PatientData instance;
        public static PatientData Instance
        {
            get { if (instance == null) instance = new PatientData(); return PatientData.instance; }
            private set { PatientData.instance = value; }
        }

        private PatientData()
        { }
        public List<Account> showlistdanhmuc()
        {
            List<Account> dm = new List<Account>();
            DataTable data = DataProvider.Instance.ExecuteQuery("select * from account");
            foreach (DataRow row in data.Rows)
            {
                Account dmm = new Account();
                dmm.IdAccount = (int)row["IdAccount"];
                dmm.CodeAccount = row["CodeAccount"].ToString();
                dmm.Username = row["Username"].ToString();
                dmm.Password = row["Password"].ToString();
                dmm.IdRole = (int)row["IdRole"];
                dmm.dataUpdate =  row["dataUpdate"].ToString();
                dmm.dateCreate = row["dataCreate"].ToString();
                dmm.Enable = (bool)row["Enable"];
                dmm.status = (bool)row["status"];
                dm.Add(dmm);
            }
            return dm;
        }
    }
}