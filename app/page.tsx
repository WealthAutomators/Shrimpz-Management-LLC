import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { CurrentEdit } from "@/components/homepage/current-edit";
import { LifestyleStory } from "@/components/homepage/lifestyle-story";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { EverydayUtility } from "@/components/homepage/everyday-utility";
import { BestSellers } from "@/components/homepage/best-sellers";
import { SecondaryEditorial } from "@/components/homepage/secondary-editorial";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <FeaturedCollection />
      <CurrentEdit />
      <LifestyleStory />
      <NewArrivals />
      <EverydayUtility />
      <BestSellers />
      <SecondaryEditorial />
      <PromotionalBanner />
      <AboutSection />
      <Newsletter />
    </>
  );
}
