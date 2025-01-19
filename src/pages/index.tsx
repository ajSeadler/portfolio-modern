/* eslint-disable react/no-unescaped-entities */
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-screen">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Hi, I'm&nbsp;</span>
          <span className={title({ color: "violet" })}>
            Anthony Seadler&nbsp;
          </span>
          <br />
          <span className={title()}>a Full Stack Web Developer.</span>
          <div className={subtitle({ class: "mt-4" })}>
            I live in Oklahoma City and specialize in building interactive web
            applications with a focus on security and performance.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            My Projects
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Building modern applications with a blend of design and security.
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
