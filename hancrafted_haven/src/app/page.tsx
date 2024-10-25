import FeaturedCategories from "./ui/home/featured-categories";
import Banner from "./ui/home/banner";
import CallToAction from "./ui/home/call-to-action";
import OrDivider from "./ui/home/or-divider";

export default function HomePage() {
  return (
    <main>
      <div className="mb-4">
        <Banner />
      </div>
      <CallToAction />
      <OrDivider />
      <FeaturedCategories />
    </main>
  );
}
