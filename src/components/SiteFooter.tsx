import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { lab, navLinks } from "@/lib/lab-data";
import iconGmail from "@/assets/social/gmail.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <p className="display-title silver-text mb-6 text-center text-lg">
          The {lab.name} at {lab.institute}
        </p>
        <hr className="silver-rule mx-auto mb-14 w-2/3" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="display-title mb-5 text-[28.376px] font-bold text-primary">
              Contact
            </p>
            <p className="text-[21.6752px] leading-relaxed">
              Dr. Dhiraj S. Dhotre, Scientist 'E'
              <br />
              Lab 3, Old Building
              <br />
              NCCS, SPPU Campus
              <br />
              Pune 411007
            </p>
          </div>

          <div>
            <p className="display-title mb-5 text-[28.376px] font-bold text-primary">
              Navigate
            </p>
            <ul className="space-y-5 text-[21.6752px]">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition-colors hover:text-ink-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="display-title mb-5 text-[28.376px] font-bold text-primary">
              More
            </p>
            <ul className="space-y-5 text-[21.6752px]">
              <li>
                <Link
                  to="/join"
                  className="transition-colors hover:text-ink-foreground"
                >
                  Join the Lab
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${lab.email}`}
                  title={lab.email}
                  aria-label={`Email ${lab.email}`}
                  className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <img src={iconGmail} alt="" className="h-5 w-5 rounded-sm" />
                  {lab.email}
                </a>
              </li>
              <li>
                <a
                  href={lab.twitter}
                  className="transition-colors hover:text-ink-foreground"
                >
                  @DDOmicsLab
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="display-title mb-5 text-[28.376px] font-bold text-primary">
              Funded by
            </p>
            <p className="text-[21.6752px] leading-relaxed">
              Department of Biotechnology, Department of Science &amp;
              Technology, and Science &amp; Engineering Research Board, New
              Delhi.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-ink-foreground/10 pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-[12px] opacity-50">
            © {new Date().getFullYear()} {lab.name}, NCCS Pune. All rights
            reserved.
          </p>
          <a
            href="https://github.com/oktavianos"
            target="_blank"
            rel="noreferrer"
            className="sheen inline-flex items-center gap-2 border border-ink-foreground/20 px-3 py-1.5 font-mono text-[12px] opacity-80 transition-all hover:border-ink-foreground/40 hover:opacity-100"
          >
            <Github className="h-3 w-3" strokeWidth={1.75} />
            Site built by Suyash Jadhav
          </a>
        </div>
      </div>
    </footer>
  );
}
