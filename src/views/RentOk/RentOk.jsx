import { useState } from "react";

import rentOkImg from "@assets/Images/rentok/RentOKlogo.png";
import rentOkVideoThumbnail from "@assets/Images/rentok/rentok-video.png";
import idBankVerficication from "@assets/Images/rentok/IDandBankVerification.png";
import landlordVerified from "@assets/Images/rentok/LandlordVerifiedEN.png";
import tenant from "@assets/Images/rentok/Tenant.png";
import rentRequest from "@assets/Images/rentok/RentRequestEN.png";
import obpThumbsUp from "@assets/Images/rentok/OBP.png";
import giveKey from "@assets/Images/rentok/GiveKey.png";
import paymentRequest from "@assets/Images/rentok/PaymentRequest.png";
import receiveKey from "@assets/Images/rentok/ReceiveKey.png";

import styles from "./RentOk.module.scss";

import BaseLayout from "@core/Layout/BaseLayout/BaseLayout";
import Image from "next/image";

const isMobile = false;

const RentOk = ({ T }) => {
  const [isLandlord, setIsLandlord] = useState(true);

  const landlordSectionJSX = (
    <div id="rentOkLandlordSection">
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>Be trustworthy</div>
        <div className={styles.rentOkContainer__text}>
          Landlords or roommates can verify their bank account.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--bankVerified"]}
            src={idBankVerficication}
            alt="Be trustworthy"
          />
        </div>
        <div className={styles["horizontal-divider"]}></div>
        <div className={styles.rentOkContainer__text}>
          After verification you will see a 'reliability badge' below your
          profile picture which is visible to tenants.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--landlordVerified"]}
            src={landlordVerified}
            alt="Verified landlord"
          />
        </div>
        <div className={styles.rentOkContainer__text}>
          The verification will be processed through our certified RentOK
          partner Online Betaalplatform.
        </div>
        <div className={styles["horizontal-divider"]}></div>
        <button className={styles.rentOkContainer__button}>
          START VERIFICATION
        </button>
      </div>
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>
          Verification successful?
        </div>
        <div className={styles.rentOkContainer__text}>
          You are now showing tenants that they can safely rent from you. You
          can arrange the down payment, rent transfer and/or deposit with
          RentOK.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--tenantVerified"]}
            src={tenant}
            alt="Tenant profile"
          />
        </div>
        <div className={styles["horizontal-divider"]}></div>
        <div className={styles.rentOkContainer__text}>
          This is how: Select the chosen tenant in 'my messages'.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--rentRequest"]}
            src={rentRequest}
            alt="Verified landlord"
          />
        </div>
        <div className={styles.rentOkContainer__text}>
          Click the button 'rent request' and follow the steps.
          <br />
          After clicking 'send' the tenant will be able to complete the request.
        </div>
      </div>
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>
          Rent request completed?
        </div>
        <div className={styles.rentOkContainer__text}>
          The amount will be stored on a trust account by a certified third
          party: Online Betaalplatform.
        </div>
        <div>
          <Image
            className={styles["rentOkContainer__image--obp"]}
            src={obpThumbsUp}
            alt="OBP thumbs up"
          />
        </div>
        <div className={styles["horizontal-divider"]}></div>

        <div className={styles.rentOkContainer__text}>
          After the key transfer date has taken place the amount will be
          transferred to your account.
        </div>
        <div>
          <Image
            className={styles["rentOkContainer__image--giveKey"]}
            src={giveKey}
            alt="Give key"
          />
        </div>
      </div>
    </div>
  );

  const tenantSectionJSX = (
    <div id="rentOkTenantSection">
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>
          When can I pay via RentOK?
        </div>
        <div className={styles.rentOkContainer__text}>
          You can do this with landlords / roommates that have a verified
          profile. Check the verification badge below their profile picture.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--landlordVerified"]}
            src={landlordVerified}
            alt="Verified landlord"
          />
        </div>
      </div>
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>
          Are you the chosen tenant?
        </div>
        <div className={styles.rentOkContainer__text}>
          You can ask the landlord to send you a rent request. You will receive
          the rent request in 'my messages'.
        </div>
        <div className={styles.rentOkContainer__image}>
          <Image
            className={styles["rentOkContainer__image--tenantVerified"]}
            src={paymentRequest}
            alt="Payment request"
          />
        </div>
        <div className={styles.rentOkContainer__text}>
          Follow the steps to complete the request.
        </div>
      </div>
      <div className={styles.rentOkContainer}>
        <div className={styles.rentOkContainer__title}>
          Rent request completed?
        </div>
        <div className={styles.rentOkContainer__text}>
          The amount will be stored on a trust account by a certified third
          party:{" "}
          <a
            className={styles["rentOkContainer__text--link"]}
            href="https://onlinepaymentplatform.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            Online Betaalplatform
          </a>
          .
        </div>
        <div>
          <Image
            className={styles["rentOkContainer__image--obp"]}
            src={obpThumbsUp}
            alt="OBP thumbs up"
          />
        </div>
        <div className={styles["horizontal-divider"]}></div>

        <div className={styles.rentOkContainer__text}>
          After you have received the key the money will be transferred to the
          landlord / roommate
        </div>
        <div>
          <Image
            className={styles["rentOkContainer__image--giveKey"]}
            src={receiveKey}
            alt="Receive key"
          />
        </div>
      </div>
    </div>
  );

  const desktopLandlordSectionJSX = (
    <div>
      <div>Button</div>
      {landlordSectionJSX}
    </div>
  );

  const desktopTenantSectionJSX = (
    <div>
      <div>Button</div>
      {tenantSectionJSX}
    </div>
  );

  const mobileUserChoiceSectionJSX = (_isLandlord) => {
    <div>
      {userChoiceButtonJSX}
      {_isLandlord ? landlordSectionJSX : tenantSectionJSX}
    </div>;
  };

  const desktopUserChoiceSectionJSX = (_isLandlord) => {
    <div>
      <div>
        {userChoiceButtonJSX(_isLandlord, "landlord")}
        {landlordSectionJSX}
      </div>
      {userChoiceDesktopDividerJSX}
      <div>
        {userChoiceButtonJSX(!_isLandlord, "tenant")}
        {landlordSectionJSX}
      </div>
    </div>;
  };

  const userChoiceButtonJSX = (isActive, buttonType) => {
    return (
      <button
        className={`${styles["userChoiceContainer__buttons--left"]} ${
          isActive ? styles["active"] : ""
        }`}
        onClick={() => setIsLandlord(isActive)}
      >
        {buttonType.toUpperCase()}
      </button>
    );
  };

  const userChoiceDesktopDividerJSX = (
    <div className="col s2 hide-on-med-and-down">
      <div className={styles["rent-ok-numbers"]}>
        <div className={styles["number-wrapper"]}>
          <div className={styles["number-horizontal-connector"]}></div>
          <div className={styles.number}>1</div>
        </div>
        <div className={styles["number-vertical-connector"]}></div>
        <div className={styles["number-wrapper"]}>
          <div className={styles["number-horizontal-connector"]}></div>
          <div className={styles.number}>2</div>
        </div>
        <div className={styles["number-vertical-connector"]}></div>
        <div className={styles["number-wrapper"]}>
          <div className={styles["number-horizontal-connector"]}></div>
          <div className={styles.number}>3</div>
        </div>
      </div>
    </div>
  );

  const RentOkJSX = (
    <div className={styles.section}>
      <div className={`${styles.rentOkLogoHeader} spacer-v--m`}>
        <Image src={rentOkImg} alt="RentOk Logo" />
      </div>
      <div className={`${styles.summaryContainer} padding-h--xs`}>
        <div className={`${styles.summaryContainer__text} padding-h--xs`}>
          {T("summary")}
        </div>
        <div className={`${styles.summaryContainer__video} padding-h--xs`}>
          <Image src={rentOkVideoThumbnail} alt="RentOk Video" />
        </div>
      </div>
      <div className={styles.userChoiceContainer}>
        <div className={styles.userChoiceContainer__title}>I am a...</div>
        {isMobile ? (
          <>
            <div className={`${styles.userChoiceContainer__buttons}`}>
              <button
                className={`${styles["userChoiceContainer__buttons--left"]} ${
                  isLandlord ? styles["active"] : ""
                }`}
                onClick={() => setIsLandlord(true)}
              >
                LANDLORD
              </button>
              <button
                className={`${styles["userChoiceContainer__buttons--right"]} ${
                  !isLandlord ? styles["active"] : ""
                }`}
                onClick={() => setIsLandlord(false)}
              >
                TENANT
              </button>
            </div>
            {isLandlord ? landlordSectionJSX : tenantSectionJSX}{" "}
          </>
        ) : (
          <div className={styles.userChoiceContainerMobile}>
            <div className={isLandlord ? "" : styles.inactive}>
              {userChoiceButtonJSX(isLandlord, "landlord")}
              {landlordSectionJSX}
            </div>
            {userChoiceDesktopDividerJSX}
            <div className={!isLandlord ? "" : styles.inactive}>
              {userChoiceButtonJSX(!isLandlord, "tenant")}
              {tenantSectionJSX}
            </div>
          </div>
        )}
      </div>
      <div className={styles.notReceiveKeyContainer}>
        <div className={styles.notReceiveKeyContainer__title}>
          Did you not receive the key or the money?
        </div>
        <div className={styles.notReceiveKeyContainer__text}>
          Please contact{" "}
          <a
            className={styles["notReceiveKeyContainer__text--link"]}
            href="mailto:supportdesk@kamernet.nl"
          >
            supportdesk@kamernet.nl
          </a>{" "}
          as quickly as possible.
        </div>
      </div>
      <div className={styles.notReceiveKeyContainer}>
        <div className={styles.notReceiveKeyContainer__title}>
          Frequently asked questions
        </div>
        <div className={styles.notReceiveKeyContainer__text}>
          Please contact{" "}
          <a
            className={styles["notReceiveKeyContainer__text--link"]}
            href="mailto:supportdesk@kamernet.nl"
          >
            supportdesk@kamernet.nl
          </a>{" "}
          as quickly as possible.
        </div>
      </div>
    </div>
  );

  return (
    <BaseLayout
      title="RentOK"
      description="Learn how to use RentOK"
      className="container padding-h--s"
    >
      {RentOkJSX}
    </BaseLayout>
  );
};

export default RentOk;
