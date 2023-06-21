import "./App.css";

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} placeholder={props.placeholder} />
  );
};
const App = () => {
  return (
    <div className="body">
      <div className="Form">
        <div>
          <p className="formText">Create account.</p>
          <p className="formDetails">
            Fill in the boxes with your informations.
          </p>
        </div>
        <div>
          <Input type="text" id="name" placeholder="Your Name" />
        </div>
        <div>
          <Input type="text" id="email" placeholder="Your Email" />
        </div>
        <div>
          <Input type="password" id="password" placeholder="Your Password" />
        </div>
        <div>
          <input type="tel" id="telNumber" placeholder="Phone Number" />
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
