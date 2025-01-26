import React, { useEffect, useState } from "react";

const ScrollProgressBar: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0  transform -translate-y-screen h-screen w-1 bg-black-200 z-10">
      <div className="w-full bg-blue-500" style={{ height: `${scrollTop}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
