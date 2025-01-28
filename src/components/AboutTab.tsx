/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiExpress,
  SiPython,
  SiVite,
  SiWireshark,
} from "react-icons/si";
import { FaLinux, FaNode, FaWindows, FaGithub } from "react-icons/fa";
import { Image } from "@heroui/image";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

interface GithubStats {
  avatarUrl: string;
  bio: string;
  location: string;
}

const AboutTab = ({ githubStats }: { githubStats: GithubStats }) => {
  return (
    <Card className="p-2">
      <CardBody>
        {/* Avatar and Bio Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            isBlurred
            alt="Avatar"
            className="w-44 h-44"
            src="/pictures/me.jpg"
          />
          <div className="text-left md:text-left">
            <h1 className="text-2xl font-bold">
              Fullstack Developer & Network Enthusiast
            </h1>
            <p className="text-md text-gray-500">
              {githubStats.location} | anthonyseadler@gmail.com
            </p>
            <div className="flex gap-2">
              <Link
                isExternal
                className="flex items-center gap-2 text-violet-600 hover:text-violet-500 transition-colors duration-300 mt-2"
                href="https://github.com/ajSeadler"
                style={{ textDecoration: "none" }}
              >
                <FaLinkedin size={30} style={{ color: "gray" }} />
              </Link>
              <Link
                isExternal
                className="flex items-center gap-2 text-violet-600 hover:text-violet-500 transition-colors duration-300 mt-2"
                href="https://github.com/ajSeadler"
                style={{ textDecoration: "none" }}
              >
                <FaDiscord size={30} style={{ color: "gray" }} />
              </Link>
              <Link
                isExternal
                className="flex items-center gap-2 text-violet-600 hover:text-violet-500 transition-colors duration-300 mt-2"
                href="https://github.com/ajSeadler"
                style={{ textDecoration: "none" }}
              >
                <FaGithub size={30} style={{ color: "gray" }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bio and Technologies Section */}
        <div className="mt-6">
          <p className="text-md">
            My name is Anthony Seadler, but most people call me AJ. I'm a
            full-stack web developer based in Oklahoma City, Oklahoma. I
            specialize in building various types of applications and web
            solutions using technologies like TypeScript, React (JSX/TSX),
            Express, PostgreSQL, and Python, among others.
          </p>
          <p className="text-md mt-4">
            My favorite tools include TypeScript, JavaScript, and React. I also
            enjoy working with databases like PostgreSQL and MySQL. Here are the
            technologies I use most frequently:
          </p>

          {/* Responsive Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            {/* Map through technologies */}
            {[
              {
                icon: <SiJavascript className="text-4xl text-yellow-500" />,
                label: "JavaScript",
              },
              {
                icon: <SiTypescript className="text-4xl text-blue-500" />,
                label: "TypeScript",
              },
              {
                icon: <SiWireshark className="text-4xl text-blue-600" />,
                label: "Wireshark",
              },
              {
                icon: <SiPython className="text-4xl text-yellow-500" />,
                label: "Python",
              },
              {
                icon: <FaLinux className="text-4xl text-orange-700" />,
                label: "Linux",
              },
              {
                icon: <FaWindows className="text-4xl text-blue-500" />,
                label: "Windows",
              },
              {
                icon: <SiHtml5 className="text-4xl text-orange-500" />,
                label: "HTML5",
              },
              {
                icon: <SiCss3 className="text-4xl text-blue-600" />,
                label: "CSS3",
              },
              {
                icon: <FaNode className="text-4xl text-green-600" />,
                label: "Node.js",
              },
              {
                icon: <SiPostgresql className="text-4xl text-blue-500" />,
                label: "PostgreSQL",
              },
              {
                icon: <SiExpress className="text-4xl text-gray-700" />,
                label: "Express",
              },

              {
                icon: <SiVite className="text-4xl text-purple-500" />,
                label: "Vite",
              },
            ].map(({ icon, label }, index) => (
              <Card key={index}>
                <CardBody className="flex flex-col items-center text-center">
                  <div className="mb-2">{icon}</div>
                  <p className="font-medium text-sm">{label}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutTab;
