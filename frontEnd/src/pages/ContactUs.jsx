import React from "react";
import '../css/contactUs.css';

const ContactUs = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
                <div style={{ width: "50%" }}>
                    <h1 style={{ marginBottom: "2rem" }}>Contact Us</h1>
                    <form>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." />
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email.." />
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input type="submit" value="Submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "0.8rem 1.6rem", border: "none", borderRadius: "0.2rem" }} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
