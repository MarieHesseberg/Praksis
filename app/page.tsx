import Image from 'next/image';
const logEntries = [
  {
    date: '19.–30. august',
    title: 'Fra idé til en fungerende prototype',
    text: 'Jeg begynte å utvikle EasyFisk på oppdrag fra Mandalselva Elveeigarlag. Løsningen gikk fra idé til en fungerende prototype, med egne områder for regler, fisketurer, fangster og dokumenter.',
    tags: ['Konsept', 'React', 'TypeScript', 'Lokal lagring'],
  },
  {
    date: '31. august–2. september',
    title: 'Fiskekort, kart og en helhetlig brukerreise',
    text: 'Jeg utviklet fiskekortbutikk med testbetaling, produktoversikt og kortstatus. Et interaktivt sonekart og et samlet fargesystem gjorde løsningen mer nyttig og troverdig.',
    tags: ['Fiskekort', 'Kart', 'Designsystem'],
  },
  {
    date: '7.–12. september',
    title: 'Engelsk språk og bedre hjelp til testing',
    text: 'Jeg la til engelsk for tilreisende fiskere og samlet oversettelsene i kontrollerte språkfiler. Jeg laget også veiledning som gjør det lettere å teste prototypen og gi konkrete tilbakemeldinger.',
    tags: ['Språk', 'Brukertesting', 'Innhold'],
  },
  {
    date: '12.–18. september',
    title: 'Mindre friksjon i de viktigste flytene',
    text: 'Tilbakemeldinger viste at appen ga for mye informasjon på én gang. Jeg forenklet hjemskjermen, fiskestart, kjøp og fangstrapportering, og forbedret mobilnavigasjonen.',
    tags: ['UX', 'Tilgjengelighet', 'Mobil først'],
  },
  {
    date: '18.–19. september',
    title: 'Ny designretning og et sterkere teknisk grunnlag',
    text: 'Jeg satte sammen en ny visuell retning med billettformede fiskekort, illustrasjoner og ny logo. Samtidig gjorde jeg datalaget, tidsbehandlingen og feiltilstandene mer robuste.',
    tags: ['Produktdesign', 'Arkitektur', 'Testing'],
  },
  {
    date: '19.–20. september',
    title: 'Selvforklarende prototype og publisering',
    text: 'Jeg laget en introduksjon som leder nye testere gjennom appen, tilpasset PC-visningen og gjorde prototypen klar for stabil publisering. Status er 198 enhetstester og 106 nettlesertester.',
    tags: ['Onboarding', 'Dokumentasjon', 'Publisering'],
  },
];

import { SiteHeader, SiteFooter, asset } from '../components/site-shell';

