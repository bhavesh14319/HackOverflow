import { Routes, Route } from "react-router-dom";
import PatientLogin from "./pages/PatientLogin";
import PatientRegistration from "./pages/PatientRegistration";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorRegistration from "./pages/DoctorRegistration";

function App() {
  return (
    <Routes>
      <Route path="/patientlogin" element={<PatientLogin />} />
      <Route path="/patientregistration" element={<PatientRegistration />} />
      <Route path="/doctorlogin" element={<DoctorLogin />} />
      <Route path="/doctorregistration" element={<DoctorRegistration />} />
    </Routes>
  );
}

export default App;
