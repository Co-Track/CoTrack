import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import Living from "./Pages/Living";
import Personal from "./Pages/Personal";
import Emergency from "./Pages/Emergency";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
