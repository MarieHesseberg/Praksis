const logEntries = [
  { date: '19.–26. august', title: 'Fra idé til visuell prototype', text: 'Jeg etablerte EasyFisk som en mobiltilpasset prototype og bygget den første helhetlige brukeropplevelsen. Fargeprofilen ble justert fra grønn til blå for å gi løsningen et tydeligere og mer troverdig uttrykk.', tags: ['Konsept', 'UI-design', 'Mobil først'] },
  { date: '27.–28. august', title: 'Profesjonell struktur og domenelogikk', text: 'Jeg delte løsningen inn i funksjoner, domenelag, datakilder og gjenbrukbare komponenter. Fiskeregler, kvoter og validering ble skilt fra React-visningene og sikret med automatiske tester.', tags: ['React', 'TypeScript', 'Arkitektur'] },
  { date: '29.–30. august', title: 'Historikk, dokumentasjon og reelle regler', text: 'Fiskeøkter, fangster, bilder og dokumenter fikk lokal lagring. Jeg implementerte statuskontroll og kvoter basert på verifiserte regler for Mandalselva 2026, og la inn offisiell statistikk.', tags: ['IndexedDB', 'localStorage', 'Regelverk'] },
  { date: '31. august–1. september', title: 'Fiskekort og interaktivt kart', text: 'Jeg utviklet en komplett prototype for fiskekort: produktoversikt, detaljsider, tilgjengelighet, testbetaling og kobling til brukerens status. Et interaktivt sonekart gjør det enklere å forstå hvor kortet gjelder.', tags: ['Brukerflyt', 'Kart', 'Fiskekort'] },
  { date: '2. september', title: 'Visuell helhet og kvalitet', text: 'Jeg samlet fargene i et konsekvent designsystem og forbedret kontrast, hierarki og overflater. Visuelle regresjonstester bevarer uttrykket på iPhone, Android og desktop.', tags: ['Designsystem', 'Tilgjengelighet', 'Testing'] },
];

const completed = ['Statuskontroll før fiskestart', 'Sonevalg og interaktivt kart', 'Aktive fiskeøkter med tidsmåling', 'Fangstrapportering og regelkontroll', 'Lokal historikk, bilder og dokumenter', 'Personlig og offisiell statistikk', 'Fiskekortbutikk med testkjøp', 'Responsivt og tilgjengelig grensesnitt'];

