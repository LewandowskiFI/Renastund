"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './FloatingButton.module.css';

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Determine button behavior based on the current page
  // On Order page -> Scroll to top
  // On other pages -> Link to Order page
  const isOrderPage = pathname === '/tilaa-tasta';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.floatingBtnWrapper}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.2 } }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        >
          {isOrderPage ? (
            <button onClick={scrollToTop} className={styles.floatingBtn} aria-label="Takaisin ylös">
              <ArrowUp size={20} className={styles.icon} />
              <span>Ylös</span>
            </button>
          ) : (
            <Link href="/tilaa-tasta" className={styles.floatingBtn}>
              <ShoppingBag size={20} className={styles.icon} />
              <span>Tilaa tästä</span>
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
