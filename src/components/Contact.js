import React from 'react';
import '../scss/Contact.scss';

export default function Contact() {
    return (
        <main className="contact-page">
            <h1 className="contact-header">Contact</h1>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name..."/>
                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" placeholder="Email Address..." />
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                <button type="submit">Send Message</button>
            </form>
        </main>
    )
}
