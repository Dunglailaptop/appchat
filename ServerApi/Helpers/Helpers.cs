using System;
using System.Collections.Generic;

class Helpers
{
    // Danh sách các mã đã được sinh ra để đảm bảo không trùng lặp
    private static HashSet<string> existingCodes = new HashSet<string>();

    // Hàm sinh mã
    public static string GenerateCode()
    {
        Random random = new Random();
        string code;
        do
        {
            // Sinh ra số ngẫu nhiên và kết hợp với tiền tố "TK"
            int randomNumber = random.Next(1000, 9999); // Số ngẫu nhiên 4 chữ số
            code = $"TK{randomNumber}";
        }
        // Kiểm tra nếu mã đã tồn tại thì sinh mã mới
        while (existingCodes.Contains(code));

        // Thêm mã vào danh sách để theo dõi
        existingCodes.Add(code);
        return code;
    }

  
}
