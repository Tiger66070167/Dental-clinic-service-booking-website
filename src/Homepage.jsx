import React from "react";
import { FaTooth, FaPhone, FaStar } from "react-icons/fa";
import CardContainer from "./CardContainer";
import Card from "./Card";

const services = [
    { name: "Teeth Cleaning", icon: <FaTooth size={24} />, description: "Professional teeth cleaning to maintain oral hygiene." },
    { name: "Cavity Filling", icon: <FaTooth size={24} />, description: "Safe and effective cavity treatments." },
    { name: "Teeth Whitening", icon: <FaTooth size={24} />, description: "Brighten your smile with our whitening services." },
    ];

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
