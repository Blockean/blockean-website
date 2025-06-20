import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
// import Spline from "@/components/Spline";
import Image from "next/image";
// import {About} from "@/components/About";


export default function Home() {
  return (
    
    <>
    <div className="w-full h-screen">
    <Navbar/>
    <Hero/>

    <About/>
    <Services/>
    <Contact/>
    <Footer/>
    </div>
    
         
        
    </>
  );
}
