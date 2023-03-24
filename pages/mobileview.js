import styles from '../styles/mobileview.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ExpiredPage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('Henry Michael');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className={styles.bodyC}>
      <div className={styles.outerContainer}>
        <div className={styles.logoContainer}>
          <Image src="/img/Wanologo.png" width={200} height={50} alt="Company Logo" />
        </div>
        <div className={styles.expiredCont}>
          <div className={styles.headUp}>
            <h3>Your USD Card Details</h3>
          </div>
          <div className={styles.cardContainer}>
          <div className={styles.cardTitle}>
              <label>Card Name</label>
            </div>
            <div className={styles.cardName}>
              Henry Michael
            </div>
            <div className={styles.copyIcon} onClick={handleCopy}>
            <img src="/img/copy.png" alt="Copy" width="18px" height="18px" />
          </div>
            {copied && <div className={styles.copyNotification}><p>COPIED!</p></div>}
            
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.blueButton}>Close</button>
          </div>
          <div className={styles.warning}>
            <p>This page will expire in 5 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}