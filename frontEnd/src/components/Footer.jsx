import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
                    <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/ibrahimafzaltelehealth/" target={'_blank'} className="text-white me-4 ">
                                <i className="fab fa-facebook-f " />
                            </a>
                            <a href="https://wa.me/+923340808849" target="_blank" className="text-white me-4">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                        </div>
                    </section>
                    <section className>
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold">I & A Clinic</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        At our online clinic, we are dedicated to providing you with the highest quality healthcare services.
                                    </p>
                                    <p>
                                        Our team of experienced medical professionals is committed to ensuring that you receive the care and attention you need to live a healthy and happy life.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Clinics</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />

                                    <p>
                                        <Link href="#!" className="text-white text-decoration-none blue-hover">
                                            Blood Pressure Clinic
                                        </Link>
                                    </p>

                                    <p>
                                        <Link href="#!" className="text-white text-decoration-none blue-hover">
                                            Diabetes/ Sugar Clinic
                                        </Link>
                                    </p>

                                    <p>
                                        <Link href="#!" className="text-white text-decoration-none blue-hover">
                                            Psychiatry Clinic ( see a UK psychiatrist on line )
                                        </Link>
                                    </p>

                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <p>
                                        <Link className="text-white text-decoration-none blue-hover" to="/doctors">Doctors</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white text-decoration-none blue-hover" to="/about">About</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white text-decoration-none blue-hover" to="/contact">Contact Us</Link>
                                    </p>
                                    <p>
                                        <Link className="text-white text-decoration-none blue-hover" to="/appointment">Make an Appointment</Link>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: '#7c4dff', height: 2 }} />
                                    <a href="https://goo.gl/maps/vnz4rapWKGDk2Jg66" target={'_blank'} className="text-white text-decoration-none blue-hover"><p><i className="fas fa-home mr-3" /> Mandi Town Bhakkar</p></a>
                                    <a href="mailto:info@iatelehealth.com" target={'_blank'} className="text-white text-decoration-none blue-hover"><p><i className="fas fa-envelope mr-3" /> info@iatelehealth.com</p></a>
                                    <a href="tel:+92 334 0808849" target={'_blank'} className="text-white text-decoration-none blue-hover"><p><i className="fas fa-phone mr-3" /> +92 334 0808 849</p></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <Link className="text-white" href="https://mdbootstrap.com/"> iatelehealth.com</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer