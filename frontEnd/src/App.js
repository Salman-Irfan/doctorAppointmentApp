import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Doctors from "./pages/Doctors";
import ContactUs from "./pages/ContactUs";
import MakeAnAppointment from "./pages/MakeAnAppointment";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import ResetPassword from "./pages/auth/ResetPassword";

const App = () => {
    return (
        <>
            <Nav />
            <div className="mt-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/doctors" element={<Doctors />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/appointment" element={<MakeAnAppointment />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/auth/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
                    <Route path="/auth/resetpassword" element={<ResetPassword />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;
