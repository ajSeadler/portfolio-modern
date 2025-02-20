/* eslint-disable import/order */
import { Image } from "@heroui/image";
import DefaultLayout from "@/layouts/default";
import { subtitle, title } from "@/components/primitives";

// Import blog data from JSON file
import blogs from "@/data/blogs/blogs.json";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="py-0">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-left mb-16">
            <h1 className={`text-5xl font-bold ${title()}`}>Blog</h1>
            <p className={subtitle()}>
              Explore my latest reflections and insights!
            </p>
          </div>

          {/* Blog Post Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="shadow-xl rounded-lg overflow-hidden"
              >
                <Image
                  isBlurred
                  isZoomed
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                  src={blog.coverImage}
                />
                <div className="p-8">
                  <h2 className="text-3xl font-semibold mb-4">
                    <a
                      className="hover:text-blue-600 transition-colors"
                      href={`/blog/${blog.id}`}
                    >
                      {blog.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>&bull;</span>
                    <span>{blog.readingTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
