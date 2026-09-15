import { Link } from "@tanstack/react-router";
import { researchTracks } from "@/lib/lab-data";

/** Infinite sliding ribbon of research domains — title above, a symbolic
 * image beneath, each card linking straight to its dedicated research page.
 * Mirrors ImageMarquee's motion so it reads as the same pattern used for
 * the lab-life photo ribbon. Not capped at a fixed count — however many
 * tracks exist in researchTracks, they all appear here. */
export function DomainsMarquee() {
  const items = [...researchTracks, ...researchTracks];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="domains-marquee-track gap-[20px]">
        {items.map((t, i) => (
          <Link
            key={`${t.slug}-${i}`}
            to="/research/$trackSlug"
            params={{ trackSlug: t.slug }}
            className="lift-card sheen group block w-[377.828px] shrink-0 border border-border bg-card p-7"
          >
            <h3 className="display-title text-xl leading-snug transition-colors group-hover:text-primary">
              {t.title}
            </h3>
            <div className="art-tile mt-6 aspect-[3/2] w-full overflow-hidden border border-border">
              <img
                src={t.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
