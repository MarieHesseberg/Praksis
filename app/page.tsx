const logEntries = [
  {
    date: '19.–30. august',
    title: 'Fra idé til en fungerende prototype',
    text: 'Jeg etablerte EasyFisk, gikk fra grønn til blå visuell identitet og delte løsningen i tydeligere fagområder. Regler, lokal lagring og skjermbilder fikk klare grenser, samtidig som fisketurer, fangster, dokumenter og bilder begynte å bli lagret på ordentlig i nettleseren.',
    tags: ['Konsept', 'React', 'TypeScript', 'Lokal lagring'],
  },
  {
    date: '31. august–2. september',
    title: 'Fiskekort, kart og en helhetlig brukerreise',
    text: 'Jeg utviklet fiskekortbutikk med testbetaling, produktoversikt og kortstatus. Det tegnede kartet ble erstattet med et interaktivt sonekart, og et samlet fargesystem ga appen et roligere og mer troverdig uttrykk.',
    tags: ['Fiskekort', 'Kart', 'Designsystem'],
  },
  {
    date: '7.–12. september',
    title: 'Engelsk språk og bedre hjelp til testing',
    text: 'Jeg la til engelsk for tilreisende fiskere og samlet oversettelsene i kontrollerte språkfiler. Samtidig laget jeg spørsmål og veiledning som gjør det enklere for andre å teste prototypen og gi konkrete tilbakemeldinger.',
    tags: ['Språk', 'Brukertesting', 'Innhold'],
  },
  {
    date: '12.–18. september',
    title: 'Mindre friksjon i de viktigste flytene',
    text: 'Tilbakemeldinger viste at appen ga for mye informasjon på én gang. Jeg forenklet hjemskjermen, fiskestart, kjøp og fangstrapportering, forbedret mobilnavigasjonen og la til profil, automatisk utfylling og kladder.',
    tags: ['UX', 'Tilgjengelighet', 'Mobil først'],
  },
  {
    date: '18.–19. september',
    title: 'Ny designretning og et sterkere teknisk grunnlag',
    text: 'Etter tolv designforslag satte jeg sammen en ny retning med billettformede fiskekort, illustrasjoner, ny logo og Nunito Sans. Parallelt ble datalag, tidsbehandling og feiltilstander gjort mer robuste. Etter arbeidet bestod 198 enhetstester og 106 nettlesertester.',
    tags: ['Produktdesign', 'Arkitektur', 'Testing'],
  },
  {
    date: '19.–20. september',
    title: 'Selvforklarende prototype og publisering',
    text: 'Jeg laget en introduksjon som leder nye testere gjennom appen uten at jeg må stå ved siden av. PC-visningen fikk samme uttrykk som mobilappen, og prototypen ble gjort klar for stabil, statisk publisering.',
    tags: ['Onboarding', 'Dokumentasjon', 'Publisering'],
  },
];

const responsibilities = [
  { number: '01', title: 'Innsikt og avgrensning', text: 'Forstå fiskerens behov, undersøke regler og offentlige kilder og gjøre et komplekst fagområde håndterbart.' },
  { number: '02', title: 'Design og prototyping', text: 'Utforme informasjonsarkitektur, brukerflyter, visuell retning og responsive skjermer for mobil og PC.' },
  { number: '03', title: 'Utvikling', text: 'Bygge funksjonene i React og TypeScript, med kart, regler, skjemaer, lokal lagring og språkstøtte.' },
  { number: '04', title: 'Testing og forbedring', text: 'Teste på små skjermer, samle tilbakemeldinger, rette friksjon og sikre løsningen med automatiske tester.' },
];

