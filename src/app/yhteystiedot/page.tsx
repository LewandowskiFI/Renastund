import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Yhteystiedot | Renastund',
  description: 'Tutustu Renastundin tiimiin. Autamme mielellämme kaikissa kysymyksissäsi.',
};

const teamMembers = [
  {
    name: 'Eliel Seppänen',
    role: 'Perustaja, Jyväskylä',
    phone: '044 976 3323',
    email: 'eliel.seppanen@renastund.fi',
    location: 'Jyväskylä',
    image: '/team-eliel.jpg'
  },
  {
    name: 'Eelis Seppänen',
    role: 'Perustaja, Tampere',
    phone: '044 976 3290',
    email: 'eelis.seppanen@renastund.fi',
    location: 'Tampere',
    image: '/team-eelis.jpg'
  },
  {
    name: 'Ellenoora Koponen',
    role: 'Asiakkuudet, Jyväskylä',
    phone: '040 724 4488',
    email: 'ellenoora.koponen@renastund.fi',
    location: 'Jyväskylä',
    image: '/team-ellen.jpg'
  }
];

export default function ContactsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.bgBlob}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Meistä</h1>
          <p className={styles.subtitle}>
            Renastund on syntynyt halusta yhdistää kestävyys, edullisuus ja helppous. Tutustu tiimiimme ja ota rohkeasti yhteyttä, olemme täällä teitä varten.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={`Kuva: ${member.name}`}
                  fill
                  className={styles.memberImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                
                <div className={styles.contactLinks}>
                  <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                    <Phone size={20} />
                    <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className={styles.contactLink}>
                    <Mail size={20} />
                    <span>{member.email}</span>
                  </a>
                  <div className={styles.contactLink}>
                    <MapPin size={20} />
                    <span>{member.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.connectSection}>
          <h2>Etkö löytänyt etsimääsi?</h2>
          <p>Voit myös lähettää meille viestiä suoraan sivujemme kautta. Vastaamme sinulle mahdollisimman pian!</p>
          <Link href="/#yhteys" className={styles.connectBtn}>
            Ota yhteyttä
          </Link>
        </div>
      </div>
    </main>
  );
}