const nextSteps = [
  { number: '01', title: 'Teste med faktiske brukere', text: 'Gjennomføre brukertester med fiskere og kartlegge hvor flytene skaper usikkerhet eller friksjon.' },
  { number: '02', title: 'Koble på ekte tjenester', text: 'Erstatte demonstrasjonsdata med API-er for fiskekort, GPS, betaling, varsler og innsending av rapporter.' },
  { number: '03', title: 'Forbedre og dokumentere', text: 'Iterere på funnene, styrke universell utforming og fortsette å dokumentere læring og tekniske valg.' },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Til toppen"><span>MH</span><strong>Praksislogg</strong></a>
      <nav aria-label="Hovednavigasjon"><a href="#oppgaven">Oppgaven</a><a href="#logg">Logg</a><a href="#videre">Veien videre</a></nav>
      <a className="header-link" href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub · EasyFisk ↗</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Praksisperiode · høsten 2026</p>
        <h1>Jeg gjør fiskeregler enklere å forstå.</h1>
        <p className="lead">Dette er arbeidsloggen min for <strong>EasyFisk</strong> — en mobilprototype som samler alt en fisker trenger før, under og etter en tur i Mandalselva.</p>
        <div className="hero-actions"><a className="primary-button" href="#logg">Se hva jeg har gjort ↓</a><a className="text-link" href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Åpne prototypen ↗</a></div>
      </div>
      <div className="hero-visual" aria-label="Skjermbilder fra EasyFisk">
        <div className="phone phone-back"><img src="/screenshots/map.png" alt="Sonekartet i EasyFisk" /></div>
        <div className="phone phone-front"><img src="/screenshots/home.png" alt="Hjemskjermen i EasyFisk" /></div>
        <div className="status-note"><span className="pulse" /> Sist oppdatert 2. september</div>
      </div>
    </section>

    <section className="intro section" id="oppgaven">
      <div className="section-label"><span>01</span> Oppgaven</div>
      <div className="intro-grid"><h2>En digital følgesvenn for en tryggere fisketur.</h2><div><p className="large-copy">Målet med praksisoppgaven er å utforske hvordan en digital tjeneste kan gjøre det lettere å følge regler, dokumentere aktivitet og få oversikt over egen fisking.</p><p>EasyFisk tar utgangspunkt i Mandalselva. Løsningen leder brukeren gjennom kontroll av fiskekort og dokumenter, valg av sone, selve fiskeøkten og rapportering av fangst. Prototypen skal både være enkel for førstegangsbrukere og presis nok til å formidle komplekst regelverk.</p></div></div>
      <div className="facts"><article><strong>5</strong><span>hovedområder i appen</span></article><article><strong>360 px</strong><span>minste støttede bredde</span></article><article><strong>2026</strong><span>aktiv regelversjon</span></article><article><strong>100 %</strong><span>mobiltilpasset prototype</span></article></div>
    </section>

    <section className="showcase section">
      <div className="showcase-copy"><p className="eyebrow light">Arbeid i praksis</p><h2>Fra regelverk til en flyt som gir mening.</h2><p>Brukeren får tydelig beskjed om hva som er godkjent, hva som mangler og hvorfor. I fangstrapporten kontrolleres valgene automatisk mot gjeldende størrelsesregler.</p><a href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">Se kildekoden på GitHub ↗</a></div>
      <div className="showcase-images"><figure><img src="/screenshots/catch-report.png" alt="Regelkontroll av fangstrapport" /><figcaption>Automatisk regelkontroll</figcaption></figure><figure><img src="/screenshots/permits.png" alt="Oversikt over fiskekort" /><figcaption>Fiskekort og dokumentasjon</figcaption></figure></div>
    </section>

    <section className="section log-section" id="logg">
      <div className="section-label"><span>02</span> Arbeidslogg</div>
      <div className="section-heading"><h2>Dette har jeg gjort så langt.</h2><p>Arbeidet har beveget seg fra konsept og visuell retning til arkitektur, fungerende brukerflyter og kvalitetssikring.</p></div>
      <div className="timeline">{logEntries.map((entry, index) => <article className="timeline-entry" key={entry.title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><time>{entry.date}</time><h3>{entry.title}</h3><p>{entry.text}</p><div className="tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
    </section>

    <section className="completed section"><div><p className="eyebrow">Leveranser</p><h2>En prototype som dekker hele fisketuren.</h2></div><div className="check-grid">{completed.map((item) => <div key={item}><span>✓</span>{item}</div>)}</div></section>

    <section className="section missing" id="videre">
      <div className="section-label"><span>03</span> Hva mangler?</div>
      <div className="missing-grid"><div><h2>Fra prototype til et ekte produkt.</h2><p className="large-copy">Grunnlaget er på plass, men flere funksjoner er foreløpig demonstrasjoner. Neste fase handler om validering og integrasjoner.</p></div><div className="missing-list"><article><b>01</b><div><h3>Ekte betaling og fiskekort</h3><p>Kjøpsflyten bruker testbetaling og et kontrollert øyeblikksbilde av produktdata. Ingen penger trekkes.</p></div></article><article><b>02</b><div><h3>GPS og live-data</h3><p>Posisjon, temperatur, kapasitet og tilgjengelighet er simulert og må kobles mot pålitelige tjenester.</p></div></article><article><b>03</b><div><h3>Innsending og varsler</h3><p>Rapporter lagres lokalt i nettleseren, men sendes ennå ikke til elveeierlaget.</p></div></article></div></div>
      <div className="next-plan"><p className="eyebrow light">Planen videre</p><div className="next-grid">{nextSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
    </section>

    <footer><div><span className="footer-mark">MH</span><p>Praksislogg · EasyFisk<br />Utviklet og dokumentert av Marie Hesseberg</p></div><div className="footer-links"><a href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub-repository ↗</a><a href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Publisert prototype ↗</a></div></footer>
  </main>;
}