const challenges = [
  { title: 'Komplekse regler må bli forståelige', text: 'Fiskeren skal få et tydelig svar uten at viktige vilkår eller nyanser forsvinner. Derfor viser statusmotoren både resultatet og hvorfor det gjelder.' },
  { title: 'En prototype må være ærlig', text: 'Betaling, innsending og flere datakilder er simulert. Testkort er tydelig merket, ingen penger trekkes, og lokale handlinger fremstilles ikke som ekte tjenester.' },
  { title: 'Mobilen avslører de virkelige problemene', text: 'Dialoger, bunnmeny, tastatur og små høyder skapte feil som ikke var synlige på PC. Fysiske mobiltester har derfor styrt flere forbedringer.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Til toppen"><span>MH</span><strong>Praksislogg</strong></a>
        <nav aria-label="Hovednavigasjon"><a href="#om">Om</a><a href="#oppgaven">Oppgaven</a><a href="#logg">Logg</a><a href="#video">Video</a></nav>
        <a className="header-link" href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub · EasyFisk ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Praksisperiode · høsten 2026</p>
          <h1>Jeg gjør fiskeregler enklere å forstå.</h1>
          <p className="lead">Dette er statusen fra praksisarbeidet mitt med <strong>EasyFisk</strong> — en mobilprototype som samler det fiskeren trenger før, under og etter en tur i Mandalselva.</p>
          <div className="hero-actions"><a className="primary-button" href="#logg">Se hva jeg har gjort ↓</a><a className="text-link" href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Test prototypen ↗</a></div>
        </div>
        <div className="hero-visual" aria-label="Skjermbilder fra EasyFisk">
          <div className="phone phone-back"><img src="screenshots/map.png" alt="Sonekartet i EasyFisk" /></div>
          <div className="phone phone-front"><img src="screenshots/home.png" alt="Hjemskjermen i EasyFisk" /></div>
          <div className="status-note"><span className="pulse" /> Oppdatert 22. september</div>
        </div>
      </section>

      <section className="about section" id="om">
        <div className="section-label"><span>01</span> Om meg</div>
        <div className="about-grid">
          <figure className="portrait"><img src="me.jpg" alt="Marie Hesseberg" /><figcaption>Marie Hesseberg · designer og utvikler EasyFisk</figcaption></figure>
          <div className="about-copy"><p className="eyebrow">Hei, jeg er Marie</p><h2>Jeg liker å gjøre vanskelige ting enkle å bruke.</h2><p className="large-copy">I dette praksisprosjektet jobber jeg i skjæringspunktet mellom design, teknologi og tjenesteutvikling.</p><p>Jeg følger produktet hele veien: fra innsikt og kildearbeid til skisser, kode, testing og dokumentasjon. Det motiverer meg å se hvordan små valg i språk, struktur og visuell utforming kan gjøre en digital tjeneste tryggere og mer forståelig.</p><p>EasyFisk har gitt meg mulighet til å ta selvstendige beslutninger, teste dem i praksis og forbedre løsningen når virkelige brukere møter den.</p><div className="about-facts"><span>Produktdesign</span><span>Frontend</span><span>Brukeropplevelse</span><span>Testing</span></div></div>
        </div>
      </section>

      <section className="company section">
        <div className="section-label"><span>02</span> Om EasyFisk</div>
        <div className="company-grid">
          <div><p className="eyebrow">Digital tjenesteutvikling</p><h2>Et lite prosjekt med et tydelig problem å løse.</h2></div>
          <div><p className="large-copy">EasyFisk er et selvstendig praksis- og prototypeprosjekt innen digitale tjenester for fritidsfiske og naturforvaltning.</p><p>Løsningen tar utgangspunkt i Mandalselva og samler fiskekort, dokumentasjon, regler, kart, fiskeøkter og fangstrapportering i én sammenhengende opplevelse. Særpreget er kombinasjonen av komplekst regelverk og en enkel, mobil brukerflyt.</p><p>EasyFisk er foreløpig ikke et etablert selskap med ansatte eller offentlig omsetning. Jeg utvikler prototypen selv, med offentlige kilder, tilbakemeldinger fra testere og behov i den lokale fiskereisen som grunnlag.</p></div>
        </div>
        <div className="fact-strip"><div><strong>1</strong><span>selvstendig utvikler</span></div><div><strong>198</strong><span>enhetstester</span></div><div><strong>106</strong><span>nettlesertester</span></div><div><strong>2</strong><span>språk i prototypen</span></div></div>
      </section>

      <section className="intro section" id="oppgaven">
        <div className="section-label"><span>03</span> Oppgaven</div>
        <div className="intro-grid"><h2>En digital følgesvenn for en tryggere fisketur.</h2><div><p className="large-copy">Målet er å utforske hvordan en digital tjeneste kan gjøre det lettere å følge regler, dokumentere aktivitet og få oversikt over egen fisking.</p><p>Prototypen leder brukeren gjennom kontroll av fiskekort og dokumenter, valg av sone, selve fiskeøkten og rapportering av fangst. Den skal være enkel nok for førstegangsbrukere og samtidig presis nok til å formidle komplekst regelverk.</p></div></div>
        <div className="responsibility-grid">{responsibilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="showcase section">
        <div className="showcase-copy"><p className="eyebrow light">Arbeid i praksis</p><h2>Fra regelverk til en flyt som gir mening.</h2><p>Brukeren får tydelig beskjed om hva som er godkjent, hva som mangler og hvorfor. I fangstrapporten kontrolleres valgene automatisk mot gjeldende størrelsesregler.</p><a href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Prøv hele brukerreisen ↗</a></div>
        <div className="showcase-images"><figure><img src="screenshots/catch-report.png" alt="Regelkontroll av fangstrapport" /><figcaption>Automatisk regelkontroll</figcaption></figure><figure><img src="screenshots/permits.png" alt="Oversikt over fiskekort" /><figcaption>Fiskekort og dokumentasjon</figcaption></figure></div>
      </section>

      <section className="section log-section" id="logg">
        <div className="section-label"><span>04</span> Arbeidslogg</div>
        <div className="section-heading"><h2>Dette har jeg gjort så langt.</h2><p>Arbeidet har gått fra konsept og første prototype til et mer gjennomarbeidet produkt med ny designretning, brukerveiledning og et robust teknisk grunnlag.</p></div>
        <div className="timeline">{logEntries.map((entry, index) => <article className="timeline-entry" key={entry.title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><time>{entry.date}</time><h3>{entry.title}</h3><p>{entry.text}</p><div className="tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section className="challenges section">
        <div className="section-label"><span>05</span> Utfordringer og læring</div>
        <div className="section-heading"><h2>Det mest spennende ligger i detaljene.</h2><p>De viktigste læringspunktene har kommet når faglige krav, tekniske begrensninger og brukerens forventninger møtes.</p></div>
        <div className="challenge-grid">{challenges.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="video-section section" id="video">
        <div className="video-copy"><p className="eyebrow light">Skjermdemo</p><h2>Se EasyFisk i bruk.</h2><p>Den publiserte prototypen fungerer som en interaktiv demonstrasjon. En kort veiledning viser hva som bør testes, før du kan prøve fiskekort, statusmotor, kart, fiskeøkt og fangstrapportering selv.</p><div className="hero-actions"><a className="light-button" href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Start demonstrasjonen ↗</a><a className="video-link" href="https://github.com/MarieHesseberg/EasyFisk/blob/main/PROSJEKTLOGG.md" target="_blank" rel="noreferrer">Les hele prosjektloggen ↗</a></div></div>
        <div className="video-frame"><span>01</span><div><b>Før turen</b><p>Fiskekort, dokumenter, regler og status.</p></div><span>02</span><div><b>Under turen</b><p>Sonevalg, kart og aktiv fiskeøkt.</p></div><span>03</span><div><b>Etter turen</b><p>Fangst, historikk og statistikk.</p></div></div>
      </section>

      <section className="section missing">
        <div className="section-label"><span>06</span> Veien videre</div>
        <div className="missing-grid"><div><h2>Fra lokal prototype til en ekte tjeneste.</h2><p className="large-copy">Grunnlaget er på plass. Neste fase handler om validering, integrasjoner og testing med flere faktiske brukere.</p></div><div className="missing-list"><article><b>01</b><div><h3>Teste med fiskere</h3><p>Observere hele brukerreisen og finne ut hvor språk, valg eller tilbakemeldinger fortsatt skaper usikkerhet.</p></div></article><article><b>02</b><div><h3>Koble på ekte tjenester</h3><p>Erstatte demonstrasjonsdata med sikker innlogging, fiskekort, betaling, serverlagring og innsending av rapporter.</p></div></article><article><b>03</b><div><h3>Dokumentere og forbedre</h3><p>Iterere på funnene, styrke universell utforming og fortsette å dokumentere valg og avgrensninger.</p></div></article></div></div>
      </section>

      <footer><div><span className="footer-mark">MH</span><p>Praksislogg · EasyFisk<br />Utviklet og dokumentert av Marie Hesseberg</p></div><div className="footer-links"><a href="https://github.com/MarieHesseberg/EasyFisk" target="_blank" rel="noreferrer">GitHub-repository ↗</a><a href="https://mariehesseberg.github.io/EasyFisk/" target="_blank" rel="noreferrer">Publisert prototype ↗</a></div></footer>
    </main>
  );
}

