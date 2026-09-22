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

const responsibilities = [
  { number: '01', title: 'Forstå', text: 'Avgrense behov, regler og brukerens viktigste oppgaver.' },
  { number: '02', title: 'Designe og utvikle', text: 'Lage brukerflyter, grensesnitt og funksjoner for mobil og PC.' },
  { number: '03', title: 'Teste og forbedre', text: 'Bruke tilbakemeldinger og tester til å prioritere neste versjon.' },
];

const challenges = [
  { title: 'Behov må oversettes til løsning', text: 'Jeg må forstå hvilke problemer som er viktigst, prioritere mellom ulike ønsker og gjøre innsikt og tilbakemeldinger om til konkrete funksjoner.' },
  { title: 'Komplekse regler må bli forståelige', text: 'Fiskeren skal få et tydelig svar uten at viktige vilkår eller nyanser forsvinner. Derfor viser statusmotoren både resultatet og hvorfor det gjelder.' },
  { title: 'En prototype må være ærlig', text: 'Betaling, innsending og flere datakilder er simulert. Testkort er tydelig merket, ingen penger trekkes, og lokale handlinger fremstilles ikke som ekte tjenester.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Til toppen"><span>MH</span><strong>Praksislogg</strong></a>
        <nav aria-label="Hovednavigasjon"><a href="#om">Om og oppgave</a><a href="#status">Status</a><a href="#logg">Logg</a><a href="#video">Prøv</a></nav>
        <a className="header-link" href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub · EasyFisk ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Praksisperiode · høsten 2026</p>
          <h1>Sammen om en enklere fisketur.</h1>
          <p className="lead">Dette er status fra praksisarbeidet mitt med <strong>EasyFisk</strong> — en mobilprototype som skal gjøre det enklere å finne informasjon, forstå regler og gjennomføre en fisketur i Mandalselva.</p>
          <div className="hero-actions"><a className="primary-button" href="#logg">Se hva jeg har gjort ↓</a><a className="text-link" href="https://easyfisk.pages.dev/" target="_blank" rel="noreferrer">Test prototypen ↗</a></div>
        </div>
        <div className="hero-visual" aria-label="Skjermbilder fra EasyFisk">
          <div className="phone phone-back"><img src="screenshots/map.png" alt="Sonekartet i EasyFisk" /></div>
          <div className="phone phone-front"><img src="screenshots/home.png" alt="Hjemskjermen i EasyFisk" /></div>
          <div className="status-note"><span className="pulse" /> Oppdatert 22. september</div>
        </div>
      </section>

      <section className="about section" id="om">
        <div className="section-label"><span>01</span> Om meg og oppgaven</div>
        <div className="about-grid">
          <figure className="portrait"><img src="me.jpg" alt="Marie Hesseberg" /><figcaption>Marie Hesseberg · designer og utvikler EasyFisk</figcaption></figure>
          <div className="about-copy"><p className="eyebrow">Hei, jeg er Marie</p><h2>Jeg utvikler EasyFisk fra idé til testbar løsning.</h2><p className="large-copy">Oppgaven er å gjøre informasjon, regler og praktiske oppgaver rundt fiske i Mandalselva enklere å forstå og bruke.</p><p>Jeg designer og utvikler prototypen alene, med faglige innspill og tilbakemeldinger fra Mandalselva Elveeigarlag. Arbeidet omfatter hele prosessen fra innsikt og skisser til kode, testing og dokumentasjon.</p><div className="about-facts"><span>Produktdesign</span><span>Frontend</span><span>Brukeropplevelse</span><span>Testing</span></div></div>
        </div>
        <div className="fact-strip"><div><strong>1</strong><span>selvstendig utvikler</span></div><div><strong>198</strong><span>enhetstester</span></div><div><strong>106</strong><span>nettlesertester</span></div><div><strong>2</strong><span>språk i prototypen</span></div></div>
        <div className="responsibility-grid">{responsibilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="showcase section" id="status">
        <div className="showcase-copy"><p className="eyebrow light">02 · Status</p><h2>En sammenhengende fiskereise.</h2><p>Prototypen samler fiskekort, dokumenter, regler, kart, fiskeøkt og fangstrapportering. Brukeren får tydelig beskjed om hva som mangler og hvorfor.</p><a href="https://easyfisk.pages.dev/" target="_blank" rel="noreferrer">Prøv prototypen ↗</a></div>
        <div className="showcase-images"><figure><img src="screenshots/catch-report.png" alt="Regelkontroll av fangstrapport" /><figcaption>Automatisk regelkontroll</figcaption></figure><figure><img src="screenshots/permits.png" alt="Oversikt over fiskekort" /><figcaption>Fiskekort og dokumentasjon</figcaption></figure></div>
      </section>

      <section className="section log-section" id="logg">
        <div className="section-label"><span>03</span> Arbeidslogg</div>
        <div className="section-heading"><h2>Arbeidet uke for uke.</h2><p>Loggen viser hvordan løsningen har utviklet seg gjennom konkrete valg, testing og forbedringer.</p></div>
        <div className="timeline">{logEntries.map((entry, index) => <article className="timeline-entry" key={entry.title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><time>{entry.date}</time><h3>{entry.title}</h3><p>{entry.text}</p><div className="tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="challenges section">
        <div className="section-label"><span>04</span> Utfordringer og læring</div>
        <div className="section-heading"><h2>Tre ting jeg har lært.</h2><p>De viktigste utfordringene har vært prioritering, tydelige regler og en ærlig prototype.</p></div>
        <div className="challenge-grid">{challenges.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="video-section section" id="video">
        <div className="video-copy"><p className="eyebrow light">05 · Prøv selv</p><h2>Se EasyFisk i bruk.</h2><p>Prototypen er klar for testing av hele reisen. Neste steg er flere brukertester og å erstatte demonstrasjonsdata med ekte tjenester.</p><div className="hero-actions"><a className="light-button" href="https://easyfisk.pages.dev/" target="_blank" rel="noreferrer">Start demonstrasjonen ↗</a><a className="video-link" href="https://github.com/MarieHesseberg/EasyFisk/blob/main/PROSJEKTLOGG.md" target="_blank" rel="noreferrer">Detaljert prosjektlogg ↗</a></div></div>
        <div className="video-frame"><span>01</span><div><b>Før turen</b><p>Fiskekort, dokumenter, regler og status.</p></div><span>02</span><div><b>Under turen</b><p>Sonevalg, kart og aktiv fiskeøkt.</p></div><span>03</span><div><b>Etter turen</b><p>Fangst, historikk og statistikk.</p></div></div>
      </section>

      <footer><div><span className="footer-mark">MH</span><p>Praksislogg · EasyFisk<br />Utviklet og dokumentert av Marie Hesseberg</p></div><div className="footer-links"><a href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub-repository ↗</a><a href="https://easyfisk.pages.dev/" target="_blank" rel="noreferrer">Publisert prototype ↗</a></div></footer>
    </main>
  );
}

