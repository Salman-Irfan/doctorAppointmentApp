import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ibrahim from '../assets/images/ibrahim.png'
import ahmad from '../assets/images/ahmad.png'
import logo from '../assets/images/logo.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../css/swiperEffectOverflow.css";
import "../css/home.css";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                {/* effect coverflow */}
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='hiding'>
                        <div className="card bg-dark text-success mb-4">
                            <img className="card-img background-image" src={logo} alt="Cardimage" />
                            <div className="card-img-overlay overlay text-center d-flex flex-column justify-content-center">
                                <h5 className="card-title text-white bg-success">Ibrahim, Afzal Clinic</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <p className="lead text-warning mb-0">
                                            Consultant Psychiatrist (UK) online clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead text-warning mb-0">
                                            General Practice clinic
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead text-danger mb-0">
                                            We provide high standard evidence-based clinical treatments
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hiding'>
                        <div className="row featurette">
                            <div className="col-md-5 order-md-1">
                                <img src={ibrahim} className="img-fluid mb-3" alt="ibrahim" />
                            </div>
                            <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center">
                                <h2 className="featurette-heading fw-normal lh-1 mb-3">Ibrahim, Afzal Clinic </h2>
                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <p className="lead mb-1">
                                            Virtual care for your health needs
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead mb-1">
                                            Expert medical advice at your fingertips
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead mb-1">
                                            Stay healthy with our online services
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='hiding'>
                        <div className="row featurette">
                            <div className="col-md-5 order-md-1">
                                <img src={ahmad} className="img-fluid mb-3" alt="ahmad"/>
                            </div>
                            <div className="col-md-7 order-md-2 d-flex flex-column justify-content-center">
                                <h2 className="featurette-heading fw-normal lh-1 mb-3">Ibrahim, Afzal Clinic </h2>
                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <p className="lead mb-1">
                                            Evidence-based treatment 
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead mb-1">
                                            Personalized treatment plans
                                        </p>
                                    </li>
                                    <li>
                                        <p className="lead mb-1">
                                            Compassionate and respectful care from our experienced team
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="container my-4">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h1 className="featurette-heading fw-normal lh-1">
                            <span className="text-muted text-decoration-underline">
                                Welcome to I & A
                            </span>
                        </h1>
                        <h2 className="featurette-heading fw-normal lh-1">
                            Best Care For Your Good Health
                        </h2>
                        <p className="lead text-muted text-justify">
                            Welcome to our online clinic! We are a team of highly trained and
                            experienced professionals providing evidence-based clinical
                            treatments to our patients.
                        </p>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary bg-dark text-warning">
                                Our clinic is led by a Consultant Psychiatrist based in the UK
                                with many years of experience in the field. We also have a team of
                                General Practitioners who work alongside the Consultant
                                Psychiatrist to provide the highest standard of care to all our
                                patients.
                            </li>
                            <li className="list-group-item list-group-item-success bg-warning text-dark">
                                At our clinic, we understand that seeking treatment for mental
                                health issues can be a daunting experience. That's why we strive to
                                provide a safe and welcoming environment where our patients can
                                feel comfortable and confident in their treatment.
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 ">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary bg-dark text-warning">Our services are designed to meet the unique needs of each patient. We provide a range of evidence-based treatments for mental health conditions such as depression, anxiety, bipolar disorder, schizophrenia, and more. Our team is highly trained in delivering therapies such as cognitive-behavioral therapy (CBT), psychodynamic therapy, and mindfulness-based therapies.</li>
                            <li className="list-group-item list-group-item-success bg-warning text-dark">We also provide psychiatric consultations and assessments, medication management, and second opinions for those seeking a specialist opinion.</li>
                        </ul>

                    </div>
                    <div className="col-md-5 ml-5">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary bg-dark text-warning">Our online clinic allows patients to access our services from the comfort of their own homes, with appointments available at flexible times to fit around your schedule. Our team utilizes secure and confidential video conferencing software to ensure that patients can receive high-quality care without having to leave their homes.</li>
                            <li className="list-group-item list-group-item-success bg-warning text-dark">At our clinic, we are committed to providing high-quality, compassionate care to our patients. We are constantly striving to improve our services and stay up-to-date with the latest research in the field to ensure that we provide the best possible care to our patients.</li>
                        </ul>

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="img-fluid" src={logo} alt="I $ A Clinic" width={200} height={200} />
                    </div>
                </div>

                <div className="card bg-dark mt-5 mx-5 text-white text-center">
                    <div className="card-body">
                        <h1 className="card-title">"</h1>
                        <p className="card-text pt-5 px-5 fs-2">If you are looking for a <span className='text-warning'> safe </span> and <span className='text-warning'> reliable </span> health service provider, look no further than <span className='text-warning'> our clinic. </span>
                        </p>
                        <p className='card-text pt-5 fs-5'>
                            Contact us today to schedule a <span className='text-warning'> consultation </span> and start your journey towards mental health wellness.
                        </p>

                    </div>
                </div>


            </div>

        </>

    )
}

export default Home