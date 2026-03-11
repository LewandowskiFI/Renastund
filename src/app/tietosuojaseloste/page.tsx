import styles from './page.module.css';

export const metadata = {
  title: 'Tietosuojaseloste | Renastund',
  description: 'Renastund Oy:n EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Tietosuojaseloste</h1>
          <p className={styles.subtitle}>
            Renastund Oy:n EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 22.1.2026. Viimeisin muutos 11.3.2026.
          </p>
        </div>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>1. Rekisterinpitäjä</h2>
          <p className={styles.paragraph}>
            Renastund Oy (3602312-4)<br />
            Tellervonkatu 1 B 27, 40100, Jyväskylä
          </p>

          <h2 className={styles.sectionTitle}>2. Rekisteristä vastaava yhteyshenkilö</h2>
          <p className={styles.paragraph}>
            Eliel Seppänen<br />
            <a href="mailto:eliel.seppanen@renastund.fi" className={styles.contactLink}>eliel.seppanen@renastund.fi</a><br />
            +358 44 976 3323
          </p>

          <h2 className={styles.sectionTitle}>3. Rekisterin nimi</h2>
          <p className={styles.paragraph}>Yrityksen asiakasrekisteri</p>

          <h2 className={styles.sectionTitle}>4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h2>
          <p className={styles.paragraph}>
            EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on henkilön suostumus.
          </p>
          <p className={styles.paragraph}>
            Henkilötietojen käsittelyn tarkoitus on yhteydenpito asiakkaisiin, asiakassuhteen ylläpito, markkinointi, palvelun tarjoaminen.
          </p>
          <p className={styles.paragraph}>
            Tietoja ei käytetä automatisoituun päätöksentekoon.
          </p>

          <h2 className={styles.sectionTitle}>5. Rekisterin tietosisältö</h2>
          <p className={styles.paragraph}>
            Rekisteriin tallennettavia tietoja ovat: henkilön nimi, yrityksen/organisaation nimi sekä y-tunnus, yhteystiedot (puhelinnumero, sähköpostiosoite, osoite), tiedot tilatuista palveluista ja niiden muutokset, laskutustiedot, muut asiakassuhteeseen ja tilattuihin palveluihin liittyvät tiedot.
          </p>
          <p className={styles.paragraph}>
            Tietoja säilytetään niin kauan, kuin asiakassuhde kestää.
          </p>
          <p className={styles.paragraph}>
            Verkkosivuston vierailijoiden IP-osoitteita ja palvelun toiminnoille välttämättömiä evästeitä käsitellään oikeutetun edun perusteella mm. tietoturvasta huolehtimiseksi ja sivuston vierailijoiden tilastotietojen keruuta varten niissä tapauksissa, kun niiden voidaan katsoa olevan henkilötietoja.
          </p>

          <h2 className={styles.sectionTitle}>6. Säännönmukaiset tietolähteet</h2>
          <p className={styles.paragraph}>
            Rekisteriin tallennettavat tiedot saadaan asiakkaalta mm. www-lomakkeilla lähetetyistä viesteistä, sähköpostitse, puhelimitse, sosiaalisen median palvelujen kautta, sopimuksista, asiakastapaamisista ja muista tilanteista, joissa asiakas luovuttaa tietojaan.
          </p>
          <p className={styles.paragraph}>
            Yritysten ja muiden organisaatioiden yhteyshenkilöiden tietoja voidaan kerätä myös julkisista lähteistä kuten verkkosivuilta, hakemistopalveluista ja muilta yrityksiltä.
          </p>

          <h2 className={styles.sectionTitle}>7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
          <p className={styles.paragraph}>
            Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on asiakkaan kanssa sovittu.
          </p>
          <p className={styles.paragraph}>
            Tietoja voidaan siirtää rekisterinpitäjän toimesta myös EU:n tai ETA:n ulkopuolelle.
          </p>
          <p className={styles.paragraph}>
            Henkilötietoja (nimi, osoite, puhelinnumero, sähköpostiosoite) luovutetaan tarvittaessa yhteistyöorganisaatioille, mikäli se on välttämätöntä palvelun kannalta.
          </p>

          <h2 className={styles.sectionTitle}>8. Rekisterin suojauksen periaatteet</h2>
          <p className={styles.paragraph}>
            Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden työntekijöiden toimesta, joiden työnkuvaan se kuuluu.
          </p>

          <h2 className={styles.sectionTitle}>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
          <p className={styles.paragraph}>
            Jokaisella rekisterissä olevalla henkilöllä/yrityksellä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
          </p>

          <h2 className={styles.sectionTitle}>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h2>
          <p className={styles.paragraph}>
            Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä (&quot;oikeus tulla unohdetuksi&quot;). Niin ikään rekisteröidyllä on muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää kirjallisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
          </p>
        </div>
      </div>
    </main>
  );
}
