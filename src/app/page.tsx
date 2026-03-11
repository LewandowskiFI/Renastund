"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import styles from './page.module.css';
import { Mail, Phone, MapPin, CheckCircle2, Recycle, Truck, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [contactResult, setContactResult] = useState('');
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  const onContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsContactSubmitting(true);
    setContactResult('');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '0c4d3fe7-09ab-4106-9a31-4fb153a79950');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    setIsContactSubmitting(false);

    if (data.success) {
      setContactResult('success');
      (event.target as HTMLFormElement).reset();
    } else {
      setContactResult('error');
    }
  };
  return (
    <main className={styles.main}>
      {/* Target Web3Forms Access Key */}
      {/* The user will provide the access key via environment variables later */}
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackgroundImage}>
          <Image 
            src="/hero-bg-h.jpg" 
            alt="Renastund Clean Background" 
            fill 
            className={styles.heroImage}
            priority 
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Puhtaampi jälki, <span className={styles.textGradient}>pienempi kuorma</span></h1>
          <p className={styles.heroSubtitle}>
            Yhdistämme kestävyyden, edullisuuden ja helppouden - jotta yrityksesi voi keskittyä olennaiseen.
          </p>
          <div className={styles.heroActions}>
            <a href="#tilaa" className={`${styles.btn} ${styles.btnPrimary}`}>
              Tilaa palvelu
            </a>
            <a href="#yhteys" className={`${styles.btn} ${styles.btnOutline}`}>
              Ota yhteyttä
            </a>
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="tilaa" className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tuotteet</h2>
            <p className={styles.sectionSubtitle}>
              Valitse yrityksellesi sopivin paketti. Jokaiseen tuotteeseen lisätään 25,5 % arvonlisävero.
            </p>
          </div>
          <div className={styles.productsGrid}>
            {[
              { size: 'S', price: '79', amount: '50' },
              { size: 'M', price: '119', amount: '100' },
              { size: 'L', price: '149', amount: '150' },
              { size: 'XL', price: '179', amount: '200' },
            ].map((pkg, index) => (
              <Tilt key={pkg.size} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000} style={{ display: 'flex' }}>
                <motion.div 
                  className={styles.productCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  style={{ width: '100%' }}
                >
                  <h3 className={styles.productName}>Liinapaketti ({pkg.size})</h3>
                  <div className={styles.productPrice}>
                    {pkg.price}€<span>/kk</span>
                  </div>
                  <p className={styles.productDesc}>
                    {pkg.size} paketti sisältää <strong>{pkg.amount}</strong> siivousliinaa 2 viikon vaihtovälillä.
                  </p>
                  <a href="/tilaa-tasta" className={`${styles.btn} ${styles.btnOutline}`}>Tilaa tästä</a>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Miten pakettimme toimii?</h2>
            <p className={styles.sectionSubtitle}>Vaivaton ratkaisu yrityksesi siivoustarpeisiin.</p>
          </div>
          <div className={styles.stepsGrid}>
            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className={styles.stepIcon}><Truck /></div>
              <h3 className={styles.stepTitle}>Toimitus ennakkoon</h3>
              <p className={styles.stepDesc}>
                Tuomme teille siivousliinat ja tarvikkeet, kuten kuivausritilällä varustetun pyykkiroskiksen, tilausta edeltävänä päivänä.
              </p>
            </motion.div>
            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.stepIcon}><CalendarCheck /></div>
              <h3 className={styles.stepTitle}>2 viikon kierto</h3>
              <p className={styles.stepDesc}>
                Yhtä liinaa käytetään päivän ajan. Laske liinojen tarve työntekijöiden määrällä ja suosittelemme 10-20 ylimääräistä liinaa varmuuden vuoksi.
              </p>
            </motion.div>
            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.stepIcon}><Recycle /></div>
              <h3 className={styles.stepTitle}>Pesu ja vaihto</h3>
              <p className={styles.stepDesc}>
                Kahden viikon jälkeen tuomme puhtaat liinat ja viemme likaiset pestäväksi. Pesemme liinat 95 asteessa desinfioivalla pesuaineella.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Material Info */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.infoContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.sectionTitle}>Mitä puhdistusliinaa käytämme?</h2>
            <p className={styles.sectionSubtitle}>
              Käytämme laadukasta MAX Eco Mikrokuituliinaa, jota voidaan käyttää kuivana, kosteana sekä pesuaineen kanssa tai ilman.
            </p>
            <ul className={styles.infoList}>
              <li><CheckCircle2 className={styles.infoListIcon} size={20} /> Mitat: 32 x 32 cm (Sininen)</li>
              <li><CheckCircle2 className={styles.infoListIcon} size={20} /> 80% polyesteri, 20% polyamidi</li>
              <li><CheckCircle2 className={styles.infoListIcon} size={20} /> Joutsenmerkitty tuote</li>
              <li><ShieldCheck className={styles.infoListIcon} size={20} /> 95°C desinfioiva pesu</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="yhteys" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Ota yhteyttä</h2>
              <p>
                Jos et löytänyt sopivaa pakettia sinulle, ota yhteyttä niin toteutamme sinulle räätälöidyn paketin juuri sinun tarpeeseen.
              </p>
              
              <div className={styles.teamGrid}>
                <div className={styles.teamMember}>
                  <h4>Eliel Seppänen</h4>
                  <span>Jyväskylä</span>
                  <span>044 976 3323</span>
                  <a href="mailto:eliel.seppanen@renastund.fi">eliel.seppanen@renastund.fi</a>
                </div>
                <div className={styles.teamMember}>
                  <h4>Eelis Seppänen</h4>
                  <span>Tampere</span>
                  <span>044 976 3290</span>
                  <a href="mailto:eelis.seppanen@renastund.fi">eelis.seppanen@renastund.fi</a>
                </div>
                <div className={styles.teamMember}>
                  <h4>Ellenoora Koponen</h4>
                  <span>Jyväskylä</span>
                  <span>040 724 4488</span>
                  <a href="mailto:ellenoora.koponen@renastund.fi">ellenoora.koponen@renastund.fi</a>
                </div>
              </div>
            </div>

            <div className={styles.contactFormWrapper}>
              <form onSubmit={onContactSubmit}>
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.formLabel}>Nimi</label>
                  <input type="text" id="contact-name" name="name" className={styles.formInput} required placeholder="Matti Meikäläinen" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.formLabel}>Sähköposti</label>
                  <input type="email" id="contact-email" name="email" className={styles.formInput} required placeholder="matti@yritys.fi" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message" className={styles.formLabel}>Viesti</label>
                  <textarea id="contact-message" name="message" className={styles.formTextarea} required placeholder="Hei, haluaisin..."></textarea>
                </div>
                
                <button type="submit" disabled={isContactSubmitting} className={`btn btn-primary ${styles.formSubmit}`}>
                  {isContactSubmitting ? 'Lähetetään...' : 'Lähetä viesti'}
                </button>

                {contactResult === 'success' && (
                  <p className={styles.contactSuccess}>✅ Viesti lähetetty! Palaamme sinulle pian.</p>
                )}
                {contactResult === 'error' && (
                  <p className={styles.contactError}>❌ Jokin meni pieleen. Yritä uudelleen.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Renastund. Kaikki oikeudet pidätetään.</p>
          <div className={styles.footerLinks}>
            <a href="/tietosuojaseloste">Tietosuojaseloste</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
