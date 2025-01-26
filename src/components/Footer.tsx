/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import { Snippet } from "@heroui/snippet";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const PortfolioFooter: React.FC = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              Thanks for Visiting!
            </h2>
            {/* Copyright */}
            <Snippet
              hideCopyButton
              hideSymbol
              className="mt-12 text-xs text-gray-500 flex"
              variant="bordered"
            >
              © {new Date().getFullYear()} Anthony Seadler. All rights
              reserved.
              <p className="mt-4 text-sm text-gray-600">
                Made with{" "}
                <span aria-label="heart" className="text-red-500">
                  ❤
                </span>{" "}
                in Oklahoma
              </p>
            </Snippet>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li>
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide">
              Let's Connect
            </h3>
            <div className="flex space-x-6 mt-6">
              <a
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                href="https://github.com/yourusername"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub size={28} />
              </a>
              <a
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                href="https://linkedin.com/in/yourusername"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                aria-label="Twitter"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                href="https://twitter.com/yourusername"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
