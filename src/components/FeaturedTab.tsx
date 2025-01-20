/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { FaUsers, FaLaptopCode, FaChartLine, FaRocket } from "react-icons/fa";
import { Image } from "@heroui/image";

const FeaturedTab = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <Card className="shadow-lg rounded-lg">
        <CardBody className="p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center">
            Featured Project | Filo
          </h3>
          <p className="">
            Filo is a professional tech forum designed to connect developers,
            tech enthusiasts, and professionals in a collaborative and engaging
            environment. It serves as a platform for sharing knowledge, building
            communities, and showcasing expertise.
          </p>

          <div className="mt-6 flex justify-center items-center space-x-4">
            {["filo-home.png", "filo-profile.png", "filo-comm.png"].map(
              (image, index) => (
                <button
                  key={index}
                  aria-label={`View ${image.split("-")[1].split(".")[0]} image`}
                  className="w-1/4 rounded shadow cursor-pointer"
                  role="button"
                  tabIndex="0"
                  onClick={() => openModal(`/pictures/${image}`)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && openModal(`/pictures/${image}`)
                  }
                >
                  <Image
                    alt={`Filo ${image.split("-")[1].split(".")[0]}`}
                    className="rounded shadow"
                    src={`/pictures/${image}`}
                  />
                </button>
              )
            )}
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-3">Key Features</h4>
            <ul className="list-none space-y-4">
              <li className="flex items-center">
                <FaUsers className="mr-3" />
                <span>
                  <strong>Communities:</strong> Join topic-specific groups for
                  in-depth discussions and collaboration.
                </span>
              </li>
              <li className="flex items-center">
                <FaLaptopCode className="text-grey-500 mr-3" />
                <span>
                  <strong>Posts:</strong> Share and discover technical insights,
                  tutorials, and projects.
                </span>
              </li>
              <li className="flex items-center">
                <FaChartLine className="text-grey-500 mr-3" />
                <span>
                  <strong>Profile:</strong> Build a professional profile to
                  showcase your skills and expertise.
                </span>
              </li>
              <li className="flex items-center">
                <FaRocket className="text-grey-500 mr-3" />
                <span>
                  Stay ahead with trending topics and innovative solutions.
                </span>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          aria-labelledby="modalTitle"
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          role="dialog"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
        >
          <div className="relative">
            <Image
              alt="Enlarged view"
              className="max-w-full max-h-screen rounded"
              src={selectedImage}
            />
            <button
              aria-label="Close modal"
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              role="button"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedTab;
