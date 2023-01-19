import Input from "../components/Input";
import "./Card.css";

function DoctorRegistration() {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="subCard"></div>
        <div className="mainCard">
          <h1>Doctor Registration</h1>
          <Input pholder="Email" />
          <Input pholder="Username" />
          <Input pholder="Hospital" />
          <Input pholder="Experience" />
          <Input pholder="Mobile Number" />
          <Input pholder="Specialization" />
          <Input pholder="Password" />
          <button className="btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorRegistration;
