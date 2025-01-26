/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Image } from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import confetti from "canvas-confetti"; // Import confetti

import { HeartFilledIcon } from "./icons";

const ProjectCard = ({
  project,
}: {
  project: { id: number; src: string; title: string; description: string };
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
        {/* Heart Icon */}
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
              <ModalHeader>{project.title}</ModalHeader>
              <ModalBody>
                <Image
                  alt={project.title}
                  className="rounded-md"
                  src={project.src}
                />
                <p className="mt-4">{project.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
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
    },
    {
      id: 2,
      src: "/pictures/skate-tracker.png",
      title: "Project 2",
      description: "This is a description for Project 2.",
    },
    {
      id: 3,
      src: "/pictures/network-speed.png",
      title: "Project 3",
      description: "This is a description for Project 3.",
    },
    {
      id: 4,
      src: "/pictures/cof.png",
      title: "Project 1",
      description: "This is a description for Project 1.",
    },
    {
      id: 5,
      src: "/pictures/no-image.jpg",
      title: "Project 2",
      description: "This is a description for Project 2.",
    },
    {
      id: 6,
      src: "/pictures/no-image.jpg",
      title: "Project 3",
      description: "This is a description for Project 3.",
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
