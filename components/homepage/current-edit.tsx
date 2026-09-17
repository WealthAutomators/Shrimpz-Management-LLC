"use client";

import { homepageCurrentEditSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function CurrentEdit() {
  const products = getProductsBySlugs(homepageCurrentEditSlugs);

  return (
    <section className="bg-[#F3EFE8] py-14 md:py-20">
      <Container>
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Assortment</p>
            <h2 className="font-display mt-2 text-2xl font-medium tracking-tight md:text-3xl">The Current Edit</h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Six pieces that describe the store: useful, considered, and easy to live with.
            </p>
          </div>
          <Link href="/shop" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
