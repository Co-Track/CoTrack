import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./Pages/MainPage";
import Living from "./Pages/Living";
import Personal from "./Pages/Personal";
import Emergency from "./Pages/Emergency";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import AddPersonal from "./Pages/AddPersonal";
import AddEmergency from "./Pages/AddEmergency";
import AddLiving from "./Pages/AddLiving";
import EditEmergency from "./Pages/EditEmergency";
import EditPersonal from "./Pages/EditPersonal";
import EditLiving from "./Pages/EditLiving";
import About from "./components/About";
import HomePage from "./Pages/HomePage";
import FAQ from "./components/FAQ";
import "./App.css";
import reactRouterToArray from "react-router-to-array";

function App() {
  const routes = reactRouterToArray(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Living" element={<Living />} />
      <Route path="/Personal" element={<Personal />} />
      <Route path="/Emergency" element={<Emergency />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AddPersonal" element={<AddPersonal />} />
      <Route path="/AddEmergency" element={<AddEmergency />} />
      <Route path="/addLiving" element={<AddLiving />} />
      <Route path="/EditEmergency/:emergencyId" element={<EditEmergency />} />
      <Route path="/editLiving/:livingId" element={<EditLiving />} />
      <Route path="/editPersonal/:personalId" element={<EditPersonal />} />
      <Route path="/About" element={<About />} />
      <Route path="/FAQ" element={<FAQ />} />
    </>
  );
  return (
    <>
      <Navbar routes={routes} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddPersonal" element={<AddPersonal />} />
        <Route path="/AddEmergency" element={<AddEmergency />} />
        <Route path="/addLiving" element={<AddLiving />} />
        <Route path="/EditEmergency/:emergencyId" element={<EditEmergency />} />
        <Route path="/editLiving/:livingId" element={<EditLiving />} />
        <Route path="/editPersonal/:personalId" element={<EditPersonal />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route
          path="/SearchResult"
          element={<SearchResult routes={routes} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
