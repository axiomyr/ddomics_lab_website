import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import bgPublications from "@/assets/bg-publications.jpg";
import { featuredPublications } from "@/lib/lab-data";

const profileLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=wURU1tQAAAAJ",
  },
  {
    label: "Scopus",
    href: "https://www.scopus.com/results/authorNamesList.uri?query=Dhiraj%20Dhotre",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0000-0002-5000-7396",
  },
] as const;

export const Route = createFileRoute("/publications/featured")({
  head: () => ({
    meta: [
      { title: "Featured Publications — DDOmics Lab, NCCS Pune" },
      {
        name: "description",
        content:
          "Featured studies from the DDOmics Lab on gut, oral and skin microbiomes, gluten disorders and Indian population cohorts.",
      },
      {
        property: "og:title",
        content: "Featured Publications — DDOmics Lab, NCCS Pune",
      },
      {
        property: "og:description",
        content: "Featured studies from the DDOmics Lab at NCCS Pune.",
      },
    ],
  }),
  component: FeaturedPublicationsPage,
});

function FeaturedPublicationsPage() {
  return (
    <>
      <PageHero
        image={bgPublications}
        height="short"
        eyebrow="Publications / Featured"
        title={
          <>
            Featured <span className="silver-text">studies</span>
          </>
        }
        lede="A selection of the lab's studies. Each entry links out to the publisher via DOI."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="flex flex-wrap items-baseline justify-end gap-x-8 gap-y-4">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {profileLinks.map((link, i) => (
                <span key={link.label} className="flex items-center gap-x-4">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-muted-foreground">
                      ·
                    </span>
                  )}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPublications.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group flex h-full flex-col">
                  <div className="art-tile relative aspect-[4/3] overflow-hidden border border-border">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 font-display text-lg leading-snug font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.authors} · <em>{p.venue}</em> ({p.year})
                  </p>
                  {p.doi && (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="eyebrow sheen mt-4 inline-block self-start border border-border px-4 py-2 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      Read it →
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-20">
            <Link
              to="/publications"
              className="eyebrow sheen inline-block border border-silver/50 px-6 py-3 tracking-[0.12em] uppercase transition-colors hover:border-silver"
            >
              ← Back to Publications
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
