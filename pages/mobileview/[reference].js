import styles from '../../styles/mobileview.module.css';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ExpiredPage from '../expiredpage';
import {useRouter} from 'next/router';


/**
 * {
 *     "status": true,
 *     "message": "cards retrieved",
 *     "data": {
 *         "id": "7d895145-fadf-492d-b8d8-ce39d9e22168",
 *         "label": "string",
 *         "card": {
 *             "name": "Test Test",
 *             "card_number": "2483536952494016",
 *             "masked_pan": "248353******4016",
 *             "expiry": "08/28",
 *             "cvv": "123",
 *             "status": "ACTIVE",
 *             "type": "VIRTUAL",
 *             "issuer": "MASTERCARD",
 *             "currency": "USD",
 *             "balance": 0,
 *             "address": {
 *                 "street": "123 Main St",
 *                 "city": "San Francisco",
 *                 "state": "CA",
 *                 "postal_code": "94105",
 *                 "country": "US"
 *             }
 *         },
 *         "created_at": "2023-04-01T18:48:18.269Z",
 *         "updated_at": "2023-04-01T18:48:18.269Z"
 *     }
 * }
 * @returns {JSX.Element}
 */
export default function mobileview() {
    const [copied, setCopied] = useState(false);
    const [cardDetails, setCardDetails] = useState({});
    const [expired, setExpired] = useState(false);

    const liveBASE = "https://api.wano.app"
    const stagingBase = "https://wano-staging.herokuapp.com"
    const localBase = "http://localhost:4444"


    const router = useRouter();
    const {reference} = router.query
    console.log(reference)


    useEffect(async () => {
        const fetchCardDetails = async () => {

        };

        fetchCardDetails();

        try {
            const response = await axios.get(localBase + '/card-issuing/view', {
                headers: {
                    /**
                     *  http://localhost:3000/mobileview/wano-H1BMN4VA4X
                     *
                     *  figure out how to get 'wano-H1BMN4VA4X' from the url after load then make a request to the backend by passing it with the header like
                     *  Bearer wano-H1BMN4VA4X,
                     *
                     *  I tried getting the reference, it only prints the result after a full load, but this is due to reacthook issues.
                     *  You can check that out.
                     *
                     *  When the header is well passsed.
                     *
                     *  I added the response from the backend regarding card.
                     *
                     *  Keep in mind that you this reference expires.
                     *
                     *  http://wano-staging.herokuapp.com/docs
                     *
                     *  So check the docs on how to generate a new link after every 5 minute.
                     *
                     *  That's basically everything you are to do.
                     */
                    Authorization: 'Bearer wano-H1BMN4VA4X'
                }
            });
            setCardDetails(response.data.data);
        } catch (error) {
            console.error(error);
        }
        setTimeout(() => {
            setExpired(true);
        }, 300000);
    }, []);


    const handleCopy = (id) => {
        const text = document.querySelector(`#${id}`).textContent;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };


    if (expired) {
        return <ExpiredPage/>;
    }


    return (
        <div className={styles.bodyC}>
            <div className={styles.outerContainer}>
                <div className={styles.logoContainer}>
                    <Image src="/img/Wanologo.png" width={200} height={50} alt="Company Logo"/>
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
                            {cardDetails.card_number}
                        </div>
                        <div className={styles.copyIcon} onClick={() => handleCopy('card-name-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
                        </div>
                        {copied && <div className={styles.copyNotification}><p>COPIED!</p></div>}

                        <div className={styles.numTitle} id="card-number">
                            <label>Card Number</label>
                        </div>
                        <div className={styles.cardNumber} id="card-number-value">
                            <a className={styles.phoneNumberLink}
                               href="tel:5001 5001 5001 5001"> {cardDetails && cardDetails.cardNumber}</a>
                        </div>
                        <div className={styles.NcopyIcon} onClick={() => handleCopy('card-number-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
                        </div>
                        {copied && <div className={styles.NcopyNotification}><p>COPIED!</p></div>}

                        <div className={styles.cvvTitle} id="card-cvv">
                            <label>CVV</label>
                        </div>
                        <div className={styles.cardcvv} id="card-cvv-value">
                            {cardDetails && cardDetails.cvv}
                        </div>
                        <div className={styles.CcopyIcon} onClick={() => handleCopy('card-cvv-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
                        </div>
                        {copied && <div className={styles.CcopyNotification}><p>COPIED!</p></div>}


                        <div className={styles.expTitle} id="card-exp">
                            <label>Expiry Date</label>
                        </div>
                        <div className={styles.cardExp} id="card-exp-value">
                            {cardDetails && cardDetails.expiryDate}
                        </div>
                        <div className={styles.EcopyIcon} onClick={() => handleCopy('card-exp-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
                            {copied && <div className={styles.EcopyNotification}><p>COPIED!</p></div>}
                        </div>
                        <div className={styles.addTitle} id="card-add">
                            <label>Billing Address</label>
                        </div>
                        <div className={styles.cardAdd} id="card-add-value">
                            {cardDetails && cardDetails.billingAddress}
                        </div>
                        <div className={styles.AcopyIcon} onClick={() => handleCopy('card-add-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
                            {copied && <div className={styles.AcopyNotification}><p>COPIED!</p></div>}
                        </div>

                        <div className={styles.zipTitle} id="card-zip">
                            <label>Zip Code</label>
                        </div>
                        <div className={styles.cardZip} id="card-zip-value">
                            {cardDetails && cardDetails.zipCode}
                        </div>
                        <div className={styles.ZcopyIcon} onClick={() => handleCopy('card-zip-value')}>
                            <img src="/img/copy.png" alt="Copy"/>
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