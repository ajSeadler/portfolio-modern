import { useEffect, useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";

import AboutTab from "./AboutTab";
import FeaturedTab from "./FeaturedTab";
import FaqsTab from "./FaqsTab";

export default function TabsExample() {
  const [githubStats, setGithubStats] = useState({
    avatarUrl: "",
    bio: "",
    location: "",
  });

  useEffect(() => {
    // Fetch GitHub user stats
    async function fetchGithubStats() {
      try {
        const userResponse = await fetch(
          "https://api.github.com/users/ajSeadler"
        );
        const userData = await userResponse.json();

        setGithubStats({
          avatarUrl: userData.avatar_url,
          bio: userData.bio,
          location: userData.location,
        });
      } catch (error) {
        console.log("Failed to fetch GitHub stats", error);
      }
    }
    fetchGithubStats();
  }, []);

  return (
    <div className="flex w-100 flex-col mb-52 mx-auto">
      <Tabs aria-label="Options">
        <Tab key="about" title="About">
          <AboutTab githubStats={githubStats} />
        </Tab>
        <Tab key="featured" title="Featured">
          <FeaturedTab />
        </Tab>
        <Tab key="faqs" title="FAQs">
          <FaqsTab />
        </Tab>
      </Tabs>
    </div>
  );
}
