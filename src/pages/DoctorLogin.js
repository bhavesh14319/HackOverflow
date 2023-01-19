import Input from "../components/Input";
import "./Card.css";

function DoctorLogin() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="subCard"></div>
        <div className="mainCard">
          <h1>Doctor Login</h1>
          <Input pholder="Username or Email" />
          <Input pholder="Password" />
          <button className="btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
