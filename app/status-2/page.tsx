import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SiteHeader,
  SiteFooter,
  Screenshot,
} from '../../components/site-shell';

export const metadata: Metadata = {
  title: 'Status 2 · Videreutvikling og roller · EasyFisk',
};

export default function StatusTwo() {
  return (
    <>
      <SiteHeader active="status-2" />
      <main id="main-content">
        <section className="report-hero">
          <p className="eyebrow">Status 2 · 23. september–17. oktober 2026</p>
          <h1>Fra fiskerens verktøy til flere roller rundt elva.</h1>
          <p className="lead">
            Siden Status 1 har jeg videreutviklet EasyFisk med enklere
            fiskekortkjøp, tydeligere dokumentasjon og arbeidsflyter for
            grunneier, oppsyn, desinfektør og administrator. Samtidig har jeg
            fortsatt å forenkle det fiskeren møter på mobilen.
          </p>
          <p className="report-meta">
            Marie Hesseberg · Dokumenterte endringer til og med 15. oktober
          </p>
        </section>
        <div className="report-body">
          <section className="report-section">
            <p className="eyebrow">01 · Arbeidsoppgaver siden sist</p>
            <h2>En mer konkret og sammenhengende prototype.</h2>
            <p>
              I Status 1 var hovedoppgaven å få fiskerens reise til å henge
              sammen. I denne perioden har jeg arbeidet videre med detaljene som
              avgjør om løsningen faktisk er lett å bruke: valg av fiskedager,
              tydelig bestilling, riktige vilkår, forståelige feilmeldinger og
              en hjemskjerm som hjelper brukeren videre.
            </p>
            <h3>Fiskekort og bestilling</h3>
            <p>
              Jeg bygget om kjøpet fra en lang kortliste til valg av hovedsone,
              delsone og fiskedager i en kalender. Dagskort og sesongkort fikk
              egne, tydelige valg. Når flere dager bestilles, skal oversikten
              vise alle datoene, antall kort og totalbeløpet samlet. Vilkår kan
              åpnes direkte på kortet, uten unødvendige sideskifter.
            </p>
            <p>
              Jeg har også kontrollert produktopplysninger mot Inatur og
              arbeidet med områdebilder, fasiliteter og lokale begrensninger.
              Dette har vist hvor viktig det er å skille mellom bekreftede
              opplysninger og forhold som fortsatt må avklares. Ukjente priser
              eller salgsgrenser skal ikke presenteres som sikre fakta.
            </p>
            <h3>Profil, dokumenter og fiskestart</h3>
            <p>
              Prototypen har fått profilregistrering etter introduksjonen og en
              ryddigere Mer-meny. Jeg har forbedret dokumentflytene med
              tydeligere validering og forklaring av bilder ved desinfisering.
              Hjem viser nå «Start fiske» når ingen tur pågår. Hvis noe mangler,
              får brukeren konkrete veier videre til fiskekort, desinfisering
              eller fiskeravgift.
            </p>
            <p>
              Jeg har også gjort liten tekst mer leselig, gitt knappene bedre
              avstand og gjort nullfangst tydelig i avslutningen av turen.
              Skjermene er kontrollert i flere mobilstørrelser og på norsk og
              engelsk.
            </p>
          </section>
          <section className="report-section">
            <p className="eyebrow">02 · Flere roller</p>
            <h2>Arbeidet rundt fisket er også en del av løsningen.</h2>
            <p>
              En spennende utvidelse har vært å undersøke og bygge lokale
              testflyter for dem som forvalter fisket. Jeg begynte med research
              om ansvar, arbeidsområder og tilganger, før jeg delte
              gjennomføringen i mindre steg.
            </p>
            <ul className="report-list">
              <li>
                <strong>Grunneier og salgsansvarlig:</strong> egne kort, priser
                og salgsgrenser, samt gjestetilgang innenfor avtalte
                rettigheter.
              </li>
              <li>
                <strong>Oppsyn:</strong> kontroll av dokumentasjon og adgang
                knyttet til samme testperson og datagrunnlag.
              </li>
              <li>
                <strong>Desinfektør:</strong> registrering av behandling og
                utstedelse av bevis innenfor et tildelt oppdrag.
              </li>
              <li>
                <strong>Administrator:</strong> godkjenning av arbeidsroller og
                avgrensede tilganger.
              </li>
            </ul>
            <p>
              Den første rolletesten ble for teknisk og uoversiktlig. Jeg endret
              derfor retning: brukeren velger en rolle og møter relevante
              handlinger i selve appen. Grunneierens salgsarbeid ligger ved
              fiskekortene, mens oppsyn får kontrollen på hjem. Dette er en del
              av prototypen, der ulike roller kan prøves med fiktive personer.
            </p>
          </section>
          <section className="report-section">
            <p className="eyebrow">03 · Skjermbilder og endringer</p>
            <h2>Hva er annerledes siden Status 1?</h2>
            <p>
              Bildet fra 18. september viser utgangspunktet. De nye opptakene
              viser den publiserte prototypen i oktober, med oppdiktede
              testopplysninger.
            </p>
            <div className="report-gallery">
              <Screenshot
                file="september-shop.png"
                title="Status 1 · kortbutikken 18. september"
              >
                Sone, dato og kortprodukter var samlet i en enkel liste. Videre
                arbeid tok utgangspunkt i å gjøre valg og kjøp lettere.
              </Screenshot>
              <Screenshot
                file="october-permits.png"
                title="Status 2 · fiskekort og datoer"
              >
                Kjøpet er organisert rundt område og korttype, med valg av
                fiskedager og tydeligere bestilling.
              </Screenshot>
            </div>
            <div className="report-gallery">
              <Screenshot
                file="october-home.png"
                title="Status 2 · en tydelig start på hjem"
              >
                Hovedhandlingen er å starte fiske. Manglende krav forklares når
                brukeren trenger dem.
              </Screenshot>
              <Screenshot
                file="october-roles.png"
                title="Status 2 · velg rolle"
              >
                Rollene gjør det mulig å prøve flere perspektiver på arbeidet
                rundt elva i samme prototype.
              </Screenshot>
            </div>
          </section>
          <section className="report-section">
            <p className="eyebrow">04 · Utfordringer og læring</p>
            <h2>Flere funksjoner må fortsatt oppleves enkelt.</h2>
            <h3>Samme informasjon på tvers av skjermene</h3>
            <p>
              En konkret feil var at dokumentstatus på hjem kunne følge sist
              valgte sone, mens fiskekortet som ble vist gjaldt en annen sone.
              Da kunne startknappen forsvinne selv om brukeren hadde et gyldig
              kort. Jeg rettet sammenhengen mellom kort, sone og oppstart og
              testet også flere turer etter hverandre, utløpte kort og manglende
              dokumentasjon.
            </p>
            <h3>Rett rolle og riktig avgrensning</h3>
            <p>
              Det er ikke nok å gi noen navnet «grunneier» eller «oppsyn».
              Tilgangen må også gjelde riktig område, oppgave og tidsrom, og den
              må kunne trekkes tilbake. Jeg har derfor måttet arbeide både med
              hva brukeren ser og med kontrollene bak handlingene.
            </p>
            <h3>Å forenkle etter at noe er bygget</h3>
            <p>
              Rollemenyene viste at en teknisk fungerende løsning likevel kan
              være vanskelig å forstå. Jeg har lært å gå tilbake og endre
              presentasjonen når den gir for mange valg eller forklaringer. Det
              mest spennende har vært å se hvordan én samlet informasjonsflyt
              kan støtte både fiskeren og dem som utfører oppgaver rundt elva.
            </p>
          </section>
          <section className="report-section">
            <p className="eyebrow">05 · Annet og veien videre</p>
            <h2>Teste og forbedre prototypen.</h2>
            <p>
              Jeg har fortsatt å dokumentere endringer og bruke automatiske
              tester for å kontrollere hele flyter. Arbeidet har beveget seg fra
              hovedsakelig skjermdesign til mer sammenheng mellom personer,
              rettigheter, dokumenter og rapporter.
            </p>
            <p>
              Neste steg er flere brukertester med fiskere og relevante roller,
              avklaring av lokale rutiner med oppdragsgiver og videre forbedring
              av prototypens innhold og brukerflyter. Jeg vil også undersøke
              hvordan den oppleves på fysiske telefoner og ute ved elva.
            </p>
            <p>
              Målet er at rapportering og oppfølging skal bli enklere for både
              fiskeren og Mandalselva Elveeigarlag. Prototypen gjør det mulig å
              prøve arbeidsflyten og finne ut hvilke løsninger som er lette å
              forstå og bruke.
            </p>
          </section>
          <div className="report-next">
            <Link href="/status-1/">← Status 1</Link>
            <Link className="primary-button" href="/">
              Til forsiden →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
