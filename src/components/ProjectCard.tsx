/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Image } from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import confetti from "canvas-confetti"; // Import confetti
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiFlask,
} from "react-icons/si"; // Import tech icons
import { FiExternalLink } from "react-icons/fi"; // Import external link icon
import { Button } from "@heroui/button";
import { Snippet } from "@heroui/snippet";

import { HeartFilledIcon } from "./icons";

const ProjectCard = ({
  project,
}: {
  project: {
    id: number;
    src: string;
    title: string;
    description: string;
    techStack: string[];
    link: string;
  };
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Function to trigger confetti above the heart icon
  const handleConfetti = (e: React.MouseEvent) => {
    const heartIcon = e.currentTarget.getBoundingClientRect(); // Get position of heart icon

    confetti({
      spread: 70,
      angle: 90,
      particleCount: 150,
      origin: {
        x: (heartIcon.left + heartIcon.right) / 2 / window.innerWidth, // Horizontal center of the heart
        y: heartIcon.top / window.innerHeight - 0.05, // Just above the heart
      },
    });
  };

  return (
    <>
      {/* Image Card */}
      <div className="relative group">
        <Image
          isBlurred
          isZoomed
          alt={project.title}
          className="rounded-lg cursor-pointer"
          height={300}
          src={project.src}
          width={420}
          onClick={onOpen}
        />

        {/* Tech Stack Bar with Icons */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-2xl py-2 px-3 flex space-x-2 rounded-b-lg z-10">
          {project.techStack.map((tech) => {
            switch (tech) {
              case "TypeScript":
                return (
                  <SiTypescript key={tech} className="text-blue-600 text-xl" />
                );
              case "JavaScript":
                return (
                  <SiJavascript
                    key={tech}
                    className="text-yellow-500 text-xl"
                  />
                );
              case "React":
                return <SiReact key={tech} className="text-blue-400 text-xl" />;
              case "Python":
                return (
                  <SiPython key={tech} className="text-green-600 text-xl" />
                );
              case "Flask":
                return <SiFlask key={tech} className="text-gray-500 text-xl" />;
              default:
                return null;
            }
          })}
        </div>

        {/* Heart Icon on the right */}
        <div
          className="absolute bottom-2 right-2 z-20"
          onClick={handleConfetti} // Trigger confetti on heart click
        >
          <HeartFilledIcon className="text-red-500 text-xl" />
        </div>
      </div>

      {/* Modal */}
      <Modal
        className="animate-slide-up"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent
          className="max-w-screen-lg max-h-screen-lg" // Allow larger modal size
        >
          {(onClose: any) => (
            <>
              <ModalBody>
                <Image
                  alt={project.title}
                  className="rounded-md"
                  src={project.src}
                />
                <Snippet hideCopyButton hideSymbol>
                  {project.title}
                </Snippet>
                {/* Tech Stack Bar with Icons */}
                <div className=" py-2 px-3 flex space-x-2 rounded-b-lg z-10">
                  {project.techStack.map((tech) => {
                    switch (tech) {
                      case "TypeScript":
                        return (
                          <SiTypescript
                            key={tech}
                            className="text-blue-600 text-xl"
                          />
                        );
                      case "JavaScript":
                        return (
                          <SiJavascript
                            key={tech}
                            className="text-yellow-500 text-xl"
                          />
                        );
                      case "React":
                        return (
                          <SiReact
                            key={tech}
                            className="text-blue-400 text-xl"
                          />
                        );
                      case "Python":
                        return (
                          <SiPython
                            key={tech}
                            className="text-green-600 text-xl"
                          />
                        );
                      case "Flask":
                        return (
                          <SiFlask
                            key={tech}
                            className="text-gray-500 text-xl"
                          />
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
                <p className="mt-4">{project.description}</p>
                {/* Link to Project */}
                <a
                  className="inline-flex items-center mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition-colors focus:outline-none"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FiExternalLink className="mr-2 text-lg" />
                  View Project
                </a>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default function ProjectGallery() {
  const projects = [
    {
      id: 1,
      src: "/pictures/filo-home.png",
      title: "Filo - Social Tech Forum",
      description:
        "Filo is a blah blah blah blah blah blah blah blah blah blah",
      techStack: ["JavaScript", "React"],
      link: "https://example.com/filo",
    },
    {
      id: 2,
      src: "/pictures/skate-tracker.png",
      title: "SkateTracker",
      description: "SkateTracker is a blah blah blah.",
      techStack: ["JavaScript", "React"],
      link: "https://example.com/skate-tracker",
    },
    {
      id: 3,
      src: "/pictures/network-speed.png",
      title: "Network Speed Test",
      description: "Network Speed Test is a blah blah blah blah.",
      techStack: ["Python", "Flask"],
      link: "https://example.com/network-speed",
    },
    {
      id: 4,
      src: "/pictures/cof.png",
      title: "Circle of Fifths Viewer",
      description: "Circle of Fifths viewer is a blah blah blah blah.",
      techStack: ["JavaScript", "React"],
      link: "https://example.com/circle-of-fifths",
    },
    {
      id: 5,
      src: "/pictures/ds-site.png",
      title: "Disco Stranger - Band website",
      description: "Disco Stranger is a blah blah blah blah.",
      techStack: ["TypeScript", "React"],
      link: "https://example.com/disco-stranger",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
