import React from 'react';
import styles from './footer.module.css';
import Link from "@docusaurus/Link";


export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© 2026 Ibrahim Güllü</p>
      
      <Link to="/legal" className={styles.legal}>
        Legal notice
      </Link>

    </footer>
  );
}
