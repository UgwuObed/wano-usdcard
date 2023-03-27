import styles from '../styles/mobileview.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function ExpiredPage() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (id) => {
    const text = document.querySelector(`#${id}`).textContent;
    navigator.clipboard.writeText(text);
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
            <div className={styles.cardTitle} id="card-name">
              <label>Card Name</label>
            </div>
            <div className={styles.cardName} id="card-name-value">
              Henry Michael
            </div>
            <div className={styles.copyIcon} onClick={() => handleCopy('card-name-value')}>
              <img src="/img/copy.png" alt="Copy" />
            </div>
            {copied && <div className={styles.copyNotification}><p>COPIED!</p></div>}

            <div className={styles.numTitle} id="card-number">
              <label>Card Number</label>
            </div>
            <div className={styles.cardNumber} id="card-number-value">
            <a className={styles.phoneNumberLink} href="tel:5001 5001 5001 5001"> 5001 5001 5001 5001</a>
            </div>
            <div className={styles.NcopyIcon} onClick={() => handleCopy('card-number-value')}>
              <img src="/img/copy.png" alt="Copy" />
            </div>
            {copied && <div className={styles.NcopyNotification}><p>COPIED!</p></div>}

            <div className={styles.cvvTitle} id="card-cvv">
              <label>CVV</label>
            </div>
            <div className={styles.cardcvv} id="card-cvv-value">
              203
            </div>
            <div className={styles.CcopyIcon} onClick={() => handleCopy('card-cvv-value')}>
              <img src="/img/copy.png" alt="Copy" />
            </div>
            {copied && <div className={styles.CcopyNotification}><p>COPIED!</p></div>}


            <div className={styles.expTitle} id="card-exp">
              <label>Expiry Date</label>
            </div>
            <div className={styles.cardExp} id="card-exp-value">
              2026-04
            </div>
            <div className={styles.EcopyIcon} onClick={() => handleCopy('card-exp-value')}>
              <img src="/img/copy.png" alt="Copy" />
              {copied && <div className={styles.EcopyNotification}><p>COPIED!</p></div>}
              </div>
              <div className={styles.addTitle} id="card-add">
            <label>Billing Address</label>
          </div>
          <div className={styles.cardAdd} id="card-add-value">
            235 Chapman
          </div>
          <div className={styles.AcopyIcon} onClick={() => handleCopy('card-add-value')}>
            <img src="/img/copy.png" alt="Copy" />
            {copied && <div className={styles.AcopyNotification}><p>COPIED!</p></div>}
          </div>

          <div className={styles.zipTitle} id="card-zip">
            <label>Zip Code</label>
          </div>
          <div className={styles.cardZip} id="card-zip-value">
            94200
          </div>
          <div className={styles.ZcopyIcon} onClick={() => handleCopy('card-zip-value')}>
            <img src="/img/copy.png" alt="Copy" />
            {copied && <div className={styles.ZcopyNotification}><p>COPIED!</p></div>}
          </div>

        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.blueButton}>Close</button>
        </div>
        <div className={styles.warning}>
          <h1>This page will expire in 5 minutes</h1>
        </div>
      </div>
      </div>
    </div>
  );
}




