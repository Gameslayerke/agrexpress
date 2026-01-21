import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Homepage";
import WelcomePage from "./Components/WelcomePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />

      </Routes>
    </Router>
  );
}

export default App;
