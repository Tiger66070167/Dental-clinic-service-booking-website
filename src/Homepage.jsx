import React from "react";
import { FaPhone, FaBell } from "react-icons/fa";
import CardContainer from "./CardContainer";

function HomePage(){
    return (
        <div>
        <header>
            <h1>LOGO</h1>
            <div>
                <FaBell size={45}/>
                <button>เข้าสู้ระบบ</button>
            </div>
        </header>
        {/* Top Homepage Section */}
        <section className="top">
            <div>
                <h>การดูแลทางทันตกรรมที่คุณวางใจได้</h>
                <p>จองนัดหมายวันนี้เพื่อรอยยิ้มที่สดใสยิ่งขึ้น!</p>
                <button>จองเลย!</button>
            </div>
        </section>

        {/* Services Section */}
        <section>
            <div className="center">
                <h2>บริการของพวกเรา <input className="search-box" type="text" placeholder="Search..."/>
                </h2>
                
                <CardContainer />
            </div>
        </section>

        {/*Buttom Contact Section */}
        <footer>
            <div>
                <h2>เกี่ยวกับเรา</h2>
                <p>โทรติดต่อเราเพื่อทำการนัดหมาย</p>
                <FaPhone size={20} className="text-blue-500" />
                <span>+1 234 567 890</span>
            </div>
        </footer>
        </div>
    );
};

export default HomePage;
