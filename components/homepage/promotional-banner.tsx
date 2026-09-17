import Image from "next/image";
import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[420px]">
          <Image
            src={promotionalBanner.image}
            alt={promotionalBanner.title}
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
          <div className="relative flex min-h-[360px] max-w-lg flex-col justify-center p-8 text-white md:min-h-[420px] md:p-12">
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
              {promotionalBanner.description}
            </p>
            <Button asChild size="lg" className="mt-8 w-fit rounded-sm bg-white text-foreground hover:bg-white/90">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
