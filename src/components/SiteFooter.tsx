import { Link } from "@tanstack/react-router";
import { Github, Twitter } from "lucide-react";
import { lab, navLinks } from "@/lib/lab-data";
import iconGmail from "@/assets/social/gmail.png";
import labLogo from "@/assets/lab-logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <img
            src={labLogo}
            alt={`${lab.name} logo`}
            className="h-32 w-32 shrink-0 object-contain opacity-90"
          />

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3">
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
              <p className="mt-5 text-[21.6752px] leading-relaxed">
                <a
                  href={`mailto:${lab.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink-foreground"
                >
                  <img
                    src={iconGmail}
                    alt=""
                    className="h-5 w-5 rounded-sm"
                  />
                  {lab.email}
                </a>
              </p>
            </div>

            <div className="sm:col-span-2">
              <p className="display-title mb-5 text-[28.376px] font-bold text-primary">
                Quick Links
              </p>
              <div className="flex items-start gap-16">
                <ul className="space-y-5 text-[21.6752px]">
                  {navLinks.slice(0, 3).map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="underline underline-offset-4 transition-colors hover:text-ink-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-5 text-[21.6752px]">
                  {navLinks.slice(3).map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className="underline underline-offset-4 transition-colors hover:text-ink-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/join"
                      className="underline underline-offset-4 transition-colors hover:text-ink-foreground"
                    >
                      Join the Lab
                    </Link>
                  </li>
                </ul>
                <a
                  href={lab.twitter}
                  aria-label="@DDOmicsLab on Twitter/X"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-foreground text-ink transition-opacity hover:opacity-80"
                >
                  <Twitter className="h-5 w-5" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-[21.6752px] leading-relaxed">
          Funded by the Department of Biotechnology, Department of Science
          &amp; Technology, and Science &amp; Engineering Research Board, New
          Delhi.
        </p>

        <hr className="my-10 border-primary/60" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
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
