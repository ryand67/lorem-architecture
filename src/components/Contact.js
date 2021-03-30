import React from 'react';
import '../scss/Contact.scss';

export default function Contact() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        document.getElementById('contactForm').reset();
    }

    return (
        <main className="contact-page">
            <h1 className="contact-header">Contact</h1>
            <form onSubmit={(e) => handleFormSubmit(e)} className="contact-form" id="contactForm">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name..." id="formName" />
                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" placeholder="Email Address..." id="formEmail" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="formMessage" cols="30" rows="20" placeholder="Message..."></textarea>
                <button type="submit" id="submitButton">Send Message</button>
            </form>
        </main>
    )
}
