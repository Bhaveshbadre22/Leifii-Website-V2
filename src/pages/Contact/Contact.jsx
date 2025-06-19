import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contact.css";
import { useNavStore } from "../../store/navStore.js";
import leaf from "../../assets/leaf.png";
import StaggerDiv from "../../components/StaggerDiv/StaggerDiv.js";
import Preloader from "../../components/Preloader/Preloader";
import PageLoader from "../../components/PageLoader/pageLoader";
import { AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
    budget: "",
    files: [],
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setData({
          ...data,
          services: [...data.services, value],
        });
      } else {
        setData({
          ...data,
          services: data.services.filter((service) => service !== value),
        });
      }
    } else if (type === "file") {
      setData({
        ...data,
        files: files,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  }

  async function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const attachments = [];
    for (const file of data.files) {
      const base64File = await convertFileToBase64(file);
      attachments.push({
        name: file.name,
        base64: base64File.split(",")[1], // Remove the metadata part
      });
    }

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
      services: data.services.join(", "),
      budget: data.budget,
      attachments: JSON.stringify(attachments),
    };
    emailjs.init("AFpSGmthR-AR8zsUF"); // Replace with your User ID
    emailjs
      .send(
        "service_yk2q59i", // Replace with your EmailJS service ID
        "template_zxu3a8k", // Replace with your EmailJS template ID
        templateParams
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("We will soon connect with you", { duration: 3000 });
          // Clear the form fields
          setData({
            name: "",
            email: "",
            message: "",
            services: [],
            budget: "",
            files: [],
          });
          // Redirect to the contact page
          // navigate("/");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Error sending email: " + err.text, { duration: 2000 });
        }
      );
  }

  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  return (
    <>
      <AnimatePresence mode="wait">
        <PageLoader />
      </AnimatePresence>
      <div>
        <header className="cb-request">
          <div className="cb-request-content">
            <div className="cb-request-container">
              <div className="cb-request-header">
                <StaggerDiv className="">
                  <h1 className="">
                    <span className="italic font-light">Hey! </span> <br></br>{" "}
                  </h1>
                  <h1>Design your leaves with LEIFII </h1>
                  <img
                    src={leaf}
                    srcSet={`${leaf} 2x`}
                    alt=""
                    className="mt-5"
                  ></img>
                </StaggerDiv>
              </div>

              <div className="cb-request-form">
                <form
                  className="cb-form"
                  onSubmit={onSubmit}
                  encType="multipart/form-data"
                >
                  <div className="cb-form-group">
                    <div className="cb-form-label -smooth">
                      I'm interested in...
                    </div>
                    <div className="cb-checkbox-group">
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Branding"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Brand Strategy Design & Execution">
                                Brand Strategy Design & Execution
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Website Development"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Website & Application Development">
                                Website & Application Development
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="UX/UI Design"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="UX/UI Design">UX/UI Design</span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Logo Design"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Logo, Packaging Design & Production">
                                Logo, Packaging Design & Production
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Corporate Events"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Corporate Events Strategy">
                                Corporate Events Strategy
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Content Creation"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Content Creation & Production">
                                Content Creation & Production
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="checkbox"
                            name="services"
                            value="Online Marketing"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="Online Marketing">
                                Online Marketing
                              </span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="cb-form-group">
                    <div
                      className="cb-input cb-input_light"
                      data-validity-msg='{"valueMissing":"Please fill your name"}'
                    >
                      <div className="cb-input_light-box">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          aria-label="Your name"
                          onChange={handleChange}
                        ></input>
                        <div className="cb-input_light-line"></div>
                      </div>
                      <div className="cb-input_light-message"></div>
                    </div>
                  </div>
                  <div className="cb-form-group">
                    <div
                      className="cb-input cb-input_light"
                      data-validity-msg='{"valueMissing":"Please fill your email address","typeMismatch":"That email address looks a bit weird"}'
                    >
                      <div className="cb-input_light-box">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                          aria-label="Your email"
                          onChange={handleChange}
                        ></input>
                        <div className="cb-input_light-line"></div>
                      </div>
                      <div className="cb-input_light-message"></div>
                    </div>
                  </div>
                  <div className="cb-form-group">
                    <div className="cb-input cb-input_light">
                      <div className="cb-input_light-box">
                        <textarea
                          name="message"
                          placeholder="Tell us about your project"
                          aria-label="Tell us about your project"
                          onChange={handleChange}
                        ></textarea>
                        <div className="cb-input_light-line"></div>
                      </div>
                    </div>
                  </div>
                  <div className="cb-form-group">
                    <div className="cb-form-label -smooth">Budget</div>
                    <div className="cb-checkbox-group">
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="radio"
                            name="budget"
                            value="< 1Lac"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="< 1Lac">Less than 1Lac</span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="radio"
                            name="budget"
                            value="1Lac - 2Lac"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="1Lac - 2Lac">1Lac - 2Lac</span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="radio"
                            name="budget"
                            value="2Lac - 3Lac"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="2Lac - 3Lac">2Lac - 3Lac</span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <div
                        className="cb-checkbox cb-checkbox_rounded"
                        data-magnetic
                      >
                        <label>
                          <input
                            type="radio"
                            name="budget"
                            value="3Lac+"
                            onChange={handleChange}
                          ></input>
                          <span className="cb-checkbox_rounded-box">
                            <span className="cb-checkbox_rounded-title">
                              <span data-text="3Lac+">3Lac+</span>
                            </span>
                            <span className="cb-checkbox_rounded-ripple">
                              <span></span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="cb-form-group"></div>
                  <div className="cb-form-submit">
                    <button
                      className="text-[1.2rem] text-white border-[#000] border-2 rounded-full p-4 transition-colors duration-300 bg-[#000] hover:bg-white hover:text-black font-[questrial]"
                      type="submit"
                      data-magnetic
                      data-cursor="-opaque"
                    >
                      <span data-text="Send request">Send request</span>
                    </button>
                  </div>
                  <div className="cb-form-terms">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>
                    apply.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="h-screen"></div> */}
      </div>
    </>
  );
};

export default Contact;
