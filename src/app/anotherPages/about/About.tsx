import Image from "next/image"
import aboutPhoto from "@/app/assets/secondMainPhoto.jpg"


const AboutSection: React.FC = () => {
  
  return (
    <section id="about" className="py-16 lg:mt-[1vw] mt-[-10vw]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={aboutPhoto}
            alt="Personal Photo"
            className="mainPhoto w-full mt-10 lg:mt-0 max-w-[440px] mx-auto rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* About Text */}
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-mainColor">Me</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hello! I m <span className="font-bold text-green-600">Usman Ali</span>, a passionate web developer and designer.
            With a strong background in <span className="font-semibold">JavaScript, TypeScript, and modern front-end frameworks</span>,
            I create fast, accessible, and aesthetically pleasing websites.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I love tackling challenges, learning new technologies, and delivering exceptional solutions.
            When I m not coding, you,ll find me exploring new design trends or working on personal projects.
          </p>

          <div className="hidden lg:block">
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {/* Download Resume Button */}
              <a
                href="#"
                className="bg-mainColor hover:bg-transparent hover:text-black border-2 border-mainColor text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                Download Resume
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="border-mainColor border-2 px-6 py-3 rounded-full shadow-lg hover:bg-mainColor text-black hover:text-white transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:hidden block">
            <div className="inline justify-center md:justify-start gap-6 mt-4">
              {/* Download Resume Button */}
              <a
                href="#"
                className="bg-mainColor hover:bg-mainColor text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                Resume
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="border ml-5 border-mainColor text-mainColor px-6 py-3 rounded-full shadow-lg hover:bg-mainColor hover:text-white transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
