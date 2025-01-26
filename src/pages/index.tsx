/* eslint-disable react/no-unescaped-entities */
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import TabsExample from "@/components/TabsExample";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        className="flex flex-col items-center justify-center gap-8 h-screen  w-full"
        style={{
          // background: "radial-gradient(circle, #726CDA 4%, transparent 50%)",
          backgroundPosition: "center", // Ensure the gradient is centered
          margin: "auto", // Center the section
          padding: 0, // Override any padding set by the layout
        }}
      >
        <div className="text-center">
          <h1 className={title()}>
            Hi, I'm&nbsp;
            <span
              className={title({ color: "violet", class: "font-extrabold" })}
            >
              Anthony Seadler&nbsp;
            </span>
            <br />
            <span className={subtitle()}>Full Stack Web Developer.</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full items-center justify-center">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              class: "px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl",
            })}
            href={siteConfig.links.docs}
          >
            <span style={{ color: "#fff" }}>My Projects</span>
          </Link>
          <Link
            isExternal
            className={buttonStyles({
              variant: "bordered",
              radius: "full",
              class: "px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl",
            })}
            href={siteConfig.links.github}
          >
            <GithubIcon className="mr-2" size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-12">
          <Snippet
            hideCopyButton
            hideSymbol
            className="text-sm md:text-base"
            variant="bordered"
          >
            <span>Take a look below.</span>
          </Snippet>
        </div>
      </section>
      <TabsExample />
    </DefaultLayout>
  );
}
