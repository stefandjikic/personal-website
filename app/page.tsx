import AboutSection from "./_components/home/AboutSection";
import BlogSection from "./_components/home/BlogSection";
import HeroComponent from "./_components/home/HeroComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroComponent />
      <div className="my-36">
        <BlogSection />
      </div>
      <div className="my-36">
        <AboutSection />
      </div>
    </div>
  );
}
