import React from "react";
import LinkedInLogo from "../assets/linkedin.svg";
import "../index.css";

export const Contact = () => {
    return (
        <section className="contact">
            <h2>Let's talk!</h2>
            <p>Email: emmasmejladress@gmail.com</p>
            <p className="linkedIn">
                <a
                    href="https://www.linkedin.com/in/emma-franz%C3%A9n-90874346/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={LinkedInLogo} alt="LinkedIn" />
                    emma.franzen
                </a>
            </p>
        </section>
    );
};
