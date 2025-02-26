import { Route, Routes } from "react-router-dom";

import Blogs from "./pages/BlogPage";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import PortfolioPage from "@/pages/portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<PortfolioPage />} path="/portfolio" />

        <Route element={<DocsPage />} path="/docs" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<Blogs />} path="/blog/:id" />
        <Route element={<AboutPage />} path="/about" />
      </Routes>
    </>
  );
}

export default App;
