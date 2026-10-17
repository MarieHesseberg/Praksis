import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SiteHeader,
  SiteFooter,
  Screenshot,
} from '../../components/site-shell';

export const metadata: Metadata = {
  title: 'Status 1 · Fra idé til prototype · EasyFisk',
};

export default function StatusOne() {
  return (
    <>
      <SiteHeader active="status-1" />
      <main id="main-content">
        <section className="report-hero">
          <p className="eyebrow">Status 1 · 19. august–22. september 2026</p>
          <h1>Fra idé til en sammenhengende fiskereise.</h1>
          <p className="lead">
            I den første delen av praksisen har jeg arbeidet med å gjøre
            behovene i Mandalselva om til en testbar mobilprototype. Målet har
            vært å samle det fiskeren trenger før, under og etter turen i
            EasyFisk.
          </p>
          <p className="report-meta">
            Marie Hesseberg · Mandalselva Elveeigarlag
          </p>
        </section>
        <div className="report-body">
          <section className="report-section">
            <p className="eyebrow">01 · Arbeidsoppgaver</p>
            <h2>Fra behov og brukerflyt til kode.</h2>
            <p>
              Jeg designer og utvikler EasyFisk alene, med faglige innspill og
              tilbakemeldinger fra Mandalselva Elveeigarlag. Arbeidet har
              omfattet å forstå hvilke oppgaver fiskeren må gjennom, strukturere
              informasjonen og lage skjermbilder og funksjoner som henger
              sammen.
            </p>
            <p>
              Den første prototypen samlet fiskestart, fangst, regler og
              statistikk. Jeg bygget videre med registrering av fiskekort,
              desinfisering og fiskeravgift, slik at hjemskjermen kunne vise hva
              som var på plass og hva som manglet. Historikk og personlig
              statistikk ble koblet til turene og fangstene som faktisk ble
              registrert lokalt i prototypen.
            </p>
            <p>
              I slutten av august og begynnelsen av september laget jeg en
              fiskekortbutikk med simulert betaling og et interaktivt sonekart.
              Jeg skilte mellom å utforske kartet og å ha rett til å starte
              fiske i en bestemt sone. Jeg la også til engelsk, slik at
              løsningen kan prøves av tilreisende fiskere.
            </p>
            <p>
              Parallelt ryddet jeg i koden og arbeidet med testing,
              feilmeldinger og lagring. Det var viktig at prototypen ikke bare
              så ferdig ut, men også beholdt opplysninger og ga riktig beskjed
              når noe ikke kunne lagres.
            </p>
          </section>
          <section className="report-section">
            <p className="eyebrow">02 · Designutvikling</p>
            <h2>Fra mange bokser til tydeligere handlinger.</h2>
            <p>
              Den første dokumenterte versjonen hadde mørkegrønne knapper og
              kremfarget bakgrunn. I august valgte jeg en blå identitet. Etter
              hvert viste tilbakemeldinger at appen ga for mye informasjon på én
              gang. Jeg forenklet derfor hjemskjermen, fiskestart, kjøp og
              fangstrapportering.
            </p>
            <p>
              I september utforsket jeg flere designretninger. Jeg valgte
              billettformede fiskekort, elveillustrasjoner, en ny logo og
              roligere rader for dokumenter og andre handlinger. Det nye
              uttrykket ble tatt inn i appen 19. september. Skjermbildene
              nedenfor viser den faktiske utviklingen, ikke nye illustrasjoner
              laget i ettertid.
            </p>
            <div className="report-gallery three">
              <Screenshot
                file="august-home.png"
                title="27. august · den tidlige forsiden"
              >
                Arkivbilde fra den publiserte versjonen: blå identitet,
                teksttung status og flere informasjonsbokser.
              </Screenshot>
              <Screenshot
                file="september-before-home.png"
                title="18. september · før omleggingen"
              >
                Skjermbilde fra designgjennomgangen. Informasjonen var samlet,
                men hjem trengte tydeligere prioritering.
              </Screenshot>
              <Screenshot
                file="home.png"
                title="September · den nye designretningen"
              >
                Skjermbildet fra den opprinnelige praksissiden viser
                illustrasjon, roligere rader og tydeligere hovedhandling.
              </Screenshot>
            </div>
            <div className="report-gallery">
              <Screenshot
                file="august-map.png"
                title="August · det tidlige kartet"
              >
                Den første visuelle kartløsningen, bevart i prosjektets
                referansebilder.
              </Screenshot>
              <Screenshot
                file="map.png"
                title="September · interaktivt sonekart"
              >
                Kartet fikk geografisk bakgrunn og sonevalg. Utforsking og
                kontroll av fiskerett ble skilt fra hverandre.
              </Screenshot>
            </div>
          </section>
          <section className="report-section">
            <p className="eyebrow">03 · Utfordringer og læring</p>
            <h2>En enkel skjerm krever mange valg.</h2>
            <h3>Å holde regler og status sammen</h3>
            <p>
              Fiskekort, dokumentasjon, sone og fangst må gi en sammenhengende
              status. En utfordring var at hjem kunne vise at alt var klart selv
              om dokumentasjon manglet. Jeg måtte skille testsituasjoner fra
              brukerens egne registreringer og sørge for at visningene brukte
              samme grunnlag.
            </p>
            <h3>Å få flytene til å fungere på mobil</h3>
            <p>
              På iPhone oppdaget jeg at deler av fangstskjemaet kunne havne bak
              bunnmenyen. Jeg rettet plassering og rulling slik at knapper og
              felter var tilgjengelige. Store bilder viste også hvorfor vedlegg
              måtte håndteres annerledes enn små tekstopplysninger i
              nettleserlagringen.
            </p>
            <h3>Å prioritere og se egne svakheter</h3>
            <p>
              Det er lett å legge til flere funksjoner, men vanskeligere å velge
              hva som skal være synlig akkurat nå. Når jeg arbeider alene,
              trenger jeg tilbakemeldinger for å oppdage det som virker
              selvfølgelig for meg, men er uklart for andre. Arbeidet har gjort
              meg mer bevisst på å teste hele oppgaver, ikke bare enkelte
              skjermer.
            </p>
          </section>
          <section className="report-section">
            <p className="eyebrow">04 · Status og veien videre</p>
            <h2>Et grunnlag som andre kan prøve.</h2>
            <p>
              Ved slutten av denne perioden kunne prototypen prøves gjennom hele
              reisen: forberedelser, fiskekort, kart, fiskestart, fangst og
              historikk. Jeg laget en introduksjon for testere og tilpasset
              PC-visningen. Prosjektloggen dokumenterte 198 enhetstester og 106
              nettlesertester på dette tidspunktet.
            </p>
            <p>
              Neste steg var å hente inn flere tilbakemeldinger, gjøre kjøpet
              enklere og undersøke behovene til flere enn fiskeren. Løsningen
              var fortsatt en lokal prototype: ekte innlogging, betaling, felles
              lagring og innsending av rapporter gjenstod.
            </p>
            <a className="primary-button" href="https://easyfisk.pages.dev/">
              Prøv dagens prototype ↗
            </a>
            <p className="small-note">
              Lenken åpner den nyeste versjonen. Bildene på denne siden
              dokumenterer den tidligere perioden.
            </p>
          </section>
          <aside className="source-note">
            <strong>Om dokumentasjonen</strong>
            <p>
              Status 1 er bearbeidet i ettertid fra den opprinnelige
              praksissiden og{' '}
              <a href="https://github.com/MarieHesseberg/EasyFisk/blob/main/PROSJEKTLOGG.md">
                prosjektloggen
              </a>
              . Augustbildene er fra{' '}
              <a href="https://github.com/MarieHesseberg/EasyFisk/blob/main/visual-baseline/README.md">
                referansen 27. august
              </a>
              ; bildet fra 18. september er fra prosjektets designgjennomgang.
            </p>
          </aside>
          <div className="report-next">
            <Link href="/">← Til forsiden</Link>
            <Link className="primary-button" href="/status-2/">
              Videre til Status 2 →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
