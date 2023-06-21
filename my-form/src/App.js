import "./App.css";
import { useState } from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const App = () => {
  const [checkpass, setCheckpass] = useState(false);
  const [password, setPassword] = useState("");
  const [telNumber, setTelNumber] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckpassChange = (e) => {
    setCheckpass(e.target.checked);
  };

  const handleTelNumberChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setTelNumber(onlyNumbers);
  };

  return (
    <div className="body">
      <div className="Form">
        <div>
          <p className="formText">Create account.</p>
          <p className="formDetails">Fill in the boxes with your information.</p>
        </div>
        <div>
          <Input type="text" id="name" placeholder="Your Name" />
        </div>
        <div>
          <Input type="text" id="email" placeholder="Your Email" />
        </div>
        <div>
          <Input
            type={checkpass ? "text" : "password"}
            id="password"
            placeholder="Your Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="checkPassText">
          <p>Check the password.</p>
        </div>
        <div className="checkPass">
          <Input type="checkbox" id="checkpass" onChange={handleCheckpassChange} />
        </div>
        <div>
          <input
            type="tel"
            id="telNumber"
            placeholder="Phone Number"
            value={telNumber}
            onChange={handleTelNumberChange}
          />
        </div>
        <div>
          <button className="submitButton">Sign in</button>
        </div>
        <div>
          <p className="LoginText">Already have an account?</p>
          <p className="loginLink">
            <a href="https://www.login.com/">login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;


