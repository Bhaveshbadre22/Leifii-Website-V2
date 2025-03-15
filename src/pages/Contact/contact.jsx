import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./contact.css";
import attachment from "./attachment.svg";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import { Footer } from "../../sections/Footer/index.tsx";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import PageLoader from "../../components/PageLoader/pageLoader.jsx";

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

    emailjs
      .send(
        "service_yk2q59i", // Replace with your EmailJS service ID
        "template_zxu3a8k", // Replace with your EmailJS template ID
        templateParams,
        "AFpSGmthR-AR8zsUF" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("We will soon connect with you");
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
          navigate("/");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Error sending email: " + err.text);
        }
      );
  }

  return (
    <CursorProvider>
      <PageLoader />{" "}
      <div>
        <Navbar />
        <header className="cb-request">
          <div className="cb-request-content">
            <div className="cb-request-container">
              <div className="cb-request-header">
                <h1>
                  <span className="italic font-light">Hey! </span> <br></br>{" "}
                  Design your leaves with LEIFII{" "}
                  <img
                    src="../assets/leaf.png"
                    srcSet="/assets/leaf.png 2x"
                    alt=""
                  ></img>
                </h1>
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
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default Contact;

// import React, { useState } from "react";
// import "./contact.css";
// import { motion, Variants } from "framer-motion";
// import attachment from "./attachment.svg";

// const Contact = () => {
//   const [data, setData] = useState(null);
//   const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
//     slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
//     slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" },
//   };

//   function handleChange(e) {
//     const { name, value } = e.target;
//     console.log(name, value);
//     setData({
//       ...data,
//       [name]: value,
//     });
//   }

//   async function onSubmit() {
//     console.log(data);
//     if (data) {
//     }
//   }

//   return (
//     <div>
//       <header class="cb-request">
//         <div class="cb-request-content">
//           <div class="cb-request-container">
//             <div class="cb-request-header">
//               <h1>
//                 <span className="italic font-light">Hey! </span> <br></br>{" "}
//                 Design your leaves with LEIFII{" "}
//                 <img
//                   src="../assets/leaf.png"
//                   srcset="/assets/leaf.png 2x"
//                   alt
//                 ></img>
//               </h1>
//             </div>

//             <div class="cb-request-form">
//               <form
//                 class="cb-form"
//                 onSubmit={onSubmit}
//                 enctype="multipart/form-data"
//               >
//                 <div class="cb-form-group">
//                   <div class="cb-form-label -smooth">I'm interested in...</div>
//                   <div class="cb-checkbox-group">
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="branding"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Branding kar denge mast">
//                               Brand Strategy Design & Execution
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="Web Dev"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Ye bhi kar denge">
//                               Website & Application Development
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="design"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="UX/UI design">UX/UI design</span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="marketing"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Logos that create impact">
//                               Logo, Packaging Design & Production
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="development"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Corporate Events Strategy">
//                               Corporate Events Strategy
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="Content"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Contect Creation & Production">
//                               Contect Creation & Production
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                     <div class="cb-checkbox cb-checkbox_rounded" data-magnetic>
//                       <label>
//                         <input
//                           type="checkbox"
//                           name="service[]"
//                           value="Online Marketing"
//                           onChange={handleChange}
//                         ></input>
//                         <span class="cb-checkbox_rounded-box">
//                           <span class="cb-checkbox_rounded-title">
//                             <span data-text="Online Marketing">
//                               Online Marketing
//                             </span>
//                           </span>
//                           <span class="cb-checkbox_rounded-ripple">
//                             <span></span>
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="cb-form-group">
//                   <div
//                     class="cb-input cb-input_light"
//                     data-validity-msg='{"valueMissing":"Please fill your name"}'
//                   >
//                     <div class="cb-input_light-box">
//                       <input
//                         type="name"
//                         name="name"
//                         placeholder="Your name"
//                         required
//                         aria-label="Your name"
//                         onChange={handleChange}
//                       ></input>
//                       <div class="cb-input_light-line"></div>
//                     </div>
//                     <div class="cb-input_light-message"></div>
//                   </div>
//                 </div>
//                 <div class="cb-form-group">
//                   <div
//                     class="cb-input cb-input_light"
//                     data-validity-msg='{"valueMissing":"Please fill your email address","typeMismatch":"That email address looks a bit weird"}'
//                   >
//                     <div class="cb-input_light-box">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your email"
//                         required
//                         aria-label="Your email"
//                         onChange={handleChange}
//                       ></input>
//                       <div class="cb-input_light-line"></div>
//                     </div>
//                     <div class="cb-input_light-message"></div>
//                   </div>
//                 </div>
//                 <div class="cb-form-group">
//                   <div class="cb-input cb-input_light">
//                     <div class="cb-input_light-box">
//                       <textarea
//                         type="mess"
//                         name="mess"
//                         placeholder="Tell us about your project"
//                         aria-label="Tell us about your project"
//                         onChange={handleChange}
//                       ></textarea>
//                       <div class="cb-input_light-line"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="cb-form-group">
//                   <div
//                     // class="cb-input cb-input_file"
//                     data-validity='{"size":26214400,"limit":10}'
//                     data-validity-msg='{"size":"Size limit has been exceeded (25 mb)","limit":"Attach up to 10 files"}'
//                   >
//                     <input
//                       // className="h-[100px] w-[200px] bg-slate-400"
//                       type="file"
//                       name="file"
//                       multiple

//                     ></input>
//                     <button class="cb-input_file-btn" type="button">
//                       <img src={attachment}></img>
//                       <span>Add attachment</span>
//                     </button>
//                     <div class="cb-input_file-items"></div>
//                     <div class="cb-input_file-message"></div>
//                   </div>
//                 </div>
//                 <div class="cb-form-submit">
//                   <button
//                     class="cb-btn cb-btn_send"
//                     type="submit"
//                     data-magnetic
//                     data-cursor="-opaque"
//                   >
//                     <span data-text="Send request">Send request</span>
//                   </button>
//                 </div>
//                 <div class="cb-form-terms">
//                   This site is protected by reCAPTCHA and the Google{" "}
//                   <a href="https://policies.google.com/privacy" target="_blank">
//                     Privacy Policy
//                   </a>
//                   and{" "}
//                   <a href="https://policies.google.com/terms" target="_blank">
//                     Terms of Service
//                   </a>
//                   apply.
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Contact;
