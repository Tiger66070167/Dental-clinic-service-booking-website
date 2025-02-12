import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import './style_history.css';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "09:00 น.", "10:00 น.", "11:00 น.", "12:00 น.",
    "13:00 น.", "14:00 น.", "15:00 น.", "16:00 น.",
    "17:00 น.", "18:00 น.", "19:00 น."
  ];

  return (
    <div>
      <header>
        <button className="back-button">←</button>
        <h2>ควยมานพ</h2>
        <div>
            <FaBell size={45}/>
            <button>เข้าสู้ระบบ</button>
        </div>
      </header>

      <div className="top">
        <h1>จองนัดหมาย</h1>
      </div>

      {/* ส่วนจองนัดหมาย (booking-section) */}
      <div className="booking-section">
        <div className="booking-date">
          <label>จองวันนัดหมาย</label>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
        </div>
        <div className="booking-time">
          <label>จองเวลานัดหมาย</label>
          <div className="time-options">
            {times.map(time => (
              <button 
                key={time} 
                className={`time-button ${selectedTime === time ? "selected" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ปุ่มยืนยันอยู่ด้านล่างสุด */}
      <div className="booking-confirm">
        <button className="confirm-button">ยืนยัน</button>
      </div>
    </div>
  );
};

export default BookingPage;
