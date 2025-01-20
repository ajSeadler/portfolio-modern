/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@heroui/react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

import DefaultLayout from "@/layouts/default";
import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* About Me Section */}
      <section className="py-10 sm:py-20 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-center md:text-left">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              About Me
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
            <p className={`${subtitle()} text-sm sm:text-base md:text-lg`}>
              My journey began with a curiosity for technology and its ability
              to solve real-world problems. I earned a Web Development
              Certificate from Oklahoma University and Full Stack Academy,
              mastering front-end and back-end development. Currently, I am
              pursuing a Bachelor of Science in Cybersecurity at Southern
              Nazarene University, combining my technical skills with advanced
              security principles.
            </p>
            <p className={`${subtitle()} text-sm sm:text-base md:text-lg`}>
              Whether I'm designing sleek user interfaces or architecting secure
              back-end systems, my goal is to ensure that every project I touch
              is a perfect blend of functionality, security, and innovation.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a
                href="https://github.com/yourgithub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaGithub size={24} />
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaLinkedin size={24} />
                </Badge>
              </a>
              <a
                href="https://discord.com/users/yourdiscord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaDiscord size={24} />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-10 sm:py-16 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-center md:text-left">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              Collaborate
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
            <p className={`${subtitle()} text-sm sm:text-base md:text-lg`}>
              I'm always open to new opportunities to collaborate on exciting
              projects. Whether you need a developer to bring your ideas to life
              or a cybersecurity expert to secure your digital presence, I'm
              here to help. Let's create something great together!
            </p>
            <p className={`${subtitle()} text-sm sm:text-base md:text-lg mt-4`}>
              Reach out to me and let's discuss how we can work together to
              achieve your goals.
            </p>

            {/* Contact Button */}
            <div className="mt-6">
              <a
                href="mailto:your-email@example.com"
                className="inline-block bg-green-600 text-white py-2 px-6 rounded-md text-lg hover:bg-green-700 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a
                href="https://github.com/yourgithub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaGithub size={24} />
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaLinkedin size={24} />
                </Badge>
              </a>
              <a
                href="https://discord.com/users/yourdiscord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaDiscord size={24} />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-10 sm:py-16 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-center md:text-left">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              Vision for the Future
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
            <p className={`${subtitle()} text-sm sm:text-base md:text-lg`}>
              My vision is to lead the way in crafting secure digital ecosystems
              that prioritize user experience and data integrity. By combining
              my love for development and my expertise in cybersecurity, I aim
              to create tools and platforms that empower individuals and
              businesses alike.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a
                href="https://github.com/yourgithub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaGithub size={24} />
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaLinkedin size={24} />
                </Badge>
              </a>
              <a
                href="https://discord.com/users/yourdiscord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaDiscord size={24} />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
