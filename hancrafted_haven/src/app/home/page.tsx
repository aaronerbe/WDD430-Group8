import FeaturedCategories from "../ui/home/featured-categories";
import Banner from "../ui/home/banner";

export default function HomePage() {
  return (
    <main>
      <div className="mb-4">
        <Banner />
      </div>
      <FeaturedCategories />
    </main>
  );
}
