import { useState } from "react";
import "./Stepper.css";

export const StepperForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="form-wrapper">
      <div className="stepper">
        <div className={step >= 1 ? "step active" : "step"}>1</div>
        <div className={step >= 2 ? "step active" : "step"}>2</div>
        <div className={step === 3 ? "step active" : "step"}>3</div>
      </div>

      {step === 1 && (
        <div className="form-step">
          <h2>Step 1: Personal Info</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Step 2: Education & Skills</h2>
          <input type="text" placeholder="Highest Qualification" />
          <input type="text" placeholder="Institution Name" />
          <textarea placeholder="Skills (e.g., React, JavaScript, CSS)" />
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h2>Step 3: Experience</h2>
          <input type="text" placeholder="Job Title / Project Title" />
          <input type="text" placeholder="Company / Client Name" />
          <textarea placeholder="Description / Responsibilities" />
        </div>
      )}

      <div className="button-group">
        <button onClick={prevStep} disabled={step === 1}>
          Back
        </button>
        <button onClick={nextStep} disabled={step === 3}>
          Next
        </button>
      </div>
    </div>
  );
};
