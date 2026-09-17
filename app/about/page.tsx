import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted md:aspect-[4/3]">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="A considered assortment">
            <p>
              Shrimpz Management LLC is a contemporary lifestyle retailer. The catalog is built around
              products that support modern living — home objects, kitchen pieces, workspace tools,
              travel carry, apparel, and everyday essentials with a quiet, useful character.
            </p>
            <p className="mt-4">
              We look for practical innovation and quality you can feel in daily use. The goal is
              convenience without visual noise: pieces that work in a contemporary apartment, a
              shared workspace, or a weekend bag.
            </p>
            <p className="mt-4">
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Modern living", desc: "Home, kitchen, and lighting selected for calm rooms and everyday utility." },
            { title: "Thoughtful design", desc: "Materials, proportions, and details that hold up to regular use." },
            { title: "Practical convenience", desc: "A focused catalog so shopping stays clear from browse to checkout." },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border bg-card p-6">
              <h3 className="font-display text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What customers say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.id} className="border border-border bg-card p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-sm">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
