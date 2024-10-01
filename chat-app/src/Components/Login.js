import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

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
    <div className='container'>
      <div className='nav_bar'>
          <h2 className='login'>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className='lbl_username'>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='lbl_password'>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='btn'>
                <button type="submit">Login</button>
            </div>
          
          </form>
        </div>
    </div>
   
  );
}

export default Login;
