import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71drpqc",
        "template_0l90q0u",
        form.current,
        "iQt2XPGsp0ZXc9qqw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
          alert("Message sent successfully")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="section bg-secondary font-mont" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-contact relative 
                before:absolute before:opacity-40 before:-top-9 before:-left-40
                before:hidden before:lg:block font-mont"
          >
            Contact me
          </h2>
          <p className="subtitle">
            If you have any questions, job opportunity or freelance opportunity, Please feel free to drop an email and i'll respond in no time.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8 w-full max-w-[770px] mx-auto"
        >
          <div className="flex gap-8">
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              name="user_name"
              required
            />
            <input type="text" placeholder="Your Email" className="input" name="user_email" required/>
          </div>
          <input type="text" placeholder="Subject" className="input" name="user_subject" required/>
          <textarea placeholder="Your message" className="textarea" name="message" required/>
          <button className="btn btn-lg bg-accent hover:bg-accent-hover">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
