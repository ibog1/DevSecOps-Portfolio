import React from 'react';
import styles from './header.module.css';

export default function Header(): React.JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
