import React from "react";
import ibrahim from "../assets/images/ibrahim.png";
import ahmad from "../assets/images/ahmad.png";
import logo from "../assets/images/logo.png";
import "../css/about.css";

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-banner">
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
            <div className="about-content">
                <h1>About Us</h1>
                <p>
                    Welcome to Ibrahim, Afzal Clinic, an online clinic providing
                    high standard evidence-based clinical treatments. Our team
                    consists of highly trained and experienced professionals led
                    by a Consultant Psychiatrist based in the UK, with many
                    years of experience in the field. We also have a team of
                    General Practitioners who work alongside the Consultant
                    Psychiatrist to provide the highest standard of care to all
                    our patients.
                </p>
                <p>
                    We understand that seeking treatment for mental health
                    issues can be a daunting experience. That's why we strive to
                    provide a safe and welcoming environment where our patients
                    can feel comfortable and confident in their treatment.
                </p>
                <h2>Our Doctors</h2>
                <div class="doctors-container">
                    <div class="doctor-card">
                        <img src={ibrahim} alt="Dr. Ibrahim" />
                        <div>
                            <h3>Dr. Ibrahim</h3>
                            <p>Specializes in Cardiology</p>
                            <p>
                                Dr. Ibrahim is an experienced cardiologist with
                                over 10 years of experience. He is passionate
                                about providing personalized care to his
                                patients and believes in treating the whole
                                person, not just their condition.
                            </p>
                        </div>
                    </div>
                    <div class="doctor-card">
                        <img src={ahmad} alt="Dr. Ahmad" />
                        <div>
                            <h3>Dr. Ahmad</h3>
                            <p>Specializes in Pediatrics</p>
                            <p>
                                Dr. Ahmad is a board-certified pediatrician with
                                over 15 years of experience. He is committed to
                                providing comprehensive care to his patients,
                                from infancy through adolescence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
