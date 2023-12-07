import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import Living from "./Pages/Living";
import Personal from "./Pages/Personal";
import Emergency from "./Pages/Emergency";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
