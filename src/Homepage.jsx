import React from "react";
import { FaTooth, FaPhone, FaStar } from "react-icons/fa";
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
            <div className="services">
            <h2>บริการของพวกเรา</h2>

            </div>
        </section>

        {/* Testimonials Section */}
        <section>
            <h2>What Our Clients Say</h2>
            <div>
                <CardContainer />
            </div>
        </section>

        {/*Buttom Contact Section */}
        <section className="text-center bg-gray-100 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-2">Call us for an appointment</p>
            <div className="flex justify-center items-center gap-2 mt-4">
            <FaPhone size={20} className="text-blue-500" />
            <span className="text-lg font-semibold">+1 234 567 890</span>
            </div>
        </section>
        </div>
    );
};

export default HomePage;
