/* eslint-disable react/no-unescaped-entities */
import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProjectGallery from "@/components/ProjectCard";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-left justify-center gap-4 py-0 md:py-0">
        <div className="inline-block max-w-lg text-left justify-left">
          <h1 className={title()}>Portfolio</h1>
          <p className={subtitle()}>
            A selection of projects I've worked on, showcasing my web
            development and technical skills.
          </p>
        </div>
        <ProjectGallery />
      </section>
    </DefaultLayout>
  );
}