const recentEntries = [
  {
    date: '25.–29. september',
    title: 'Enklere fiskekortkjøp',
    text: 'Jeg samlet kjøpet rundt sone, delsone og kalender. Dagskort og sesongkort fikk tydelige valg, og bestillingen viser alle valgte dager og totalpris.',
    tags: ['Kjøpsflyt', 'Vilkår'],
  },
  {
    date: '1.–4. oktober',
    title: 'Profil og bedre områdeinformasjon',
    text: 'Jeg laget profilregistrering, ryddet Mer-menyen og arbeidet med områdebilder og opplysninger om fasiliteter, kontrollert mot Inatur.',
    tags: ['Profil', 'Innhold', 'Kildekontroll'],
  },
  {
    date: '8.–14. oktober',
    title: 'Roller og oppgaver rundt elva',
    text: 'Jeg undersøkte og utviklet lokale testflyter for grunneier, gjester, oppsyn, desinfektør og administrator. Rollevalget ble forenklet slik at relevante oppgaver vises i selve appen.',
    tags: ['Roller', 'Tilgang', 'Brukerflyt'],
  },
  {
    date: '14.–15. oktober',
    title: 'Tydeligere dokumenter og fiskestart',
    text: 'Jeg forbedret validering, kortvilkår, lesbarhet og nullfangst. Start fiske er tilgjengelig når ingen tur pågår, og manglende krav forklares med konkrete handlinger. Mobilvisningen fikk bedre plass og tydeligere knapper.',
    tags: ['Mobil', 'Testing', 'Tilbakemeldinger'],
  },
];
const features = [
  [
    'Fiskekort og kjøp',
    'Finne riktig sone og delsone, velge dager eller sesongkort, lese lokale vilkår og samle egne fiskekort. Kjøp til andre skal skille mellom kjøper og fisker.',
  ],
  [
    'Dokumentasjon på ett sted',
    'Samle fiskekort, fiskeravgift eller fritak og desinfiseringsbevis. Vise gyldighet og hva som mangler før fisket starter.',
  ],
  [
    'Kart og regler',
    'Utforske fiskeområder og sonegrenser, finne praktisk informasjon og se regler som gjelder den aktuelle fisketuren. Regelendringer skal være tydelige.',
  ],
  [
    'En sammenhengende fisketur',
    'Velge sone, kontrollere forberedelsene, starte og avslutte turen. Registrere tidligere turer når det er nødvendig.',
  ],
  [
    'Fangst og rapportering',
    'Registrere fangst, gjenutsetting eller nullfangst, legge til bilde og kommentar og finne historikken igjen. Målet er samlet rapportering som kan følges opp.',
  ],
  [
    'Profil, språk og oversikt',
    'Gjenbruke profilopplysninger, støtte norsk og engelsk og gi oversikt over egne turer, dokumenter, varsler og statistikk.',
  ],
  [
    'Grunneier, salg og gjester',
    'La ansvarlige administrere egne tilbud, priser og salgsgrenser, og gi gjestetilgang innenfor avtalte rettigheter.',
  ],
  [
    'Oppsyn og desinfisering',
    'Gjøre dokumentkontroll enklere og gi desinfektører en tydelig flyt for behandling og bevis. Arbeidet skal avgrenses til riktig område eller stasjon.',
  ],
  [
    'Administrasjon og oppfølging',
    'Godkjenne arbeidsroller, styre tidsavgrensede tilganger og gjøre det lettere å følge opp rapporter og informasjon på tvers av oppgaver.',
  ],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              EasyFisk · Mandalselva · praksis høsten 2026
            </p>
            <h1>Alt rundt fisket. Samlet på ett sted.</h1>
            <p className="lead">
              EasyFisk er en mobilprototype som skal gjøre det enklere å
              planlegge, gjennomføre og rapportere en fisketur i Mandalselva —
              og gi dem som forvalter fisket en mer sammenhengende arbeidsflyt.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="https://easyfisk.pages.dev/">
                Prøv prototypen ↗
              </a>
              <a className="text-link" href="#behov">
                Hvorfor EasyFisk? ↓
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Skjermbilder av EasyFisk">
            <div className="phone phone-back">
              <Image
                unoptimized
                width={390}
                height={844}
                src={asset('screenshots/october-permits.png')}
                alt="Fiskekortkjøp i EasyFisk, oktober 2026"
              />
            </div>
            <div className="phone phone-front">
              <Image
                unoptimized
                width={390}
                height={844}
                src={asset('screenshots/october-home.png')}
                alt="Hjemskjermen i EasyFisk, oktober 2026"
              />
            </div>
            <div className="status-note">Testbar prototype · oktober 2026</div>
          </div>
        </section>
        <section className="section company" id="behov">
          <div className="section-label">
            <span>01</span> Behovet i Mandalselva
          </div>
          <div className="company-grid">
            <div>
              <h2>En fisketur skal ikke begynne med å lete overalt.</h2>
            </div>
            <div>
              <p className="large-copy">
                I dag må fiskeren forholde seg til informasjon og dokumentasjon
                på forskjellige steder. Rapportering og oppfølging skjer også
                via e-post. Det gjør det tungvint å få oversikt og holde
                opplysningene samlet.
              </p>
              <p>
                Fiskekort, lokale regler, fiskeravgift, desinfisering og
                informasjon om fiskeområdene inngår i samme tur, men oppleves
                som separate oppgaver. Fiskeren må selv finne frem, kontrollere
                hva som gjelder og passe på at nødvendig dokumentasjon er
                tilgjengelig.
              </p>
              <p>
                For dem som følger opp fisket, betyr spredte opplysninger og
                rapporter på e-post at informasjon må finnes frem, sammenstilles
                og knyttes til riktig person, tur eller område. Det gir mer
                manuelt arbeid og gjør det vanskeligere å få en samlet oversikt.
              </p>
              <p>
                EasyFisk skal samle denne brukerreisen og redusere behovet for å
                bytte mellom steder og gjenta opplysninger. Målet er både
                enklere forberedelser for fiskeren og mer strukturert oppfølging
                for Mandalselva Elveeigarlag.
              </p>
            </div>
          </div>
          <blockquote className="problem-statement">
            <span>Problemstilling</span>Hvordan kan én samlet digital løsning
            gjøre informasjon, dokumentasjon og rapportering enklere for fiskere
            og forvaltningen i Mandalselva?
          </blockquote>
        </section>
        <section className="section" id="losningen">
          <div className="section-label">
            <span>02</span> Den ønskede brukerreisen
          </div>
          <div className="section-heading">
            <h2>Før, under og etter turen.</h2>
            <p>
              Informasjonen skal følge fisketuren, slik at brukeren får hjelp
              til neste oppgave på riktig tidspunkt.
            </p>
          </div>
          <div className="challenge-grid">
            <article>
              <span>01</span>
              <h3>Før turen</h3>
              <p>
                Finn fiskeområde, velg kort, les regler og samle dokumentasjon.
                Se hva som er klart, og få hjelp med det som mangler.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Ved elva</h3>
              <p>
                Bruk kartet, start fiske i riktig sone og ha kort og bevis lett
                tilgjengelig for kontroll. Registrer fangsten underveis.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Etter turen</h3>
              <p>
                Avslutt med fangst eller nullfangst og finn turen igjen i
                historikken. Målet er å gjøre rapporteringen tilgjengelig for
                videre oppfølging.
              </p>
            </article>
          </div>
        </section>
        <section className="section about" id="funksjoner">
          <div className="section-label">
            <span>03</span> Funksjoner og ambisjon
          </div>
          <div className="section-heading">
            <h2>Én app. Flere behov.</h2>
            <p>
              Dette er funksjonene løsningen skal dekke. Mange kan prøves lokalt
              allerede; ekte betaling, delt lagring og rapportlevering gjenstår.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section prototype-note">
          <div className="section-label">
            <span>04</span> Om prosjektet
          </div>
          <div className="company-grid">
            <div>
              <h2>Bygget for å prøve, lære og forbedre.</h2>
              <p>
                Jeg heter Marie Hesseberg og designer og utvikler EasyFisk med
                faglige innspill og tilbakemeldinger fra Mandalselva
                Elveeigarlag.
              </p>
            </div>
            <div>
              <p>
                Prototypen brukes til å utforske brukerflyter, innhold og
                samspillet mellom rollene før en løsning settes i drift.
                Testbetaling og lokale registreringer viser hvordan oppgavene
                kan løses, men utfører ikke virkelige betalinger eller
                innsendinger.
              </p>
              <p>
                En driftsversjon trenger ekte innlogging, felles database,
                integrasjoner og avklarte rutiner for hvem som mottar og
                behandler opplysningene. Videre testing med fiskere og andre
                brukere skal hjelpe med å prioritere dette.
              </p>
              <a className="primary-button" href="https://easyfisk.pages.dev/">
                Utforsk EasyFisk ↗
              </a>
            </div>
          </div>
        </section>
        <section className="section log-section" id="logg">
          <div className="section-label">
            <span>05</span> Prosjektlogg
          </div>
          <div className="section-heading">
            <h2>Arbeidet uke for uke.</h2>
            <p>
              Fra de første skjermene til en prototype med flere roller. Status
              1 og Status 2 ligger på egne sider i menyen øverst.
            </p>
          </div>
          <div className="timeline">
            {[...logEntries, ...recentEntries].map((entry, index) => (
              <article className="timeline-entry" key={entry.title}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline-content">
                  <time>{entry.date} 2026</time>
                  <h3>{entry.title}</h3>
                  <p>{entry.text}</p>
                  <div className="tags">
                    {entry.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="log-source">
            <a href="https://github.com/MarieHesseberg/EasyFisk/blob/main/PROSJEKTLOGG.md">
              Les den detaljerte prosjektloggen ↗
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
