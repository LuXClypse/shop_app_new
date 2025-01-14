import React from "react";
import Header from "../header/Header.jsx";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <Header />
            <section className="about-hero">
                <h1>Welcome to Our Shop!</h1>
                <p>Your one-stop destination for quality products and exceptional service.</p>
            </section>

            <section className="about-details">
                <div className="about-mission">
                    <h2>Our Mission</h2>
                    <p>We aim to provide high-quality products at affordable prices while delivering outstanding customer experiences.</p>
                </div>

                <div className="about-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li>Customer Satisfaction</li>
                        <li>Integrity and Trust</li>
                        <li>Innovation</li>
                        <li>Community Impact</li>
                    </ul>
                </div>

                <div className="about-story">
                    <h2>Our Story</h2>
                    <p>Founded in 2010, we started as a small local shop and have grown into a beloved brand trusted by thousands of customers. We owe our success to our dedication and our amazing community.</p>
                </div>
            </section>

            <section className="about-contact">
                <h2>Contact Us</h2>
                <p>Have questions? Reach out to us at:</p>
                <p>Email: support@ourshop.com</p>
                <p>Phone: (123) 456-7890</p>
            </section>
        </div>
    );
};

export default About;
