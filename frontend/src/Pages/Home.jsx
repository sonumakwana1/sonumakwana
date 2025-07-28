import AboutSection from "../Components/AboutSection";
import ContactSection from "../Components/ContactSection";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectSection from "../Components/ProjectSection";
import axios from "axios";
import { __contactapiurl } from "../APP_URL";
import FooterSection from "../Components/FooterSection";
const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroSection/>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <FooterSection/>
        </>
    )
}
export default Home;