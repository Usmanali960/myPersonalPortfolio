import Image from "next/image";
import firstImage from "@/app/assets/premium_photo-1681487746049-c39357159f69.avif"
import secondImage from "@/app/assets/photo-1505769542637-a892c7381a3e.avif"
import thirdImage from "@/app/assets/photo-1434030216411-0b793f4b4173.avif"


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 mt-[-2vw] lg:mt-0 bg-gradient-to-b">
      <div className="container mx-auto px-6">
        <h1 className="text-center text-4xl font-bold lg:text-[3vw] mt-5 mb-10">
          My<span className="text-mainColor"> Projects</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300">
            <Image
              src={firstImage}
              alt="Project 1"
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 1: Password Generator</h3>
              <p className="text-gray-700 mb-4">
                A password Generator app with HTML, CSS, and JavaScript.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://github.com/Usmanali960/passwordGenerator.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo
                </a>
                <a
                  href="https://glittery-piroshki-53eb84.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300">
            <Image
              src={secondImage}
              alt="Project 2"
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 2: Bubble Game</h3>
              <p className="text-gray-700 mb-4">
                A Bubble game using JavaScript to test JavaScript skills.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://github.com/Usmanali960/myBubbleGame.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo
                </a>
                <a
                  href="https://merry-taffy-709135.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition duration-300">
            <Image
              src={thirdImage}
              alt="third Project"
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Project 3: Quiz app</h3>
              <p className="text-gray-700 mb-4">
                A basic Todo-app developed with HTML, CSS and JavaScript.
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="https://github.com/Usmanali960/myQuizApp.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo
                </a>
                <a
                  href="https://unrivaled-longma-20fd08.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
