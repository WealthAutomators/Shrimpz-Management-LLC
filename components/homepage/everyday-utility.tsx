"use client";

import Image from "next/image";
import Link from "next/link";
import { homepageUtilitySlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/container";

export function EverydayUtility() {
  const products = getProductsBySlugs(homepageUtilitySlugs);

  return (
    <section className="border-y border-border py-14 md:py-20">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Everyday technology</p>
          <h2 className="font-display mt-2 text-2xl font-medium tracking-tight md:text-3xl">
            Useful objects, not a gadget wall.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Tools that support reading, work, and movement through the day — precise, quiet, and part of the same assortment as the rest of the store.
          </p>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group flex gap-4 bg-background p-4 transition-colors hover:bg-card sm:p-5"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden bg-muted sm:h-28 sm:w-28">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="112px"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{product.category}</p>
                <h3 className="mt-1 text-sm font-medium leading-snug">{product.name}</h3>
                <p className="mt-2 text-sm">{formatPrice(product.salePrice ?? product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/categories/everyday-tech" className="text-sm text-muted-foreground hover:text-foreground">
            Shop Everyday Tech
          </Link>
        </div>
      </Container>
    </section>
  );
}
