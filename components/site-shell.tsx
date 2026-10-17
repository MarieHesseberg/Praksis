import Image from 'next/image';
import Link from 'next/link';

export const asset = (path: string) =>
  `${process.env.PRAKSIS_GITHUB_PAGES === 'true' ? '/Praksis' : ''}/${path}`;

export function SiteHeader({ active = 'home' }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Hopp til innhold
      </a>
      <Link className="brand" href="/" aria-label="EasyFisk – hjem">
        <span>MH</span>
        <strong>EasyFisk · praksis</strong>
      </Link>
      <nav aria-label="Hovednavigasjon">
        <Link href="/" aria-current={active === 'home' ? 'page' : undefined}>
          Hjem
        </Link>
        <Link
          href="/status-1/"
          aria-current={active === 'status-1' ? 'page' : undefined}
        >
          Status 1
        </Link>
        <Link
          href="/status-2/"
          aria-current={active === 'status-2' ? 'page' : undefined}
        >
          Status 2
        </Link>
        <Link href="/#logg">Prosjektlogg</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div>
        <span className="footer-mark">MH</span>
        <p>
          EasyFisk · praksis høsten 2026
          <br />
          Marie Hesseberg · Mandalselva Elveeigarlag
        </p>
      </div>
      <div className="footer-links">
        <a href="https://github.com/MarieHesseberg/EasyFisk">
          Prosjekt og dokumentasjon ↗
        </a>
        <a href="https://easyfisk.pages.dev/">Prøv prototypen ↗</a>
      </div>
    </footer>
  );
}

export function Screenshot({
  file,
  title,
  children,
}: {
  file: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="report-figure">
      <a
        href={asset(`screenshots/${file}`)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Åpne større bilde: ${title}`}
      >
        <Image
          unoptimized
          width={390}
          height={844}
          src={asset(`screenshots/${file}`)}
          alt={title}
          loading="lazy"
        />
      </a>
      <figcaption>
        <strong>{title}</strong>
        <span>{children}</span>
      </figcaption>
    </figure>
  );
}
