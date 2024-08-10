import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
}
