using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerApi.Services
{
    public class TimeService:BackgroundService
    {
        private int _currentTimeInSeconds = 0; // Đếm thời gian theo giây

        // Phương thức này trả về thời gian theo định dạng hh:mm:ss
        public string GetFormattedTime()
        {
            TimeSpan time = TimeSpan.FromSeconds(_currentTimeInSeconds);
            return time.ToString(@"hh\:mm\:ss"); // Định dạng thời gian
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _currentTimeInSeconds++; // Mỗi giây tăng giá trị
                await Task.Delay(1000, stoppingToken); // Dừng lại 1 giây
            }
        }
    }
}