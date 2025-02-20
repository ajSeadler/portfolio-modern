/* eslint-disable react/no-unescaped-entities */
import { Badge, Image } from "@heroui/react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

import DefaultLayout from "@/layouts/default";
import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* About Me Section */}
      <section className="py-0 sm:py-0 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-left md:text-left w-full">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              About Me
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />

            <p
              className={`${subtitle()} text-md sm:text-base md:text-lg leading-relaxed`}
            >
              My journey into network and internet technologies began early. My
              grandfather founded{" "}
              <strong>Seadler Communications Contractors</strong> in 1991, and
              throughout my childhood, I gained hands-on experience in network
              setup and troubleshooting. What started as a curiosity for
              technology —how it can seem like magic— quickly grew into a
              passion for understanding how things work. In 2023, I earned a Web
              Development Certificate from Oklahoma University and Full Stack
              Academy, where I focused on both front-end and back-end
              development. Currently, I'm pursuing a Bachelor of Science in
              Cybersecurity at Southern Nazarene University, focusing on network
              security principles.
            </p>

            <h2 className="text-2xl font-semibold mt-8">
              Network Enhancements
            </h2>
            <p
              className={`${subtitle()} text-md sm:text-base md:text-lg leading-relaxed`}
            >
              In addition to my development work, I have used some of my
              experience to enhance my home network. Some of the improvements
              I've implemented include:
            </p>
            <ul className="font-mono mt-10 border border-slate-700 rounded-xl p-6">
              <li className="flex items-center gap-3 p-2 rounded-lg transition duration-200 ease-in-out">
                <span>
                  Running Cat6 cables throughout the home, connecting multiple
                  rooms
                </span>
              </li>
              <li className="flex items-start gap-3  p-2 rounded-lg transition duration-200 ease-in-out">
                <span>
                  Terminating cables to a patch panel and keystone jacks for
                  clean, efficient setups
                </span>
              </li>
              <li className="flex items-start gap-3  p-2 rounded-lg transition duration-200 ease-in-out">
                <span>
                  Configuring a Layer 3 switch{" "}
                  <strong>(Dell PowerConnect 5524)</strong> with VLANs for
                  separating regular devices from IoT devices
                </span>
              </li>
              <li className="flex items-start gap-3 p-2 rounded-lg transition duration-200 ease-in-out">
                <span>
                  Setting up multiple Raspberry Pi systems, one serving as a NAS
                  and Plex server, and the other as a Pi-hole for network-wide
                  ad blocking
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Life Offline Section */}
      <section className="py-10 sm:py-16 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-left md:text-left w-full">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              Life Offline
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
            <p
              className={`${subtitle()} text-md sm:text-base mb-8 md:text-lg leading-relaxed`}
            >
              Offline, I spend my time skateboarding, writing music, and hiking.
              I’m also part of a band called{" "}
              <span className="font-medium">Disco Stranger</span>, where we make
              music and perform live.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Image
                isBlurred
                isZoomed
                className="w-72 sm:w-96 h-72 sm:h-96"
                src="/pictures/skate.jpg"
              />
              <Image
                isBlurred
                isZoomed
                className="w-72 sm:w-96 h-72 sm:h-96"
                src="/pictures/guitar-live.jpg"
              />
              <Image
                isBlurred
                isZoomed
                className="w-72 sm:w-96 h-72 sm:h-96"
                src="/pictures/cacti.jpg"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <a
                href="https://github.com/yourgithub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaGithub className="sm:text-2xl" size={28} />
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaLinkedin className="sm:text-2xl" size={28} />
                </Badge>
              </a>
              <a
                href="https://discord.com/users/yourdiscord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaDiscord className="sm:text-2xl" size={28} />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* image gallery */}
      <div className="text-left md:text-left w-full">
        <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
          Nature
        </h2>

        <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
        <p className={subtitle()} style={{ marginBottom: "2%" }}>
          A collection of pictures i've taken that I enjoy
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
        <Image src="/pictures/no-image.jpg" />
      </div>
      {/* Current Projects Section */}
      <section className="py-10 sm:py-16 flex items-center justify-center">
        <div className="max-w-full sm:max-w-7xl w-full flex flex-col md:flex-row items-center px-4">
          <div className="text-left md:text-left w-full">
            <h2 className={`${title()} text-3xl sm:text-4xl md:text-5xl`}>
              Collaborate
            </h2>
            <hr className="my-4 border-t-2 border-gray-300 mx-auto md:mx-0 w-72 sm:w-96" />
            <p className={`${subtitle()} text-md sm:text-base md:text-lg`}>
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
                className="inline-block bg-green-600 text-white py-2 px-6 rounded-md text-lg hover:bg-green-700 transition-colors"
                href="mailto:your-email@example.com"
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
                  <FaGithub className="sm:text-2xl" size={28} />
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/in/yourlinkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaLinkedin className="sm:text-2xl" size={28} />
                </Badge>
              </a>
              <a
                href="https://discord.com/users/yourdiscord"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Badge className="text-white">
                  <FaDiscord className="sm:text-2xl" size={28} />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
