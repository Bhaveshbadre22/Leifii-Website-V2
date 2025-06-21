import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contact.css";
import influ from "../../assets/influ.jpg";
import { useNavStore } from "../../store/navStore";
import StaggerDiv from "../../components/StaggerDiv/StaggerDiv";

const Influencer = () => {
  const setIsNavbarBlack = useNavStore((state) => state.setIsNavbarBlack);

  useEffect(() => {
    setIsNavbarBlack(false);

    return () => {
      setIsNavbarBlack(true); // optional reset
    };
  }, [setIsNavbarBlack]);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
    files: [],
    phonenumber: "",
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
      instagramid: data.instagramid,
      message: data.message,
      services: data.services.join(", "),
      budget: data.budget,
      phonenumber: data.phonenumber,
      attachments: JSON.stringify(attachments),
    };

    emailjs
      .send(
        "service_5uofzut", // Replace with your EmailJS service ID
        "template_ydo4g2d", // Replace with your EmailJS template ID
        templateParams,
        "Yogx-LRBjyVeGVvAm" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("We will soon connect with you");
          // Clear the form fields
          setData({
            name: "",
            email: "",
            instagramid: "",
            message: "",
            services: [],
            phonenumber: "",
            // budget: "",
            files: [],
          });
          // Redirect to the contact page
          navigate("/");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Error sending email: " + err.text);
        }
      );
  }

  return (
    <div>
      <header className="cb-request">
        <div className="cb-request-content">
          <div className="cb-request-container">
            <div className="cb-request-header">
              <h1>
                <StaggerDiv>
                  <span className="italic font-light">Hey! </span>
                  <div className="">
                    Influence people with LEIFII{" "}
                    <img
                      className="w-[10rem] h-[3rem] md:h-[5rem] rounded-3xl"
                      src={influ}
                      alt=""
                    />
                  </div>
                </StaggerDiv>
              </h1>
            </div>

            <div className="cb-request-form">
              <form
                className="cb-form"
                onSubmit={onSubmit}
                encType="multipart/form-data"
              >
                <div className="cb-form-group">
                  <div className="cb-form-label -smooth">I'm a...</div>
                  <div className="cb-checkbox-group">
                    <div
                      className="cb-checkbox cb-checkbox_rounded"
                      data-magnetic
                    >
                      <label>
                        <input
                          type="checkbox"
                          name="services"
                          value=" Food Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Food Influencer">
                              Food Influencer
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
                          value="Health & Wellness Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Health & Wellness Influencer">
                              Health & Wellness Influencer
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
                          value="Fashion Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Fashion Influencer">
                              Fashion Influencer
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
                          value="Lifestyle Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Lifestyle Influencer">
                              Lifestyle Influencer
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
                          value="Memes & Pop Culture Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text=" Memes & Pop Culture Influencer">
                              Memes & Pop Culture Influencer
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
                          value="Travel Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Travel Influencer">
                              Travel Influencer
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
                          value="Beauty Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Beauty Influencer">
                              Beauty Influencer
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
                          value="Art Influencer"
                          onChange={handleChange}
                        ></input>
                        <span className="cb-checkbox_rounded-box">
                          <span className="cb-checkbox_rounded-title">
                            <span data-text="Art Influencer">
                              Art Influencer
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
                  <div
                    className="cb-input cb-input_light"
                    data-validity-msg='{"valueMissing":"Please fill your name"}'
                  >
                    <div className="cb-input_light-box">
                      <input
                        type="text"
                        name="instagramid"
                        placeholder="Your Instagram/Youtube/Facebook Id"
                        required
                        aria-label="Your Instagram/Youtube/Facebook Id"
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
                        placeholder="Motive to connect"
                        aria-label="Motive to connect"
                        onChange={handleChange}
                      ></textarea>
                      <div className="cb-input_light-line"></div>
                    </div>
                  </div>
                </div>

                <div className="cb-form-group">
                  <div className="cb-input cb-input_light">
                    <div className="cb-input_light-box">
                      <textarea
                        name="phonenumber"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        onChange={handleChange}
                      ></textarea>
                      <div className="cb-input_light-line"></div>
                    </div>
                  </div>
                </div>
                {/* <div className="cb-form-group">
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
                  </div> */}

                <div className="cb-form-group">
                  {/* <div
                  data-validity='{"size":26214400,"limit":10}'
                  data-validity-msg='{"size":"Size limit has been exceeded (25 mb)","limit":"Attach up to 10 files"}'
                >
                  <input
                    type="file"
                    name="file"
                    multiple
                    onChange={handleChange}
                  ></input>
                  <button className="cb-input_file-btn" type="button">
                    <img src={attachment} alt="attachment"></img>
                    <span>Add attachment</span>
                  </button>
                  <div className="cb-input_file-items"></div>
                  <div className="cb-input_file-message"></div>
                </div> */}
                </div>
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
  );
};

export default Influencer;
