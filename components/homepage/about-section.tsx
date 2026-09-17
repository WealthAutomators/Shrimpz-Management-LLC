import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted md:aspect-[4/3]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Brand</p>
            <h2 className="font-display mt-3 text-2xl font-medium tracking-tight md:text-3xl">{aboutSection.title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{aboutSection.description}</p>
            <ul className="mt-6 space-y-3">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 rounded-sm">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
