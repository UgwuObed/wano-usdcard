import styles from '../styles/unauthorized.module.css';
import Image from 'next/image';

export default function unauthorized() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.unauthorizeScreenContainer}>
        <div className={styles.logoContainer}>
          <Image src="/img/Wanologo.png" alt="Wano Logo" width={69.18} height={72.02} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.writeUp}>
            <h3>Unauthorized Access</h3>
            <p>This page can only be viewed from a mobile phone browser.</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
        <a href="https://wa.me/message/7PGM267HGLHNG1">
          <button className={styles.blueButton}>Okay</button>
          </a>
        </div>
      </div>
    </div>
  );
}
