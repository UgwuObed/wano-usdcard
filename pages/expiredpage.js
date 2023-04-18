import styles from '../styles/expiredpage.module.css';
import Image from 'next/image';

export default function ExpiredPage() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.logoContainer}>
        <Image src="/img/Wanologo.png" width={200} height={50} alt="Company Logo" />
      </div>
      <div className={styles.expiredCont}>
        <div className={styles.writeUp}>
          <h3>This page has expired</h3>
          <p>Return to WhatsApp and create a new card link</p>
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
