

import { useState } from "react";
import "./form.css";
// import { Descriptions } from "antd";


export const Personal = () => {
  const [step, setStep] = useState(1);

  const [currentWork, setCurrentWork] = useState({
    job_title: "",
    compane_name: "",
    duration: "",
    techologies: "",
    descriptions: "",
  });

  const [input, setinput] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    linkdein: "",
    github: "",
    summary: "",
    qualification: "",
    institute: "",
    graduation: "",
    percentage: "",
    skills: "",
    certification: "",
    work: [],
  });

  const form1 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    for (let key in input) {
      if (
        (key === "name" ||
          key === "email" ||
          key === "number" ||
          key === "address" ||
          key === "linkdein" ||
          key === "github" ||
          key === "summary") &&
        input[key] === ""
      ) {
        alert(` ${key} is required `);
        return;
      }
      if (key === "email" && !emailRegex.test(input[key])) {
        alert("Please enter a valid email address");
        return;
      }
    }

    setStep(step + 1);
  };

  const form2 = () => {
    for (let key in input) {
      if (
        (key === "qualification" ||
          key === "institute" ||
          key === "graduation" ||
          key === "percentage" ||
          key === "skills" ||
          key === "certification") &&
        input[key] === ""
      ) {
        alert(`${key}, is required`);
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevBtn = () => {
    setStep(step - 1);
  };

  const handleIputs = (property, value) => {
    setinput({ ...input, [property]: value });
  };
  const handlemore = () => {
    const { job_title, compane_name, duration, techologies, descriptions } =
      currentWork;

    if (
      !job_title ||
      !compane_name ||
      !duration ||
      !techologies ||
      !descriptions
    ) {
      alert("Please fill in all work fields");
      return;
    }

    setinput((prev) => ({
      ...prev,
      work: [...prev.work, currentWork],
    }));

    // Clear the form for next entry
    setCurrentWork({
      job_title: "",
      compane_name: "",
      duration: "",
      techologies: "",
      descriptions: "",
    });
  };
  const handleSubmit = () => {
    if (input.work.length > 0) {
      console.log(input);
      alert("Your form has been submitted successfully!");

      // console.log(currentWork);
      setCurrentWork(currentWork);

      setinput({
        name: "",
        email: "",
        number: "",
        address: "",
        linkdein: "",
        github: "",
        summary: "",
        qualification: "",
        institute: "",
        graduation: "",
        percentage: "",
        skills: "",
        certification: "",
        work: [],
      });

      setCurrentWork({
        job_title: "",
        compane_name: "",
        duration: "",
        techologies: "",
        descriptions: "",
      });
      setStep(1);
    } else {
      alert("Please insert atleast 1 experience");
    }
  };

  console.log(Object.keys(currentWork)?.length);
  return (
    <>
      <div className="parent">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${(step / 3) * 100}%` }} // 0%, 50%, or 100%
          >
            {" "}
          </div>
        </div>

        <div className="stepper">
          <div className="step1 step">
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="text">
              <h4>Step # 1</h4>
              <p>Personal Details</p>
            </div>
          </div>
          <div className="step1 step">
            <div className="icon">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div className="text">
              <h4>Step # 2</h4>
              <p>Education</p>
            </div>
          </div>
          <div className="step1 step">
            <div className="icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <div className="text">
              <h4>Step # 3</h4>
              <p>Experience</p>
            </div>
          </div>
        </div>

        {step === 1 && (
          <form action="">
            <div className="head">
              <i className="fas fa-user head-icon icon"></i>

              <h1>Personal Details</h1>
            </div>

            <div className="inputs1">
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Write your Name"
                  value={input.name}
                  onChange={(e) => handleIputs("name", e.target.value)}
                />
              </div>

              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  required
                  placeholder="Write your E-mail"
                  value={input.email}
                  onChange={(e) => handleIputs("email", e.target.value)}
                />
              </div>
            </div>

            <div className="inputs1">
              <div className="input-group">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  placeholder="Write your Number"
                  value={input.number}
                  onChange={(e) => handleIputs("number", e.target.value)}
                />
              </div>

              <div className="input-group">
                <i className="fas fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Write your Address"
                  value={input.address}
                  onChange={(e) => handleIputs("address", e.target.value)}
                />
              </div>
            </div>

            <div className="inputs1">
              <div className="input-group">
                <i className="fa-brands fa-linkedin-in"></i>
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  value={input.linkdein}
                  onChange={(e) => handleIputs("linkdein", e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="fab fa-github"></i>
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={input.github}
                  onChange={(e) => handleIputs("github", e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <i className="fa-solid fa-table-list"></i>
              <input
                type="text"
                placeholder="Summary"
                value={input.summary}
                onChange={(e) => handleIputs("summary", e.target.value)}
              />
            </div>

            <div className="buttons  right_btn">
              <div className="next-btn " onClick={() => form1()}>
                Next <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </form>
        )}
        {step === 2 && (
          <form action="">
            <div className="head">
              <i className="fa-solid fa-user-graduate head-icon icon"></i>

              <h1>Your Education</h1>
            </div>

            <div className="inputs1">
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Qualification"
                  value={input.qualification}
                  onChange={(e) => handleIputs("qualification", e.target.value)}
                />
              </div>

              <div className="input-group">
                <i className="fas fa-university"></i>
                <input
                  type="text"
                  placeholder="Institute Name"
                  value={input.institute}
                  onChange={(e) => handleIputs("institute", e.target.value)}
                />
              </div>
            </div>

            <div className="inputs1">
              <div className="input-group">
                <i className="fas fa-calendar-check"></i>
                <input
                  type="number"
                  placeholder="Year of Graduation"
                  value={input.graduation}
                  onChange={(e) => handleIputs("graduation", e.target.value)}
                />
              </div>

              <div className="input-group">
                <i className="fas fas fa-percent"></i>
                <input
                  type="number"
                  placeholder="Percentage/CGPA"
                  value={input.percentage}
                  onChange={(e) => handleIputs("percentage", e.target.value)}
                />
              </div>
            </div>
            <div className="inputs1">
              <div className="input-group">
                <i className="fas fa-lightbulb"></i>
                <input
                  type="text"
                  placeholder="Key Skills (React js. python)"
                  value={input.skills}
                  onChange={(e) => handleIputs("skills", e.target.value)}
                />
              </div>
              <div className="input-group">
                <i className="fas fa-certificate"></i>
                <input
                  type="text"
                  placeholder="Certifications"
                  value={input.certification}
                  onChange={(e) => handleIputs("certification", e.target.value)}
                />
              </div>
            </div>

            <div className="buttons">
              <div className="prev-btn" onClick={() => handlePrevBtn()}>
                <i className="fa-solid fa-arrow-left"></i> Previous
              </div>
              <div className="next-btn" onClick={() => form2()}>
                Next <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </form>
        )}
        {step === 3 && (
          <form action="">
            <div className="head">
              <i className="fas fa-briefcase head-icon icon"></i>

              <h1>Your Experience</h1>
            </div>
            {/* Show only the latest form entry */}
            {Object.keys(currentWork)?.length > 0 && (
              <div className="last">
                <div className="inputs1">
                  <div className="input-group">
                    <i className="fas fa-briefcase"></i>
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={currentWork.job_title}
                      onChange={(e) =>
                        setCurrentWork({
                          ...currentWork,
                          job_title: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="input-group">
                    <i className="fas fa-building"></i>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={currentWork.compane_name}
                      onChange={(e) =>
                        setCurrentWork({
                          ...currentWork,
                          compane_name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="inputs1">
                  <div className="input-group">
                    <i className="fas fa-clock"></i>
                    <input
                      type="number"
                      placeholder="Duration"
                      value={currentWork.duration}
                      onChange={(e) =>
                        setCurrentWork({
                          ...currentWork,
                          duration: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="input-group">
                    <i className="fas fa-code"></i>
                    <input
                      type="text"
                      placeholder="Technologies"
                      value={currentWork.techologies}
                      onChange={(e) =>
                        setCurrentWork({
                          ...currentWork,
                          techologies: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="input-group">
                  <i className="fas fa-align-left"></i>
                  <input
                    type="text"
                    placeholder="Descriptions"
                    value={currentWork.descriptions}
                    onChange={(e) =>
                      setCurrentWork({
                        ...currentWork,
                        descriptions: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}

            <div className="add_more_btn" onClick={() => handlemore()}>
              Add More <i className="fa-solid fa-plus"></i>
            </div>
            <ul>
              {input?.work?.map((item, index) => (
                <>
               
                  
                
                  <div className="lists">
                    <div className="title">
                   

                      <p className="show-para" > 
                       
                         <i className="fas fa-briefcase">
                        
                        </i> Job Title :</p>
                      <li key={index}>{item.job_title}</li>
                    </div>
                    <div className="title">
                  
                      <p className="show-para" >   <i className="fas fa-building"></i>  Company :</p>
                      <li key={index}>{item.compane_name}</li>
                    </div>
                    <div className="title">
                      <p className="show-para" > <i className="fas fa-clock"></i>  Duration :</p>
                      <li key={index}>{item.duration}</li>
                    </div>
                    <div className="title">
                      <p className="show-para" > 
                    <i className="fas fa-code"></i>
                        
                         Technologies:</p>
                      <li key={index}>{item.techologies}</li>
                    </div>
                   

                   
                  </div>
                 
                </>
              ))}
            </ul>

            <div className="buttons">
              <div className="prev-btn" onClick={() => handlePrevBtn()}>
                <i className="fa-solid fa-arrow-left"></i> Previous
              </div>
              <div className="next-btn" onClick={() => handleSubmit()}>
                Submit <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
