import BlogSection from "./components/home/BlogSection";
import HeroComponent from "./components/home/HeroComponent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroComponent />
      <div className="mt-28">
        <BlogSection />
      </div>
    </div>
  );
}
