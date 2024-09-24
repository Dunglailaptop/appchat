import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  // Khai báo state để lưu trữ thông tin người dùng
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Xử lý khi người dùng submit form
  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn form reload

    try {
      // Gửi yêu cầu POST tới API
      const response = await axios.post('http://localhost:5128/api/Authentication/Login', {
        username,  // Truyền username
        password,  // Truyền password
      });

      // Log dữ liệu trả về từ API ra console
      console.log('Response data:', response.data);
    } catch (err) {
      // Xử lý lỗi nếu có và log lỗi ra console
      setError('Đăng nhập không thành công!');
      console.error('Login Error:', err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
