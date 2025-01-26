/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Image } from "@heroui/image";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold ${title()}`}>Blog</h1>
            <p className="text-gray-700 mt-6 text-xl">
              Explore my latest reflections and insights!
            </p>
          </div>

          {/* Blog Post Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Post 1 */}
            <article className="shadow-xl rounded-lg overflow-hidden">
              <Image
                isBlurred
                isZoomed
                alt="Blog Post Thumbnail"
                className="w-full h-64 object-cover"
                src="/pictures/morning.jpg"
              />
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">
                  <a className="hover:text-blue-600 transition-colors" href="#">
                    Healthy Morning Habits
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A collection of morning habit's I have utilizied to increase
                  overall mood and productivity.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Jan 22, 2025</span>
                  <span>&bull;</span>
                  <span>2 min read</span>
                </div>
              </div>
            </article>

            {/* Example Post 2 */}
            <article className="shadow-xl rounded-lg overflow-hidden">
              <Image isBlurred isZoomed src="/pictures/scottsdale.jpg" />
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">
                  <a className="hover:text-blue-600 transition-colors" href="#">
                    Wild, Wild, West
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From Oklahoma, to Arizona, to Las Vegas. A personal blog of my
                  travels throughout western America
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Jan 15, 2025</span>
                  <span>&bull;</span>
                  <span>3 min read</span>
                </div>
              </div>
            </article>

            {/* Example Post 3 */}
            <article className="shadow-xl rounded-lg overflow-hidden">
              <Image
                isBlurred
                isZoomed
                alt="Blog Post Thumbnail"
                className="w-full h-64 object-cover"
                src="pictures/amps.jpg"
              />
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-4">
                  <a className="hover:text-blue-600 transition-colors" href="#">
                    The Joy of Music
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How music helped shape the developer I am today
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Jan 10, 2025</span>
                  <span>&bull;</span>
                  <span>4 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
