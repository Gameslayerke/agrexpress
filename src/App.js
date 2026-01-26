import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import WelcomePage from "./Components/WelcomePage";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Auth/SignIn";
import ResetPasswordForm from "./Components/Auth/Resetpassword";
import SignUp from "./Components/Auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/forgotpassword" element={<ResetPasswordForm />} />
      <Route path="/register" element={<SignUp />} />


    </Routes>
  );
}

export default App;
