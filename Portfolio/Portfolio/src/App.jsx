import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/miniComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/ui/loader";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/checkingServer`,
        { withCredentials: true }
      );
      console.log("here");
      if (response.status === 200) {
        setLoading(false);
      } else {
        setError(true);
      }
    };
    getStatus();
  }, []);

  if (loading) {
    return <Loader />; // Show loader while waiting for the server response
  }

  if (error) {
    return <div>Server is down. Please try again later.</div>; // Show error message if server responds with 500 or other error
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        {/* <ModeToggle /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-right" theme="dark" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
