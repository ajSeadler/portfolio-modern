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
  SiFlask,
} from "react-icons/si";
import { FaLinux, FaNode, FaWindows, FaGithub } from "react-icons/fa";
import { subtitle, title } from "./primitives";

interface GithubStats {
  avatarUrl: string;
  bio: string;
  location: string;
}

const AboutTab = ({ githubStats }: { githubStats: GithubStats }) => {
  return (
    <Card className="p-4">
      <CardBody>
        {/* Avatar and Bio Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img
            alt="Avatar"
            className="w-28 h-28 rounded-full border border-gray-400"
            src={githubStats.avatarUrl}
          />
          <div className="text-center md:text-left">
            <h4 className={title()}>
              Fullstack Developer & Network Enthusiast
            </h4>
            <p className={subtitle()}>
              {githubStats.location} | anthonyseadler@gmail.com
            </p>{" "}
            <Link
              isExternal
              className="flex flex-col sm:flex-row items-center gap-2 hover:text-violet-600 visited:text-current transition-colors duration-300 p-2"
              href="https://github.com/ajSeadler"
              style={{ textDecoration: "none" }}
            >
              <FaGithub size={30} />
              <span className="font-semibold">Visit GitHub</span>
            </Link>
          </div>
        </div>

        {/* Bio and Technologies Section */}
        <div className="mt-1">
          <p className={subtitle()}>
            My name is Anthony Seadler, but most people call me AJ. I'm a
            full-stack web developer based in Oklahoma City, Oklahoma. I
            specialize in building various types of applications and web
            solutions using technologies like TypeScript, React (JSX/TSX),
            Express, PostgreSQL, and Python, among others.
          </p>
          <p className={subtitle()}>
            My favorite tools include TypeScript, JavaScript, and React. I also
            enjoy working with databases like PostgreSQL and MySQL. Here are the
            technologies I use most frequently:
          </p>
          {/* Responsive Technology Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiJavascript className="text-4xl text-yellow-500 mb-2" />
                <p className="font-semibold">JavaScript</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiTypescript className="text-4xl text-blue-500 mb-2" />
                <p className="font-semibold">TypeScript</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiHtml5 className="text-4xl text-orange-500 mb-2" />
                <p className="font-semibold">HTML5</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiCss3 className="text-4xl text-blue-600 mb-2" />
                <p className="font-semibold">CSS3</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <FaNode className="text-4xl text-green-600 mb-2" />
                <p className="font-semibold">Node.js</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiPostgresql className="text-4xl text-blue-500 mb-2" />
                <p className="font-semibold">PostgreSQL</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiExpress className="text-4xl text-gray-700 mb-2" />
                <p className="font-semibold">Express</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiPython className="text-4xl text-yellow-500 mb-2" />
                <p className="font-semibold">Python</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <FaLinux className="text-4xl text-orange-700 mb-2" />
                <p className="font-semibold">Linux</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <FaWindows className="text-4xl text-blue-500 mb-2" />
                <p className="font-semibold">Windows</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiVite className="text-4xl text-purple-500 mb-2" />
                <p className="font-semibold">Vite</p>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center text-center">
                <SiFlask className="text-4xl text-gray-600 mb-2" />
                <p className="font-semibold">Flask</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutTab;
