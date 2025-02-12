import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // ใช้ Hook นี้เพื่อเปลี่ยนหน้า

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
    console.log('ข้อมูลที่ลงทะเบียน:', formData);
    // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือทำการลงทะเบียน
  };

  return (
    <div className='container'>
      <div className="register-container center">
        <div className="register-card">
          <h2 className="register-title">เข้าสู่ระบบ</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="ชื่อผู้ใช้"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="รหัสผ่าน"
              />
            </div>
            <div className="check">
              <input
                type="checkbox"
                className="form-control"
                id="remember"
                name="remember"
                value={formData.remember}
                onChange={handleChange}
                required
              />จดจำการเข้าสู่ระบบ
            </div>
            <button type="submit" className="register-button">เข้าสู่ระบบ</button>
          </form>
          <div className="text-center mt-3">
            <p>มีบัญชีอยู่แล้ว? <span className="login-link" onClick={() => navigate('/register')} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>เข้าสู่ระบบ</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
