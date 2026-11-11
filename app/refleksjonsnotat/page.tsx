import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter, Screenshot, asset } from '../../components/site-shell';
import styles from './reflection.module.css';

export const metadata: Metadata = {
  title: 'Avsluttende refleksjonsnotat · EasyFisk',
};

export default function Refleksjonsnotat() {
  return (
    <>
      <SiteHeader active="refleksjonsnotat" />
      <main id="main-content">
        <header className={styles.hero}>
          <div>
            <p className="eyebrow">EasyFisk · Praksis</p>
            <h1>Avsluttende refleksjonsnotat</h1>
            <p>Marie Hesseberg · <time dateTime="2026-11-11">11. november 2026</time></p>
          </div>
          <Image unoptimized priority width={1600} height={1200} src={asset('praksisfoto.webp')} alt="To personer sitter på steinene foran en gapahuk i skogen." />
        </header>
        <div className="report-body">
          <article className={styles.prose} aria-label="Refleksjonsnotat">
            <p>Da jeg begynte på EasyFisk i sommer, var det fortsatt en stund til semesterstart. Jeg var bare så nysgjerrig på hvordan appen kunne bli at jeg hadde lyst til å komme i gang. Nå har jeg en prototype med flere funksjoner som gjør det enklere å planlegge fisketuren, finne frem og registrere opplevelsen underveis. Jeg er stolt av hvor langt jeg kom, og jeg håper de jeg har jobbet med i Mandalselva Elveeigarlag, er fornøyde med resultatet.</p>
            <p>Noe av det lureste jeg gjorde underveis, var å la andre prøve appen. Jeg hadde for eksempel brukt mye tid på å få med all informasjonen jeg tenkte en fisker kunne trenge. Da fikk jeg tilbakemelding om at det ble litt mye å ta inn på én gang. Selv visste jeg jo akkurat hvor jeg skulle trykke. Det gjorde det lettere å overse hvor mange valg jeg ba en ny bruker om å ta. Å la folk teste appen gjennom hele utviklingen hjalp meg med å unngå å bruke mye tid på feil ting.</p>
            <p>I starten syntes jeg det var ganske lett å lage en app, siden jeg kunne få gjort mye ved å &quot;vibekode&quot; med KI. Men jo større appen ble, jo vanskeligere ble det å holde styr på alle funksjonene og huske hvordan hver av dem egentlig skulle fungere. Etter hvert kunne det ta flere timer bare å teste alt og lete etter feil. Jeg merket også at jeg fikk mindre hjelp av KI i den delen av arbeidet. Selv når jeg ba den gå grundig gjennom appen, fant jeg fortsatt mange feil når jeg testet selv. Noen ganger virket det som om den også så seg litt blind på sin egen kode. Jeg vet ikke om jeg kan gjore så mye annerledes neste gang, men jeg tror det ville hjulpet bare å være forberedt på hvor mye vanskeligere det blir å ha oversikt etter hvert. Da hadde jeg kanskje sluppet å bli så frustrert når ting som gikk fort i starten, plutselig tok mye lengre tid.</p>
            <p>Det jeg helst ville gjort annerledes, er å sette noen grenser for min egen arbeidstid. I mange uker jobbet jeg med EasyFisk hver dag. Noen ganger var det bare en liten ting jeg hadde lyst til å fikse, men da hadde jeg likevel brukt litt av fridagen på prosjektet. Etter hvert merket jeg at jeg ble sliten, og at det satt lenger inne å åpne appen igjen. Jeg trivdes godt med prosjektet, men tempoet jeg hadde lagt opp til i starten, var vanskelig å holde gjennom et helt semester. Skulle jeg gjort det om igjen, ville jeg prøvd én fast arbeidsdag i uka, eller noen kortere økter fordelt på et par dager, og latt helgene være fri. Jeg tror det hadde gitt meg jevnere framdrift. Litt avstand gjør det også lettere å komme tilbake og legge merke til ting jeg har sett meg blind på.</p>
            <p>Jeg er veldig glad for at jeg fikk denne muligheten. Det har vært spennende å jobbe med noe som kan få betydning for en elv og for folk som fisker der. Jeg håper Mandalselva Elveeigarlag kan bygge videre på EasyFisk og gjøre det enklere både for dem og for fiskerne. Hvis flere registrerer hvor lenge de har fisket og hva de har fått, kan laget få bedre statistikk og et bedre grunnlag for å ta vare på laksebestanden over tid. Det syns jeg det er kult å være en del av.</p>
          </article>
          <section className={styles.history} aria-labelledby="utvikling">
            <h2 id="utvikling">Hjemskjermen fra august til november</h2>
            <div className={styles.gallery}>
              <Screenshot file="august-home.png" title="27. august 2026">Den tidlige prototypen.</Screenshot>
              <Screenshot file="september-before-home.png" title="18. september 2026">Hjemskjermen før designet ble lagt om.</Screenshot>
              <Screenshot file="october-home.png" title="17. oktober 2026">Fiskestart og forberedelser samlet på forsiden.</Screenshot>
              <Screenshot file="hjem-2026-11-11-9401513d.png" title="11. november 2026">Egne fiskeøkter har fått plass på hjemskjermen.</Screenshot>
            </div>
          </section>
          <div className="report-next">
            <Link href="/status-2/">← Status 2</Link>
            <Link className="primary-button" href="/#logg">Til prosjektloggen →</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
