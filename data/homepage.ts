import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Living, quietly considered.",
    description:
      "A contemporary edit of home, work, and everyday pieces — selected for how they feel in use, not how loudly they photograph.",
    ctaText: "Shop the Edit",
    ctaLink: "/shop",
    secondaryCtaText: "Explore Home",
    secondaryCtaLink: "/categories/home",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Complimentary shipping",
    description: "Free standard shipping on orders over $75.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure checkout",
    description: "Encrypted payment details on every order.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "30-day returns",
    description: "Send back unused items within 30 days.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Direct support",
    description: "Email us and we will help with orders and products.",
  },
  {
    id: "5",
    icon: "star",
    title: "Considered selection",
    description: "Products chosen for utility, materials, and everyday ease.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "studio-scented-candle",
  "park-picnic-blanket",
  "easy-overshirt",
  "stonewashed-linen-towels",
  "quiet-hours-diffuser",
] as const;

export const homepageBestsellerSlugs = [
  "almaden-linen-bedding",
  "slope-laptop-stand",
  "weekend-holdall",
  "studio-alignment-mat",
  "everyday-cotton-tee",
  "pacific-sunglasses",
  "daybreak-stoneware-plates",
  "clip-task-light",
] as const;

export const homepageFeaturedSlugs = [
  "almaden-linen-bedding",
  "clip-task-light",
  "slope-laptop-stand",
  "weekend-holdall",
  "easy-overshirt",
  "paper-feel-ereader",
] as const;

export const homepageCurrentEditSlugs = [
  "shoreline-ceramic-vase",
  "daybreak-stoneware-plates",
  "clothbound-notebook",
  "soft-crossbody",
  "park-picnic-blanket",
  "quiet-hours-diffuser",
] as const;

export const homepageNewArrivalSlugs = [
  "studio-scented-candle",
  "week-cloth-planner",
  "structured-laptop-sleeve",
  "weighted-jump-rope",
  "ceramic-jewelry-dish",
  "safety-razor-set",
  "compact-instant-camera",
  "clip-task-light",
] as const;

export const homepageUtilitySlugs = [
  "paper-feel-ereader",
  "slope-laptop-stand",
  "low-profile-keyboard",
  "clip-task-light",
  "precision-desk-scissors",
  "city-travel-backpack",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Pack lighter. Stay longer.",
  description:
    "Travel pieces with a quiet structure — holdalls, sleeves, and cabin-ready cases for weekends and work trips.",
  buttonText: "Shop Travel",
  buttonLink: "/categories/travel",
  image: "/banners/promo.jpg",
};

export const aboutSection = {
  title: "Selected for how a day actually goes.",
  description:
    "Shrimpz Management LLC brings together contemporary products for living, working, and moving through the week. The assortment is practical, considered, and edited toward quality you can use every day.",
  checklist: [
    "A focused assortment across home, work, and travel",
    "Materials and details chosen for daily use",
    "Clear product information and straightforward checkout",
    "Support available by email for orders and questions",
  ],
  buttonText: "Read our story",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const lifestyleStory = {
  eyebrow: "A slower interior",
  title: "Rooms that work as hard as the people in them.",
  description:
    "We look for objects with a calm presence — linens that drape, lamps that warm a corner, and storage that keeps the rest of life from stacking up on the table.",
  ctaText: "Shop Home",
  ctaLink: "/categories/home",
  image: "/banners/lifestyle.jpg",
};

export const secondaryEditorial = {
  eyebrow: "Workspace",
  title: "A desk can be quiet and still get things done.",
  description:
    "Stands, paper, and small tools that keep a work surface clear. Precision without the look of a control room.",
  ctaText: "Shop Workspace",
  ctaLink: "/categories/workspace",
  image: "/banners/editorial.jpg",
};

export const featuredEditorial = {
  title: "Featured: Almaden Linen Bedding",
  description:
    "Washed linen with a lived-in drape — the kind of bedding that makes a room feel finished without looking staged.",
  productSlug: "almaden-linen-bedding",
  image: "/products/almaden-linen-bedding-1.jpg",
};

export const featuredCollection = {
  title: "The Current Edit",
  description: "A short list of pieces we keep coming back to — useful, well made, and easy to live with.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Apparel", slug: "apparel" },
  { label: "Travel", slug: "travel" },
  { label: "Workspace", slug: "workspace" },
];

export const newsletter = {
  title: "New arrivals, quietly announced.",
  description: "Occasional notes on new pieces and considered edits. No noise.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const announcement = {
  text: "Complimentary shipping on orders over $75",
};
