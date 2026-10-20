import { Wordmark } from "@/components/wordmark";

const links = [
  { href: "#move", label: "The move" },
  { href: "#next", label: "What's next" },
  { href: "#list", label: "The list" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label="The Sports Store, back to top">
          <Wordmark />
        </a>
        <nav aria-label="Page" className="flex items-center gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.href === "#list"
                  ? "font-semibold text-sign"
                  : "hidden text-ink/80 hover:text-ink sm:inline"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
