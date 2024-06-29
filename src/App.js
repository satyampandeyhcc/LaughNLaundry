import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import Services from './Component/Services';
import AdminDashboard from './Component/AdminDashboard';
import Contact from './Component/Contact';
import Myorder1 from './Component/Myorder1';
import SchedulePickup from './Component/SchedulePickup';
import Adminorder from './Component/Orderadmindetails';
import Userorder from './Component/Orderuserdetails';
import Responses from './Component/Responses';
import Offerpopup from './Component/Offerpopup';
import EmailOtpForm from './Component/ForgotPass';
function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/pickup" element={<SchedulePickup/>}/>
          <Route exact path="/myorder1" element={<Myorder1/>}/>
          <Route exact path="/userorder" element={<Userorder/>}/>
          <Route exact path="/adminorder" element={<Adminorder/>}/>
         <Route exact path="/responses" element={<Responses/>}/>
         <Route exact path="/admin" element={<AdminDashboard/>}/>
         <Route exact path="/offerpopup" element={<Offerpopup/>}/>
         <Route exact path="/forgot-pass" element={<EmailOtpForm/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
