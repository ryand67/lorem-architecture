import React from 'react';
import emailjs from 'emailjs-com';
import '../scss/Contact.scss';

export default function Contact() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_mplbg7h', 'template_vr8wd83', e.target, 'user_8JdlKgob6SqIadG5ELa2O')
            .then((result) => {
          console.log(result.text);
            }, (error) => {
          console.log(error.text);
      });

        document.getElementById('contactForm').reset();

        e.target.reset();
    }

    return (
        <main className="contact-page">
            <h1 className="contact-header">Contact</h1>
            <form onSubmit={(e) => handleFormSubmit(e)} className="contact-form" id="contactForm">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name..." id="formName" required/>
                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" placeholder="Email Address..." id="formEmail" required/>
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="formMessage" cols="30" rows="20" placeholder="Message..." required></textarea>
                <button type="submit" id="submitButton">Send Message</button>
            </form>
        </main>
    )
}
