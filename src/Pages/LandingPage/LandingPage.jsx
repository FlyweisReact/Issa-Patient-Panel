// Home.js

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import img from "../../img/img1.png";
import img1 from "../../img/img2.png";
import img2 from "../../img/img3.png";
import img3 from "../../img/img4.png";
import healthcare1 from "../../img/helthcare1.png";
import healthcare2 from "../../img/healthcare2.png";
import healthcare3 from "../../img/healthcare3.png";
import healthcare4 from "../../img/healthcare4.png";
import healthcare5 from "../../img/healthcare5.png";
import healthcare6 from "../../img/healthcare6.png";
import doctor1 from "../../img/doctor1.png";
import doctor2 from "../../img/doctor2.png";
import doctor3 from "../../img/doctor3.png";
import superiority1 from "../../img/superiority1.png";
import superiority2 from "../../img/superiority2.png";
import superiority3 from "../../img/superiority3.png";
import care from "../../img/care.png";
import tick from "../../img/tick.png";

import contact from "../../img/contact.png";
import { CiCircleChevRight } from "react-icons/ci";
import "./LandingPage.css";
import Testimonials from "../../Components/Partner/Partner";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <div className="innerhomecontainer">
          <img src={img} alt="" />
          <div className="image-overlay">
            <div className="overlay-text">
              <h3>MEDICAL PROFESSIONALS</h3>
              <h1>
                Our team of specialists <br />
                are here to help you
              </h1>
              <p>
                Securely share your comprehensive medical history with doctors
                and <br />
                loved ones, for better communication and care.
              </p>
            </div>
          </div>
        </div>
        {/* icons */}

        <section className="homesection">
          <div className="icons">
            <div className="icnimg">
              <img src={img3} alt="" />
              <div>
                <h5>Emergency Care</h5>
                <p>Must be the priority for any health care.</p>
              </div>
            </div>
            <div className="icnimg">
              <img src={img1} alt="" />
              <div>
                <h5>Chamber Service</h5>
                <p>Clinical excellence must be the priority.</p>
              </div>
            </div>
            <div className="icnimg">
              <img src={img2} alt="" />
              <div>
                <h5>Hospitality</h5>
                <p>Clinical excellence must be priority.</p>
              </div>
            </div>
          </div>

          {/* Contact us */}
          <section className="contactsection">
            <div className="contactcontainer">
              <div className="contacteftside">
                <div>
                  <img src={contact} alt="" />
                </div>
              </div>
              <div className="contactrightside">
                <div className="contactcontent">
                  <h6>QUALIFIED DOCTORS</h6>
                  <h1>Keep doctors and loved ones in the</h1>
                  <p>
                    Securely share your comprehensive medical history with
                    doctors and loved ones, for better communication and care.
                  </p>
                  <button className="contactebutton">
                    Contact us{" "}
                    <CiCircleChevRight
                      style={{ width: "26px", height: "26px" }}
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* healthcare */}

          <section className="healthcaresection">
            <div className="healthcarecontainer">
              <div className="healthcarecontent">
                <h1>
                  We Are Healthcare A <br />
                  Medical Clinic
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting <br />
                  industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="image-grid">
                <div className="image-row">
                  <div className="image-item">
                    <img src={healthcare1} alt="Image 1" />
                    <h6>Ambulatory Care</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                  <div className="image-item">
                    <img src={healthcare2} alt="Image 2" />
                    <h6>Laboratory</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                  <div className="image-item">
                    <img src={healthcare3} alt="Image 3" />
                    <h6>Ambulance Service</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src={healthcare4} alt="Image 4" />
                    <h6>Radiology</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                  <div className="image-item">
                    <img src={healthcare5} alt="Image 5" />
                    <h6>Emergency Care</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                  <div className="image-item">
                    <img src={healthcare6} alt="Image 6" />
                    <h6>Pharmacy</h6>
                    <p>Ease your pain and soothe your joints.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* doctors */}

          <section className="doctorsection">
            <div className="doctorcontainer">
              <div className="doctorcontent">
                <h1>Our Qualified Doctors list</h1>
                <p>
                  Clinical excellence must be the priority for any health care
                  service{" "}
                </p>
              </div>
              <div className="image-card">
                <div className="image-row1">
                  <div className="image-item1">
                    <img
                      src={doctor1}
                      alt="Doctor 1"
                      style={{ marginTop: "50px" }}
                    />
                    <div className="doctor-details">
                      <h4>Dr. Dredor Smith</h4>
                      <p>Medicine specialist</p>
                      <h6>4895 Patients</h6>
                      <p>Infermedica Hospital, NYC</p>
                      <div className="rating">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                      </div>
                    </div>
                  </div>
                  <div className="image-item1">
                    <img src={doctor2} alt="Doctor 1" />
                    <div className="doctor-details">
                      <h4>Dr. Amrita sen gupta</h4>
                      <p>General Surgeon</p>
                      <h6>4895 Patients</h6>
                      <p>Infermedica Hospital, NYC</p>
                      <div className="rating">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                      </div>
                    </div>
                  </div>
                  <div className="image-item1">
                    <img src={doctor3} alt="Doctor 1" />
                    <div className="doctor-details">
                      <h4>Dr. Christinne Jones</h4>
                      <p>Pediatrist</p>
                      <h6>4895 Patients</h6>
                      <p>Infermedica Hospital, NYC</p>
                      <div className="rating">
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* superiority */}

          <section className="superioritysection">
            <div className="superioritycontainer">
              <div className="superioritycontent">
                <h1>
                  uncomplicated, superiority <br /> search process
                </h1>
              </div>
              <div className="image-grid1">
                <div className="image-row2">
                  <div className="image-item2">
                    <img src={superiority1} alt="Image 1" />
                    <h3>Easy to use</h3>
                    <p>
                      An easy-to-use online directory <br /> that lets you
                      search and filter
                    </p>
                  </div>
                  <div className="image-item2">
                    <img src={superiority2} alt="Image 2" />
                    <h3>Free support</h3>
                    <p>
                      On what matters most Free <br /> matching support an
                      optional.
                    </p>
                  </div>
                  <div className="image-item2">
                    <img src={superiority3} alt="Image 3" />
                    <h3>Online care</h3>
                    <p>
                      One-to-one matching <br /> experience to support you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* partners’ */}

          <section className="partnersection">
            <div className="partnerscontainer">
              <div className="partnerscontent">
                <h1>Hear our partners’ opinions</h1>
              </div>
              <div>
                <Testimonials />
              </div>
            </div>
          </section>

          {/* Care */}

          <section className="caresection">
            <div className="carecontainer">
              <div className="leftside">
                <div className="carecontent">
                  <h6>Welcome to Healthcare</h6>
                  <h1>Best Care For Your Good Health</h1>
                  <p>
                    Esteem spirit temper too say adieus who direct esteem. It
                    esteems luckily or picture placing drawing.
                  </p>
                  <div style={{ display: "inline-flex", marginTop: "20px" }}>
                    <img
                      src={tick}
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <p>Apartments frequently or motionless.</p>
                  </div>
                  <div style={{ display: "inline-flex" }}>
                    <img
                      src={tick}
                      alt=""
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "10px",
                      }}
                    />
                    <p>Apartments frequently or motionless.</p>
                  </div>
                  <button className="carebutton">
                    Learn More{" "}
                    <CiCircleChevRight
                      style={{ width: "26px", height: "26px" }}
                    />{" "}
                  </button>
                </div>
              </div>
              <div className="rightside">
                <div>
                  <img src={care} alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* emergencycontainer */}

          <section className="emergencysection">
            <div className="emergencycontainer">
              <div className="emergencontent">
                <div className="left">
                  <p>FREE CONSULTATION</p>
                  <h1>For Emergency Contact</h1>
                </div>
                <div className="right">
                  <button>
                    Book your apoinment{" "}
                    <CiCircleChevRight
                      style={{ width: "26px", height: "26px" }}
                    ></CiCircleChevRight>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* footer */}
        <section className="footersection">
          <div className="footer1">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
