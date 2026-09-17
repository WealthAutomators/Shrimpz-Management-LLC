import Image from "next/image";
import Link from "next/link";
import { lifestyleStory } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function LifestyleStory() {
  return (
    <section className="py-0">
      <div className="relative min-h-[520px] w-full overflow-hidden md:min-h-[640px]">
        <Image
          src={lifestyleStory.image}
          alt={lifestyleStory.title}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
        <Container className="relative flex min-h-[520px] items-center py-16 md:min-h-[640px]">
          <div className="max-w-lg text-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">{lifestyleStory.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
              {lifestyleStory.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">{lifestyleStory.description}</p>
            <Button asChild size="lg" className="mt-8 rounded-sm bg-white text-foreground hover:bg-white/90">
              <Link href={lifestyleStory.ctaLink}>{lifestyleStory.ctaText}</Link>
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
