import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import Living from "./Pages/Living";
import Personal from "./Pages/Personal";
import Emergency from "./Pages/Emergency";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import AddPersonal from "./Pages/AddPersonal";
import AddEmergency from "./Pages/AddEmergency";
import AddLiving from "./Pages/AddLiving";
import EditEmergency from "./Pages/EditEmergency";
import EditPersonal from "./Pages/EditPersonal";
import EditLiving from "./Pages/EditLiving";
import About from "./components/About";
import HomePage from "./Pages/HomePage";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
<Route path="/" element={<HomePage/>}/>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddPersonal" element={<AddPersonal />} />
        <Route path="/AddEmergency" element={<AddEmergency />} />
        <Route path="/addLiving" element={<AddLiving />} />
        <Route path="/editEmergency" element={<EditEmergency />} />
        <Route path="/editLiving" element={<EditLiving />} />
        <Route path="/editPersonal" element={<EditPersonal />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
