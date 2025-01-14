import React from "react";
import Header from "../header/Header.jsx";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <Header />
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us anytime.</p>
            </section>

            <section className="contact-details">
                <div className="contact-info">
                    <h2>Our Address</h2>
                    <p>123 Shop Street</p>
                    <p>Commerce City, CA 90210</p>
                </div>

                <div className="contact-email">
                    <h2>Email Us</h2>
                    <p>Email: support@ourshop.com</p>
                </div>

                <div className="contact-phone">
                    <h2>Call Us</h2>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </section>

            <section className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default Contact;