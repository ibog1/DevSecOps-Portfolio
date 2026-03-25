import React, { useState } from 'react';
import styles from './header.module.css';

export default function Header(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Portfolio sections">
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ×
            </button>

            <nav className={styles.overlayNav} aria-label="Mobile portfolio sections">
              <a href="#about" onClick={closeMenu}>About me</a>
              <a href="#skills" onClick={closeMenu}>My skills</a>
              <a href="#projects" onClick={closeMenu}>My projects</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
