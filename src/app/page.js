import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/HomeSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mx-auto py-4 px-12 mt-20">
        <HeroSection />
        <HomeSection />
      </div>
    </main>
  );
}
