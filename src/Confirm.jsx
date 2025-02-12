import React, { useState } from "react";
import './style_history.css';

function History() {
    const [search, setSearch] = useState("");

    return (
        <div className="history-container">
            {/* Header Section */}
            <div className="header">
                <button className="back-button">←</button>
            </div>

            {/* Section: ชื่อหัวข้อ + ช่องค้นหา */}
            <div className="header-section">
                <div className="title-section">
                    <h1 className="title">ยืนยันการนัดหมาย</h1>
                </div>
                <div className="search-container">
                    <div className="search-box-wrapper">
                        <input
                            type="text"
                            placeholder="ค้นหา..."
                            className="search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button className="search-button">🔍</button>
                </div>
            </div>

            {/* Table Section */}
            <div className="table-section">
                <div className="table-container">
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>ผู้เข้ารับบริการ</th>
                                <th>สถานะ</th>
                                <th>ผู้ให้บริการ</th>
                                <th>วันที่ได้รับบริการ</th>
                                <th>บันทึกเพิ่มเติม</th>
                                <th>แก้ไขนัดหมาย</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default History;