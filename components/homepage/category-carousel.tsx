"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

const homepageCategorySlugs = [
  "home",
  "kitchen-dining",
  "workspace",
  "travel",
  "outdoor",
  "fitness-wellness",
  "apparel",
  "everyday-tech",
];

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) => homepageCategorySlugs.includes(c.slug));

  return (
    <section className="border-b border-border py-12 md:py-16">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Departments</p>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight md:text-3xl">Shop by room and ritual</h2>
          </div>
          <Link href="/categories" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">
            All categories
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible lg:gap-5">
          {homepageCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group min-w-[160px] flex-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 160px, 25vw"
                />
              </div>
              <p className="mt-3 text-sm font-medium tracking-wide">{category.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">{category.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
