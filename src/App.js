import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/Homepage";
import WelcomePage from "./Components/WelcomePage";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/Auth/SignIn";
import ResetPasswordForm from "./Components/Auth/Resetpassword";
import SignUp from "./Components/Auth/SignUp";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useAuth } from "../src/Components/contexts/AuthContext";

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Show a loading state while auth is being checked
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<WelcomePage />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <SignIn />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/home" replace /> : <SignUp />}
      />
      <Route path="/forgotpassword" element={<ResetPasswordForm />} />

      {/* Protected routes */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/navbar"
        element={
          <ProtectedRoute>
            <Navbar />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
