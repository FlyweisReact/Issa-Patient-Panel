import React, { useRef, useState } from "react";
import "./form.css";
import { Button, Carousel, Form } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "react-notifications-component";
import {
  BaseUrl,
  show_notification as ShowMsg,
} from "../../Api_Collection/Api";
import MyImg from "./issa_logo_login.jpg";
import logo from "../../img/OasisNotes.png";
//login form
import Slider from "react-slick";

export const LoginForm = () => {
  // slider setting
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // This hides the arrows
  };
  const sliderRef = useRef(null);
  const [forgetChange, setForgetChange] = useState("login");
  const [sendLink, setLinkSend] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [otpSend, setOtpSend] = useState(false);
  const [otpNumber, setOtpNumber] = useState("");
  const [newPassword1, setNewPassword1] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [userId1, setUserId1] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}Patient/signin`, {
        email: userId,
        password,
      });

      localStorage.setItem("token", response.data.accessToken);
      Store.addNotification({
        title: "Success",
        message: "Login Successful",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      navigate("/patient_panel");
    } catch (error) {
      console.log(error);
      Store.addNotification({
        title: "Error",
        message: error.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
  };

  const handleLinkSend = async (e) => {
    e.preventDefault();
    if (newPassword1) {
      if (!userId1) return;
      try {
        axios
          .post(`${BaseUrl}/employee/changePassword/${userId1}`, {
            newPassword: newPassword,
            confirmPassword: newPassword,
          })
          .then((res) => {
            console.log(res);
            setLinkSend(true);
            Store.addNotification({
              title: "Success",
              message: res.data.message,
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 5000,
                onScreen: true,
              },
            });
            setNewPassword1(false);
          })
          .catch((err) => {
            console.log(err?.response?.data?.msg);
            ShowMsg("Error", err?.response?.data?.msg, "danger");
          });
      } catch (err) {
        ShowMsg("Error", err.res.data.msg, "danger");
      }
      return;
    }
    if (otpSend) {
      try {
        axios
          .post(`${BaseUrl}/employee/forgotVerifyOtp`, {
            email: userId,
            otp: otpNumber,
          })
          .then((res) => {
            setOtpSend(false);
            setNewPassword1(true);
            ShowMsg(res.data.message, "success");
            // setLinkSend(true)
          })
          .catch((err) => {
            console.log(err?.response?.data);
            ShowMsg("Error", err?.response?.data?.message, "danger");
          });
      } catch (error) {
        ShowMsg("Error", error.msg, "error");
        if (error.res.data.msg) {
          ShowMsg(error.res.data.msg, "error");
        }
      }

      return;
    }
    try {
      axios
        .post(`${BaseUrl}/employee/forgetPassword`, {
          email: userId,
        })
        .then((res) => {
          // console.log(res?.data?.data?._id);
          setUserId1(res?.data?.data?._id);
          setOtpSend(true);
          ShowMsg(res.data.message, "success");
          // setLinkSend(true)
        })
        .catch((err) => {
          console.log(err?.response?.data?.msg);
          ShowMsg("Error", err?.response?.data?.msg, "danger");
        });
    } catch (error) {
      console.log(error);
      if (error.res.data.message) {
        ShowMsg(error.res.data.msg, "error");
      }
      ShowMsg(error.res.data.message, "error");
    }
  };
  const goToSlide = index => {
    sliderRef.current.slickGoTo(index);
  };
  return (
    <div>
      <div className="container-login-page">
        <div className="left-div-login-page">
          {/* <Carousel controls={false}>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Carousel.Caption className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          <div className="allo">
            <Slider ref={sliderRef} {...settings}>
              <div className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </div>
              <div className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </div>
              <div className="text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque a volutpat arcu, sit amet suscipit justo. Integer et
                  augue quis nibh accumsan ornare. Ut id finibus urna, cursus
                  rhoncus nisl. Ut accumsan porttitor mi, sed hendrerit felis
                  rutrum eu. Pellentesque eget velit et ligula volutpat
                  malesuada quis a tellus. Sed sollicitudin sodales pharetra.
                </p>
              </div>
            </Slider>
            <div className="slider-buttons-container">
              <div className="slider-button" onClick={() => goToSlide(0)}></div>
              <div className="slider-button" onClick={() => goToSlide(1)}></div>
              <div className="slider-button" onClick={() => goToSlide(2)}></div>
              {/* Add more buttons as needed */}
            </div>
          </div>
        </div>

        <div
          className="right-div-login-page"
          style={{
            backgroundColor: "#D1ECF0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {!sendLink && (
            <>
              <img
                style={{
                  maxWidth: "155px",
                  maxHeight: "55px",
                  mixBlendMode: "multiply",
                }}
                src={logo}
                alt="logo1"
              />
              <p style={{ color: "#0C5C75", marginTop: "2.5rem" }}>
                Patient Panel
              </p>
              {forgetChange === "login" ? (
                <Form
                  style={{ marginTop: "2rem", textAlign: "left", width: "90%" }}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="Enter email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <div
                    style={{
                      width: "100%",
                      margin: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginTop: "2rem",
                    }}
                  >
                    <Button
                      // onClick={() => navigate("/dashboard/contacts")}
                      onClick={loginHandler}
                      style={{
                        backgroundColor: "#0C5C75",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: "1rem",
                        padding: "0.5rem 3.5rem",
                        margin: "auto",
                      }}
                      variant="primary"
                      type="submit"
                    >
                      LOG IN
                    </Button>

                    <p
                      onClick={() => setForgetChange("forgot")}
                      style={{
                        color: "#0C5C75",
                        width: "100%",
                        textAlign: "center",
                        marginTop: "2rem",
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      Forgot Your Password
                    </p>

                    <hr style={{ color: "gray" }} />
                    <p style={{ opacity: "60%" }}>
                      By logging in, you agree to the{" "}
                      <span
                        style={{
                          color: "blue",
                          textDecoration: "underline",
                          opacity: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        End User License Agreement
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "#0C5C75",
                        fontWeight: "bold",
                        marginTop: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>What’s New</span>
                      <span>Profile Updates</span>
                      <span>Status Page</span>
                    </p>
                  </div>
                </Form>
              ) : forgetChange === "forgot" ? (
                <>
                  <Form
                    style={{
                      marginTop: "2rem",
                      textAlign: "left",
                      width: "90%",
                    }}
                  >
                    <p>
                      If you have verified the email address for your user
                      account, enter your User ID here and we’ll email you a
                      link to reset your password
                    </p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User ID</Form.Label>
                      <Form.Control
                        onChange={(e) => setUserId(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                    {otpSend && (
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Verify Otp</Form.Label>
                        <Form.Control
                          onChange={(e) => setOtpNumber(e.target.value)}
                          type="number"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                    )}
                    {newPassword1 && (
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter New Password</Form.Label>
                        <Form.Control
                          onChange={(e) => setNewPassword(e.target.value)}
                          type="text"
                          placeholder="Enter new password"
                          value={newPassword}
                        />
                      </Form.Group>
                    )}

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    ></Form.Group>
                    <div
                      style={{
                        width: "100%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: "2rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          onClick={handleLinkSend}
                          style={{
                            backgroundColor: "#0C5C75",
                            color: "white",
                            fontWeight: "bold",
                            marginTop: "1rem",
                            padding: "0.5rem 3.5rem",
                            margin: "auto",
                            marginBottom: "1rem",
                          }}
                          variant="primary"
                          type="submit"
                        >
                          SEND LINK
                        </Button>
                        <Button
                          onClick={() => {
                            setOtpSend(false);
                            setLinkSend(false);
                            setNewPassword1(false);
                            setForgetChange("login");
                          }}
                          style={{
                            backgroundColor: "transparent",
                            color: "#0C5C75",
                            marginTop: "1rem",
                            padding: "0.5rem 3.5rem",
                            margin: "auto",
                            border: "none",
                          }}
                          variant="primary"
                          type="submit"
                        >
                          Cancel
                        </Button>
                      </div>

                      <p
                        style={{
                          color: "#0C5C75",
                          width: "100%",
                          textAlign: "center",
                          marginTop: "2rem",
                        }}
                      >
                        {" "}
                        If you have not verified your email address, please
                        contact your onsite System Administrator for help
                        resetting your password.
                      </p>

                      <hr style={{ color: "gray" }} />
                      <p style={{ opacity: "60%" }}>
                        By logging in, you agree to the{" "}
                        <span
                          style={{
                            color: "blue",
                            textDecoration: "underline",
                            opacity: "100%",
                            fontWeight: "bold",
                          }}
                        >
                          End User License Agreement
                        </span>{" "}
                      </p>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "#0C5C75",
                          fontWeight: "bold",
                          marginTop: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span>What’s New</span>
                        <span>Profile Updates</span>
                        <span>Status Page</span>
                      </p>
                    </div>
                  </Form>
                </>
              ) : null}
            </>
          )}

          {sendLink && (
            <>
              <p style={{ color: "#0C5C75", fontWeight: "bold" }}>
                Password Reset Sucessfully
              </p>
              <img
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
                src="/ConnectonForm/LinkSent.png"
                alt="fsf"
              />

              <p
                style={{
                  color: "black",
                  opacity: "70%",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                Successfull
                <br />
                <span
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    opacity: "100%",
                  }}
                >
                  ....@gmail.com
                </span>
              </p>
              <p style={{ color: "black", opacity: "70%" }}>
                Please Do check the link in Spam folder, if not found in your
                Inbox.
              </p>
              {/* <p style={{ color: "black", opacity: "60%" }}>
                Didn’t Received the mail?
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    opacity: "100%",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Resend Link{" "}
                </span>
              </p> */}
              <p style={{ color: "#0C5C75", fontWeight: "bold" }}>Need Help?</p>
              <div>
                <Button
                  style={{ marginTop: "1rem", border: "none" }}
                  onClick={() => setLinkSend(false)}
                  variant="primary"
                >
                  GO BACK TO LOGIN
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
