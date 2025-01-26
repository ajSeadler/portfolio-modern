import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar positioned statically (scrolls with the page) */}
      <Navbar />
      {/* Main content area grows if content exceeds the viewport */}
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-10">
        {children}
      </main>
      <div className=" bottom-0">
        <Footer />
      </div>
    </div>
  );
}
