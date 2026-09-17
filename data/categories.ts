import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Quiet interiors, considered textiles, and objects for everyday living.",
    productCount: 6,
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Tableware and tools for unhurried cooking and gathering.",
    productCount: 5,
  },
  {
    id: "3",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Clean desk essentials that keep work feeling composed.",
    productCount: 5,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Carry pieces designed for city weekends and longer routes.",
    productCount: 5,
  },
  {
    id: "5",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Simple gear for parks, gardens, and easy days outside.",
    productCount: 4,
  },
  {
    id: "6",
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    image: "/categories/fitness-wellness.jpg",
    description: "Studio-minded pieces for movement, recovery, and routine.",
    productCount: 5,
  },
  {
    id: "7",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Relaxed, precise clothing for everyday California living.",
    productCount: 5,
  },
  {
    id: "8",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Small finishing pieces with a quiet, useful presence.",
    productCount: 5,
  },
  {
    id: "9",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Daily rituals for bathing, grooming, and personal care.",
    productCount: 4,
  },
  {
    id: "10",
    slug: "everyday-tech",
    name: "Everyday Tech",
    image: "/categories/everyday-tech.jpg",
    description: "Useful devices that support reading, music, and work.",
    productCount: 4,
  },
  {
    id: "11",
    slug: "organization",
    name: "Organization",
    image: "/categories/organization.jpg",
    description: "Storage that keeps rooms light, open, and easy to live in.",
    productCount: 4,
  },
  {
    id: "12",
    slug: "lighting",
    name: "Lighting",
    image: "/categories/lighting.jpg",
    description: "Lamps with a warm, architectural calm.",
    productCount: 2,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
