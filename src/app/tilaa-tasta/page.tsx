"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Mail, Building2, PackageCheck, CalendarDays } from 'lucide-react';

export default function OrderPage() {
  const [billingMethod, setBillingMethod] = useState('');
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '0c4d3fe7-09ab-4106-9a31-4fb153a79950');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.success) {
      setResult('success');
      (event.target as HTMLFormElement).reset();
      setBillingMethod('');
    } else {
      setResult('error');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.heroBackgroundImage}>
        <Image
          src="/hero-bg-v.jpg"
          alt="Renastund Clean Background"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay}></div>
      </div>

      <section className={styles.orderSection}>
        <div className={styles.container}>

          <div className={styles.header}>
            <h1 className={styles.title}>Tilaa tästä</h1>
            <p className={styles.subtitle}>
              Valitse yrityksellesi sopivin liinapaketti. Täytä tietosi alle, niin olemme sinuun yhteydessä toimituksen järjestämiseksi.
            </p>
          </div>

          <div className={styles.grid}>
            {/* Contact Information Cards */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><PackageCheck size={24} /></div>
                <div>
                  <h3>Miten tilaus etenee?</h3>
                  <p>Tilauksen jälkeen otamme yhteyttä sopiaksemme toimituksen yksityiskohdista. Tuomme liinat ja pyykkiastiat tilausta edeltävänä päivänä.</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><Building2 size={24} /></div>
                <div>
                  <h3>Yritys ja laskutus</h3>
                  <p>Palvelumme on suunniteltu erityisesti yrityksille. Hinnat ilmoitetaan alv 0%.</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}><CalendarDays size={24} /></div>
                <div>
                  <h3>Aloituspäivämäärä</h3>
                  <p>Valitse kalenterista toivottu aloituspäivämäärä ja aloitamme palvelun sinulle sopivana ajankohtana.</p>
                </div>
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail size={20} />
                  <div>
                    <span className={styles.contactLabel}>Sähköposti</span>
                    <a href="mailto:info@renastund.fi">eliel.seppanen@renastund.fi</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className={styles.formCol}>
              <form onSubmit={onSubmit} className={styles.formWrapper}>
                <input type="hidden" name="subject" value="Uusi Tilaus: Renastund Verkkosivut" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                {/* ─── Yhteyshenkilö ─── */}
                <h3 className={styles.formSectionTitle}>Yhteyshenkilö</h3>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.formLabel}>Etunimi *</label>
                    <input type="text" id="firstName" name="Etunimi" className={styles.formInput} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.formLabel}>Sukunimi *</label>
                    <input type="text" id="lastName" name="Sukunimi" className={styles.formInput} required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>Yrityksen nimi *</label>
                  <input type="text" id="company" name="Yrityksen Nimi" className={styles.formInput} required />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="businessId" className={styles.formLabel}>Y-tunnus</label>
                  <input type="text" id="businessId" name="Y-tunnus" className={styles.formInput} />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Sähköposti *</label>
                    <input type="email" id="email" name="Sähköposti" className={styles.formInput} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Puhelinnumero *</label>
                    <input type="tel" id="phone" name="Puhelinnumero" className={styles.formInput} required />
                  </div>
                </div>

                {/* ─── Paketti & aloitus ─── */}
                <div className={styles.formDivider}></div>
                <h3 className={styles.formSectionTitle}>Paketti ja aloitus</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="package" className={styles.formLabel}>Valitse paketti *</label>
                  <select id="package" name="Valittu Paketti" className={styles.formSelect} required defaultValue="">
                    <option value="" disabled>-- Valitse liinapaketti --</option>
                    <option value="S">Liinapaketti S (50 liinaa) - 79€/kk</option>
                    <option value="M">Liinapaketti M (100 liinaa) - 119€/kk</option>
                    <option value="L">Liinapaketti L (150 liinaa) - 149€/kk</option>
                    <option value="XL">Liinapaketti XL (200 liinaa) - 179€/kk</option>
                    <option value="Muokattu">Räätälöity paketti - Ota yhteyttä</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="startDate" className={styles.formLabel}>Toivottu aloituspäivämäärä *</label>
                  <input type="date" id="startDate" name="Aloituspäivämäärä" className={styles.formInput} required />
                </div>

                {/* ─── Toimitusosoite ─── */}
                <div className={styles.formDivider}></div>
                <h3 className={styles.formSectionTitle}>Toimitusosoite</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="deliveryAddress" className={styles.formLabel}>Katuosoite *</label>
                  <input type="text" id="deliveryAddress" name="Toimitusosoite" className={styles.formInput} required />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="deliveryZip" className={styles.formLabel}>Postinumero *</label>
                    <input type="text" id="deliveryZip" name="Toimituksen Postinumero" className={styles.formInput} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="deliveryCity" className={styles.formLabel}>Postitoimipaikka *</label>
                    <input type="text" id="deliveryCity" name="Toimituksen Postitoimipaikka" className={styles.formInput} required />
                  </div>
                </div>

                {/* ─── Laskutusosoite ─── */}
                <div className={styles.formDivider}></div>
                <h3 className={styles.formSectionTitle}>Laskutusosoite</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="billingAddress" className={styles.formLabel}>Katuosoite</label>
                  <input type="text" id="billingAddress" name="Laskutusosoite" className={styles.formInput} placeholder="Jos eri kuin toimitusosoite" />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="billingZip" className={styles.formLabel}>Postinumero</label>
                    <input type="text" id="billingZip" name="Laskutuksen Postinumero" className={styles.formInput} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="billingCity" className={styles.formLabel}>Postitoimipaikka</label>
                    <input type="text" id="billingCity" name="Laskutuksen Postitoimipaikka" className={styles.formInput} />
                  </div>
                </div>

                {/* ─── Laskutustapa ─── */}
                <div className={styles.formDivider}></div>
                <h3 className={styles.formSectionTitle}>Laskutustapa</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="billingMethod" className={styles.formLabel}>Valitse laskutustapa *</label>
                  <select
                    id="billingMethod"
                    name="Laskutustapa"
                    className={styles.formSelect}
                    required
                    defaultValue=""
                    onChange={(e) => setBillingMethod(e.target.value)}
                  >
                    <option value="" disabled>-- Valitse laskutustapa --</option>
                    <option value="E-lasku">E-lasku (verkkolasku)</option>
                    <option value="Paperilasku">Paperilasku (+ 4€ laskutuslisä)</option>
                  </select>
                </div>

                {billingMethod === 'E-lasku' && (
                  <div className={styles.conditionalFields}>
                    <div className={styles.formGroup}>
                      <label htmlFor="ovt" className={styles.formLabel}>OVT-tunnus *</label>
                      <input type="text" id="ovt" name="OVT-tunnus" className={styles.formInput} required placeholder="esim. 003712345678" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="einvoiceAddress" className={styles.formLabel}>Verkkolaskuosoite *</label>
                      <input type="text" id="einvoiceAddress" name="Verkkolaskuosoite" className={styles.formInput} required placeholder="esim. BAWCFI22" />
                    </div>
                  </div>
                )}

                {billingMethod === 'Paperilasku' && (
                  <div className={styles.billingNote}>
                    <p>📄 Paperilaskuun lisätään 4€ laskutuslisä per lasku.</p>
                  </div>
                )}

                {/* ─── Lisätiedot ─── */}
                <div className={styles.formDivider}></div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Lisätiedot</label>
                  <textarea id="message" name="Lisätiedot" className={styles.formTextarea} placeholder="Onko toimitukseen liittyen erityistoiveita?"></textarea>
                </div>

                <div className={styles.formCheckboxContainer}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="Uutiskirje" value="Kyllä" className={styles.checkbox} />
                    <span>Tilaa uutiskirje ja pysy ajan tasalla uusista tuotteistamme</span>
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting} className={`btn btn-primary ${styles.submitBtn}`}>
                  {isSubmitting ? 'Lähetetään...' : 'Lähetä tilaus'}
                </button>

                {result === 'success' && (
                  <div className={styles.resultSuccess}>
                    ✅ Tilaus lähetetty onnistuneesti! Olemme sinuun yhteydessä pian.
                  </div>
                )}
                {result === 'error' && (
                  <div className={styles.resultError}>
                    ❌ Jokin meni pieleen. Yritä uudelleen tai ota yhteyttä suoraan sähköpostilla.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
