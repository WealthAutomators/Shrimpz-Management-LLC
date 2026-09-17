"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredEditorial } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function FeaturedCollection() {
  const product = getProductBySlug(featuredEditorial.productSlug);
  if (!product) return null;

  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="grid items-stretch gap-0 overflow-hidden border border-border bg-card lg:grid-cols-12">
          <div className="relative aspect-[4/5] lg:col-span-7 lg:aspect-auto">
            <Image
              src={featuredEditorial.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-5 lg:px-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Featured product</p>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight md:text-4xl">{product.name}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{featuredEditorial.description}</p>
            <p className="mt-6 text-lg font-medium">{formatPrice(product.salePrice ?? product.price)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-sm">
                <Link href={`/product/${product.slug}`}>View product</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-sm">
                <Link href="/categories/home">Browse Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
