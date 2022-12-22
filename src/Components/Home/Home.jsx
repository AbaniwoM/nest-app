import React, { useState } from "react";
import { Button, Button2, Inputs } from "../Inputs/Inputs";
import Ok from "../../Assets/Ok.svg";
import "./Home.scss";

const Home = () => {
  // show step 2 when button is clicked and hide step 1
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });

  const handleStep1 = () => {
    setSteps({
      step1: false,
      step2: true,
      step3: false,
      step4: false,
      step5: false,
    });
  };
  const handleStep2 = (e) => {
    e.preventDefault();
    // validate phone number and then show step 3 else show error

    if (e.target.value.length !== 11) {
      document.getElementById("errphone").innerHTML =
        "Phone number must be 11 digits";
    } else if (e.target.value !== "08099772916") {
      document.getElementById("errphone").innerHTML =
        "This account is not associated with any account on NestPay. Create an account";
    } else {
      setSteps({
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        step5: false,
      });
    }
  };
  const handleStep3 = (e) => {
    // check if the value is 6 digits and then show step 4 else show error
    if (e.target.value.length === 6) {
      setSteps({
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        step5: false,
      });
    } else {
      document.getElementById("errotp").innerHTML = "OTP must be 6 digits";
    }
  };
  const handleStep4 = (e) => {
    // check if the value is 6 digits and then show step 4 else show error
    if (e.target.value.length === 4) {
      setSteps({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: true,
      });
    } else {
      document.getElementById("errpin").innerHTML = "OTP must be 4 digits";
    }
  };
  return (
    <div className="home">
      {steps.step1 && (
        <form>
          <Button title="Pay with Card" />
          <Button title="Pay with Bank Transfer" />
          <Button2
            className="bg-bk"
            title="Pay with Mobile number"
            onClick={handleStep1}
          />
          <span className="small">Powered by NestPay</span>
        </form>
      )}

      {steps.step2 && (
        <form>
          {" "}
          <Inputs
            title="Enter Phone number connected with NestPay"
            placeholder="Enter phone number"
            onChange={handleStep2}
          />
          <button className="btn center bg-bk" onClick={handleStep2}>
            Request OTP
          </button>
          <span className="err" id="errphone"></span>
        </form>
      )}
      {steps.step3 && (
        <form>
          {" "}
          <Inputs
            title="Enter OTP sent to your phone"
            placeholder="Enter OTP"
            onChange={handleStep3}
          />
          <span className="err" id="errotp"></span>
        </form>
      )}
      {steps.step4 && (
        <form>
          {" "}
          <Inputs
            title="Final Step: Enter Transaction Pin"
            placeholder="Pin"
            onChange={handleStep4}
          />
          <span className="err" id="errpin"></span>
        </form>
      )}
      {steps.step5 && (
        <div className="form">
          <div className="tick">
            <img src={Ok} alt="tick" />
          </div>
          <div>Your payment is successful</div>
          <button className="nw-bn" onClick={() => console.log("clicked")}>
            Close Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;



// 4,6,7,