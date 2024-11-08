"use client"
import 'boxicons/css/boxicons.min.css';
import mainPhoto from "@/app/assets/mainPhoto.jpg"
import Image from 'next/image';
import Navbar from './components/Navbar';
import Contact from './anotherPages/contact/Contact';
import Footer from './components/Footer';
import Projects from './anotherPages/projects/Projects';
import Services from './anotherPages/services/Services';
import AboutSection from './anotherPages/about/About';
import Skills from './anotherPages/skills/Skills';


export default function Home() {

  return (
    <div className='font-syne bg-bodyColor w-screen h-screen overflow-x-hidden'>
      <Navbar />
      <section
        id="home"
        className="main font-syne flex flex-col mt-[5vw] lg:mt-[-2vw] sm:flex-col text-[10vw] lg:text-[3vw] lg:flex-row items-center justify-between px-[8vw] py-[8vw]"
      >
        <div className="leftSection text-center sm:text-center lg:text-center xl:text-left font-bold">
          <h2 className="mySelf text-[9vw] lg:text-[3vw] text-mainColor">Hey, I am</h2>
          <h1 className="text-[9vw] lg:text-[5vw] mt-[1vw] font-syne mb-[2vw] lg:mt-0 leading-[8vw] lg:leading-[4.5vw]">
            Usman
            <br />
            Web Developer
          </h1>
          <h3 className="text-mainColor flex leading-3 ml-[5vw] lg:ml-0 text-center lg:text-left text-[7vw] mt-[5vw] lg:text-[2vw] lg:mt-[1vw]">
            Web Developer
            <br className="lg:hidden" />
            <span className="text-black hidden lg:block lg:m-[1vw] m-0 lg:mt-0">|</span>
            <br className="lg:hidden" />
            Based in Pakistan
          </h3>

          <div className="socialMedia mt-[5vw] flex items-center sm:justify-center lg:justify-center xl:justify-start justify-center text-[5vw] font-sans bg-transparent gap-[1vw] lg:mt-[1vw]">
            <p className="lg:text-[2vw] flex items-center justify-center bg-transparent border-2 border-mainColor p-[2vw] lg:p-[0.5vw] rounded-full text-[8vw] hover:bg-mainColor hover:text-white">
              <i className="lg:text-[2vw] text-[5.5vw] bx bxl-facebook-circle"></i>
            </p>
            <a href='https://github.com/Usmanali960' className="lg:text-[2vw] flex items-center justify-center bg-transparent border-2 border-mainColor p-[2vw] lg:p-[0.5vw] rounded-full text-[8vw] hover:bg-mainColor hover:text-white">
              <i className="lg:text-[2vw] text-[5.5vw] bx bxl-github"></i>
            </a>
            <p className="lg:text-[2vw] flex items-center justify-center bg-transparent border-2 border-mainColor p-[2vw] lg:p-[0.5vw] rounded-full text-[8vw] hover:bg-mainColor hover:text-white">
              <i className="lg:text-[2vw] text-[5.5vw] bx bxl-instagram-alt"></i>
            </p>
            <a href='https://www.linkedin.com/in/usman-ali-5946592a6/' className="lg:text-[2vw] flex items-center justify-center bg-transparent border-2 border-mainColor p-[2vw] lg:p-[0.5vw] rounded-full text-[8vw] hover:bg-mainColor hover:text-white">
              <i className="lg:text-[2vw] text-[5.5vw] bx bxl-linkedin-square"></i>
            </a>
          </div>

          <button className="btn bg-mainColor text-[5vw] lg:text-[1.3vw] text-white p-[3vw] lg:p-[1vw] border-2 border-mainColor hover:bg-transparent hover:text-black rounded-[5vw] lg:rounded-[1vw] mt-[5vw] lg:mt-[1.5vw]">
            Download CV
          </button>
        </div>
        <div className="rightSection">
          <Image
            className="hidden w-[30vw] rounded-full h-[65vh] hover:shadow-lg hover:shadow-mainColor object-cover"
            src={mainPhoto}
            alt="Main"
          />
          <Image className="xl:block hidden w-[30vw] rounded-full h-[65vh] hover:shadow-lg hover:shadow-mainColor object-cover" src={mainPhoto} alt="mainPhoto" />
        </div>
      </section>
      <AboutSection />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
