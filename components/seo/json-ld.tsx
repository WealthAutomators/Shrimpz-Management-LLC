import { company } from "@/data/company";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: company.name,
        email: company.email,
        description: company.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressRegion: company.address.state,
          postalCode: company.address.zip,
          addressCountry: "US",
        },
      },
      {
        "@type": "WebSite",
        name: company.name,
        description: company.description,
        publisher: { "@type": "Organization", name: company.name },
        potentialAction: {
          "@type": "SearchAction",
          target: "/shop?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
