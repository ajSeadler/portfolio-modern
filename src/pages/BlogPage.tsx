/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom"; // React Router
import { Image } from "@heroui/image";

import blogs from "@/data/blogs/blogs.json";
import DefaultLayout from "@/layouts/default";

export default function Blogs() {
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogs.find((post) => post.id.toString() === id);

  if (!blog) {
    return (
      <DefaultLayout>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-600">Blog Not Found</h1>
          <p className="mt-4 text-gray-600">
            The blog you're looking for doesn't exist.
          </p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-0">
        <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-600 text-xl mb-8">{blog.description}</p>
        <Image
          className=""
          sizes="small"
          alt={blog.title}
          src={blog.coverImage}
        />
        <div className="text-sm text-gray-500 mt-4">
          <span>{blog.date}</span>
          <span> &bull; </span>
          <span>{blog.readingTime}</span>
        </div>
        <p className="mt-4 leading-relaxed">{blog.post}</p>
      </div>
    </DefaultLayout>
  );
}
