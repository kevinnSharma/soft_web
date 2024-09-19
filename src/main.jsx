import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Landing from "./pages/carrier/Landing.jsx";
import Seeking from "./pages/carrier/Seeking.jsx";
import Support from "./pages/carrier/Support.jsx";
import Positions from "./pages/carrier/Positions.jsx";
import Gallery from "./pages/carrier/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/jobdetails/Home.jsx";
import Tabs from "./pages/jobdetails/Tabs.jsx";
import Desc from "./pages/jobdetails/Desc.jsx";
import ApplyLanding from "./pages/apply/ApplyLanding.jsx";
import ApplyTabs from "./pages/apply/ApplyTabs.jsx";
import ApplyDesc from "./pages/apply/ApplyDesc.jsx";
import AbtLanding from "./pages/about/AbtLanding.jsx";
import Company from "./pages/about/Company.jsx";
import DigiPresence from "./pages/about/DigiPresence.jsx";
import Founder from "./pages/about/Founder.jsx";
import Langs from "./pages/skills/Langs.jsx";

const JobDetails = () => {
  return(
    <div>
      <Navbar/>
      <Home/>
      <Tabs/>
      <Desc/>
    </div>)}

const Apply = () => {
  return(
    <div>
      <Navbar/>
      <ApplyLanding/>
      <ApplyTabs/>
      <ApplyDesc/>
    </div>)}

const Carrier = () => {
  return(
    <div>
      <Navbar/>
      <Landing/>
      <Seeking/>
      <Support/>
      <Positions/>
      <Gallery/>
      <Footer/>
    </div>
  )}

const AboutUs = () => {
  return(
    <div>
      <Navbar/>
      <AbtLanding/>
      <Company/>
      <DigiPresence/>
      <Founder/>
    </div>
  )}
  
const Skills = () => {
  return(
    <div>
      <Langs/>
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="Carrier" element={<Carrier/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="Details" element={<JobDetails/>}/>
        <Route path="Apply" element={<Apply/>}/>
        <Route path="Skills" element={<Skills/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
