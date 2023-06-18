import "./App.css";

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} placeholder={props.placeholder} />
  );
};
const App = () => {
  return (
    <div className="Form">
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
          <button className="submitButton">Submit</button>
        </div>
      </div>
  );
};

export default App;
