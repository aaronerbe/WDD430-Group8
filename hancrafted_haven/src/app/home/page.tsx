import FeaturedProducts from "../ui/home/featured-categories";
import Banner from "../ui/home/banner";

export default function HomePage() {
  return (
    <main>
      <div className="mb-4">
        <Banner />
      </div>

      <FeaturedProducts />
      <span>Login</span>
    </main>
  );
}
