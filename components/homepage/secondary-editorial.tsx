import Image from "next/image";
import Link from "next/link";
import { secondaryEditorial } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SecondaryEditorial() {
  return (
    <section className="bg-[#F3EFE8] py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {secondaryEditorial.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {secondaryEditorial.title}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              {secondaryEditorial.description}
            </p>
            <Button asChild className="mt-8 rounded-sm">
              <Link href={secondaryEditorial.ctaLink}>{secondaryEditorial.ctaText}</Link>
            </Button>
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden bg-muted lg:order-2 lg:aspect-[5/6]">
            <Image
              src={secondaryEditorial.image}
              alt={secondaryEditorial.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
