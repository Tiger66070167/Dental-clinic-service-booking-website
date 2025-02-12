import React from "react";
import { FaPhone } from "react-icons/fa";
import CardContainer from "./CardContainer";

const testimonials = [
    { name: "John Doe", review: "Great experience! The staff was friendly and professional.", rating: 5 },
    { name: "Jane Smith", review: "Highly recommend! My teeth feel amazing.", rating: 5 },
    ];

function HomePage(){
    return (
        <div>
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
                <h2>บริการของพวกเรา</h2>
                <CardContainer />
            </div>
        </section>

        {/*Buttom Contact Section */}
        <section>
            <div className="center">
                <h2>เกี่ยวกับเรา</h2>
                <p>Call us for an appointment</p>
                <FaPhone size={20} className="text-blue-500" />
                <span>+1 234 567 890</span>
            </div>
        </section>
        </div>
    );
};

export default HomePage;
