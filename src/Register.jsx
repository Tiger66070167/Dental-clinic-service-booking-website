import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
          <h2 className="register-title">ลงทะเบียน</h2>
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
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="อีเมล"
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="ยืนยันรหัสผ่าน"
              />
            </div>
            <button type="submit" className="register-button">สร้างบัญชี</button>
          </form>
          <div className="text-center mt-3">
            <p>มีบัญชีอยู่แล้ว? <a href="/login">เข้าสู่ระบบ</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;