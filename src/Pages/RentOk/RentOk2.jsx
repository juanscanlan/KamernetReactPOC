import { useEffect } from "react";

import rentOkImg from "../../Images/rentok/RentOKlogo.png";
import rentOkVideoThumbnail from "../../Images/rentok/rentok-video.png";
import idBankVerficication from "../../Images/rentok/IDandBankVerification.png";
import landlordVerified from "../../Images/rentok/LandlordVerifiedEN.png";
import tenant from "../../Images/rentok/Tenant.png";
import rentRequest from "../../Images/rentok/RentRequestEN.png";
import obpThumbsUp from "../../Images/rentok/OBP.png";
import giveKey from "../../Images/rentok/GiveKey.png";

import translations from "../words.json";

import styles from "./RentOk.module.scss";

import { NavBar } from "../../Components/NavBar/NavBar";

let url2 = "http://localhost:44324/api/user/Login";
let url = "http://localhost:44324/Login";

const RentOk = () => {
  // useEffect(() => {
  //   postLogin(url);
  // }, []);

  // const getLogin = (url) => {
  //   // fetch("http://localhost/api/v1/login")
  //   // .then(res => res.json())
  //   // .then(data => {
  //   //     console.log(data)
  //   // })

  //   fetch(url)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw new Error("Something went wrong");
  //     })
  //     .then((resJson) => {
  //       // Do something with the response
  //       console.log(resJson);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const postLogin = (url) => {
  //   fetch(url, {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result);
  //       },
  //       (error) => {
  //         console.log("Failed");
  //       }
  //     );
  // };

  const RentOkJSX = (
    <div className={styles.section}>
      <div className={`${styles.rentOkLogoHeader} spacer-v--m`}>
        <img src={rentOkImg} alt="RentOk Logo" />
      </div>
      <div className={`${styles.summaryContainer} padding-h--xs`}>
        <div className={`${styles.summaryContainer__text} padding-h--xs`}>
          Safely find a tenant or a house with RentOK: a simple, quick and safe
          way to transfer the first month’s rent and/or deposit. Tenants are
          assured that their money will end up at the right place, and landlords
          will secure themselves of a simple downpayment of the first month's
          rent and/or deposit. This service has been developed in cooperation
          with Online Betaalplatform: a payment service provider licensed at the
          Nederlandsche Bank. OBP complies with all laws and regulations for the
          processing of payments. This is how it works:
        </div>
        <div className={`${styles.summaryContainer__video} padding-h--xs`}>
          <img src={rentOkVideoThumbnail} alt="RentOk Video" />
        </div>
      </div>
      <div className={styles.userChoiceContainer}>
        <div className={styles.userChoiceContainer__title}>I am a...</div>
        <div className={`${styles.userChoiceContainer__buttons} padding-h--xs`}>
          <button className={`${styles["userChoiceContainer__buttons--left"]} ${styles["active"]}`}>LANDLORD</button>
          <button className={styles["userChoiceContainer__buttons--right"]}>TENANT</button>
        </div>
        <div className={styles.beTrustworthyContainer}>
          <div>Be trustworthy</div>
          <div>Landlords or roommates can verify their bank account</div>
          <div>
            <img src={idBankVerficication} alt="Be trustworthy" />
          </div>
          <div>
            After verification you will see a 'reliability badge' below your
            profile picture which is visible to tenants.
          </div>
          <div>
            <img src={landlordVerified} alt="Verified landlord" />
          </div>
          <div>
            The verification will be processed through our certified RentOK
            partner Online Betaalplatform.
          </div>
          <button>START VERIFICATION</button>
        </div>
        <div className={styles.beTrustworthyContainer}>
          <div>Verification successful?</div>
          <div>
            You are now showing tenants that they can safely rent from you. You
            can arrange the down payment, rent transfer and/or deposit with
            RentOK.
          </div>
          <div>
            <img src={tenant} alt="Tenant profile" />
          </div>
          <div>This is how: Select the chosen tenant in 'my messages'.</div>
          <div>
            <img src={rentRequest} alt="Verified landlord" />
          </div>
          <div>
            Click the button 'rent request' and follow the steps.
            <br />
            After clicking 'send' the tenant will be able to complete the
            request.
          </div>
        </div>
        <div className={styles.beTrustworthyContainer}>
          <div>Rent request completed?</div>
          <div>
          The amount will be stored on a trust account by a certified third party: Online Betaalplatform.
          </div>
          <div>
            <img src={obpThumbsUp} alt="OBP thumbs up" />
          </div>
          <div>After the key transfer date has taken place the amount will be transferred to your account.</div>
          <div>
            <img src={giveKey} alt="Give key" />
          </div>
        </div>
        <div>Did you not received the key or the money?</div>
        <div>Please contact supportdesk@jamernet.nl as quickly as possible.</div>
      </div>
    </div>
  );

  return (
    <div className="padding-h--s">
      {/* <NavBar/> */}
      {RentOkJSX}
    </div>
  );
};

export default RentOk;
