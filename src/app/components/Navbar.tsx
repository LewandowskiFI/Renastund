"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Etusivu', path: '/' },
    { name: 'Palvelut', path: '/#tilaa' },
    { name: 'Meistä', path: '/yhteystiedot' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/logo.png" 
              alt="Renastund Logo" 
              width={500} 
              height={150} 
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navItems}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path} 
                  className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/tilaa-tasta" className={styles.orderBtn}>
            Tilaa tästä
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          <div className={styles.mobileNavContainer}>
            <ul className={styles.mobileNavItems}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/tilaa-tasta" 
                  className={styles.mobileOrderBtn}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tilaa tästä
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
