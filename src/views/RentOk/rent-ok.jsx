import { useTranslation } from "next-i18next";
import Image from "next/image";
import LogoImage from '@public/images/rent-ok/RentOKlogo.png';
import PlayButtonImage from "@public/images/play-button.png";
import IDandBankVerificationImage from "@public/images/rent-ok/IDandBankVerification.png";
import LandlordVerifiedENImage from "@public/images/rent-ok/LandlordVerifiedEN.png";
import TenantImage from "@public/images/rent-ok/Tenant.png";
import RentRequestENImage from "@public/images/rent-ok/RentRequestEN.png";
import OBPImage from "@public/images/rent-ok/OBP.png";
import GiveKeyImage from "@public/images/rent-ok/GiveKey.png";
import PaymentRequestImage from "@public/images/rent-ok/PaymentRequest.png";
import styles from './rent-ok.module.scss';
import { useState } from "react";
import { Accordeon, AccordeonItem, AccordeonItemTitle, AccordeonItemBody } from "@components/accordeon";

export const RentOk = () => {
  const { t } = useTranslation(["rent-ok", "common"]);
  const [isLandlord, setIsLandlord] = useState(true);

  const faq = (
    <div className="container grid padding-v--xxl-1 padding-v--xl--m-down">
      <h1 className="col-span-12 text-center section-title">{t('faq.title')}</h1>
      <div className="col-start-3 col-end-11 col-start-1--m-down col-span-4--s">
        <Accordeon>
          <AccordeonItem>
            <AccordeonItemTitle>{t('faq.what-is-rentok.question')}</AccordeonItemTitle>
            <AccordeonItemBody><p>{t('faq.what-is-rentok.answer')}</p></AccordeonItemBody>
          </AccordeonItem>
          <AccordeonItem className="padding-v--xs spacer-v--xs">
            <AccordeonItemTitle>{t('faq.who-is-obp.question')}</AccordeonItemTitle>
            <AccordeonItemBody>
              {t('faq.who-is-obp.answer-1-1')}
              <a className="color-text-primary" href="https://onlinepaymentplatform.com/en" target="_blank">
                {t('faq.who-is-obp.bold-obp-site')}
              </a>
              {t('faq.who-is-obp.answer-1-2')}
            </AccordeonItemBody>
          </AccordeonItem>
          <AccordeonItem className="padding-v--xs">
            <AccordeonItemTitle>{t('faq.benefits-of-rentok.question')}</AccordeonItemTitle>
            <AccordeonItemBody>
              <h4>{t('faq.tenant-section')}</h4>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>
                  {t('faq.benefits-of-rentok.for-tenants.li-1')}
                  <a className="color-text-primary" href="https://onlinepaymentplatform.com/en">OPB</a>
                </li>
                <li>{t('faq.benefits-of-rentok.for-tenants.li-2')}</li>
                <li>{t('faq.benefits-of-rentok.for-tenants.li-3')}</li>
              </ul>
              <h4>{t('faq.landlord-section')}</h4>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>{t('faq.benefits-of-rentok.for-landlords.li-1')}</li>
                <li>{t('faq.benefits-of-rentok.for-landlords.li-2')}</li>
                <li>{t('faq.benefits-of-rentok.for-landlords.li-3')}</li>
              </ul>
            </AccordeonItemBody>
          </AccordeonItem>
          <AccordeonItem className="padding-v--xs">
            <AccordeonItemTitle>{t('faq.how-rentok-works.question')}</AccordeonItemTitle>
            <AccordeonItemBody>
              <h4>{t('faq.tenant-section')}</h4>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>{t('faq.how-rentok-works.for-tenants.li-1')}</li>
                <li>{t('faq.how-rentok-works.for-tenants.li-2')}</li>
                <li>
                  {t('faq.how-rentok-works.for-tenants.li-3-1')}
                  <a className="color-text-primary" href="https://onlinepaymentplatform.com/en">Online Betaalplatform</a>
                  {t('faq.how-rentok-works.for-tenants.li-3-2')}
                </li>
              </ul>
              <h4>{t('faq.landlord-section')}</h4>
              <div>{t('faq.how-rentok-works.for-landlords.subtitle')}</div>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>{t('faq.how-rentok-works.for-landlords.li-1')}</li>
                <li>{t('faq.how-rentok-works.for-landlords.li-2')}</li>
                <li>{t('faq.how-rentok-works.for-landlords.li-3')}</li>
              </ul>
            </AccordeonItemBody>
          </AccordeonItem>
          <AccordeonItem className="padding-v--xs">
            <AccordeonItemTitle>{t('faq.keep-in-mind-rentok.question')}</AccordeonItemTitle>
            <AccordeonItemBody>
              <h4>{t('faq.tenant-section')}</h4>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>
                  {t('faq.keep-in-mind-rentok.for-tenants.li-1')}
                  <a href="mailto:supportdesk@kamernet.nl" className="color-text-primary">supportdesk@kamernet.nl</a>
                </li>
                <li>{t('faq.keep-in-mind-rentok.for-tenants.li-2')}</li>
                <li>{t('faq.keep-in-mind-rentok.for-tenants.li-3')}</li>
              </ul>
              <h4>{t('faq.landlord-section')}</h4>
              <div>{t('faq.keep-in-mind-rentok.for-landlords.section-1.title')}</div>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>{t('faq.keep-in-mind-rentok.for-landlords.section-1.li-1')}</li>
                <li>{t('faq.keep-in-mind-rentok.for-landlords.section-1.li-2')}</li>
                <li>{t('faq.keep-in-mind-rentok.for-landlords.section-1.li-3')}</li>
                <li>
                  <a className="color-text-primary" href="https://onlinebetaalplatform.nl/assets/public/static/algemene-voorwaarden-c2c-betaallink.html">
                    {t('faq.keep-in-mind-rentok.for-landlords.section-1.li-3')}
                  </a>
                </li>
              </ul>
              <div>{t('faq.keep-in-mind-rentok.for-landlords.section-2.title')}</div>
              <ul className={`${styles['faq-list']} padding-h--m`}>
                <li>{t('faq.keep-in-mind-rentok.for-landlords.section-2.li-1')}</li>
              </ul>
            </AccordeonItemBody>
          </AccordeonItem>
        </Accordeon>
      </div>
    </div>
  );

  const noKey = (
    <div className="color-background-secondary-light-3">
      <div className="container padding-v--xxl-1 padding-v--xl--m-down text-center">
        <h1 className="section-title">{t('no-key-help.title')}</h1>
        <div className={`text-sm ${styles['no-key-content']}`}>
          {t('no-key-help.subtitle-1/2')}
          <a href="mailto:supportdesk@kamernet.nl">supportdesk@kamernet.nl</a>
          {t('no-key-help.subtitle-2/2')}
        </div>
      </div>
    </div>
  );

  const iamLandlord = (
    <>
      <div className={`${styles['iam-box']} ${isLandlord ? null : styles['iam-box--inactive']} ${isLandlord ? null : 'hide--m-down'} padding-m text-center col-span-9--m-down`}>
        <div className="section-subtitle">
          {t('iam.landlord.be-trustworthy')}
        </div>
        <div className={styles['iam-content']}>{t('iam.landlord.landlords-roommates-can-verify')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={IDandBankVerificationImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-h-divider']} spacer-v--s`}></div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.landlord.after-verification-badge')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={LandlordVerifiedENImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.landlord.verification-through-rentok')}</div>
        <div className={`${styles['iam-h-divider']} spacer-v--s`}></div>
        <div className="flex justify-content-center spacer-v--s">
          <a href="https://kamernet.nl/en/my-adverts?obpverify=1" className="btn-medium header accent-dark">{t('iam.landlord.start-verification')}</a>
        </div>
      </div>

      <div className={`${styles['iam-box']} ${isLandlord ? null : styles['iam-box--inactive']} ${isLandlord ? null : 'hide--m-down'} padding-m text-center spacer-v--s col-span-9--m-down`}>
        <div className="section-subtitle">
          {t('iam.landlord.verification-successful')}
        </div>
        <div className={styles['iam-content']}>{t('iam.landlord.show-safely-rent')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={TenantImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-h-divider']} spacer-v--s`}></div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.landlord.how-select-tenant')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={RentRequestENImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.landlord.click-request-follow-steps')}</div>
        <div className={styles['iam-content']}>{t('iam.landlord.after-send-tenant')}</div>
      </div>
      <div className={`${styles['iam-box']} ${isLandlord ? null : styles['iam-box--inactive']} ${isLandlord ? null : 'hide--m-down'} padding-m text-center spacer-v--s col-span-9--m-down`}>
        <div className="section-subtitle">
          {t('iam.common.rent-request-completed')}
        </div>
        <div className={styles['iam-content']}>{t('iam.common.amount-stored-third-party')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={OBPImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-h-divider']} spacer-v--s`}></div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.landlord.after-key-transfer-amount')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={GiveKeyImage} height="250px" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const iamTenant = (
    <>
      <div className={`${styles['iam-box']} ${isLandlord ? styles['iam-box--inactive'] : null} ${isLandlord ? 'hide--m-down' : null} padding-m text-center col-span-9--m-down`}>
        <div className="section-subtitle">{t('iam.tenant.when-pay-rentok')}</div>
        <div className={styles['iam-content']}>{t('iam.tenant.do-with-verified')}</div>
        <div className={styles['iam-content']}>{t('iam.tenant.check-badge-profile')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={LandlordVerifiedENImage} />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles['iam-box']} ${isLandlord ? styles['iam-box--inactive'] : null} ${isLandlord ? 'hide--m-down' : null} padding-m text-center spacer-v--s col-span-9--m-down`}>
        <div className="section-subtitle">{t('iam.tenant.are-you-tenant')}</div>
        <div className={styles['iam-content']}>{t('iam.tenant.ask-landlord-rent')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={PaymentRequestImage} />
            </div>
          </div>
        </div>
        <div className="spacer-v--s">{t('iam.tenant.follow-steps-request')}</div>
      </div>

      <div className={`${styles['iam-box']} ${isLandlord ? styles['iam-box--inactive'] : null} ${isLandlord ? 'hide--m-down' : null} padding-m text-center spacer-v--s col-span-9--m-down`}>
        <div className="section-subtitle">{t('iam.common.rent-request-completed')}</div>
        <div className={styles['iam-content']}>{t('iam.common.amount-stored-third-party')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={OBPImage} />
            </div>
          </div>
        </div>
        <div className={`${styles['iam-h-divider']} spacer-v--s`}></div>
        <div className={`${styles['iam-content']} spacer-v--s`}>{t('iam.tenant.after-received-key')}</div>
        <div className="padding-h--s spacer-v--s">
          <div className={styles['iam-image-box']}>
            <div className="padding-h--xs padding-v--s">
              <Image src={GiveKeyImage} height="250px" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const iam = (
    <div className={`${styles['iam']} container padding-v--xxl-1 padding-v--xl--m-down grid no-col-gap no-row-gap`}>
      <div className="col-span-12 text-center text-l">{t('iam.title')}</div>
      <div className="spacer-v--l col-span-12"></div>
      <button className={`${styles['iam-landlord-button']} ${isLandlord ? 'primary' : null} padding-s padding-xs--m-down btn col-span-5 col-span-4--m col-span-2--s full-width`}
        onClick={() => setIsLandlord(true)}>
        {t('landlord', { ns: 'common' })}
      </button>
      <button className={`${styles['iam-tenant-button']} ${isLandlord ? null : 'primary'} padding-s padding-xs--m-down btn col-start-8 col-span-5 col-start-6--m col-span-4--m col-start-3--s col-span-2--s  full-width`}
        onClick={() => setIsLandlord(false)}>
        {t('tenant', { ns: 'common' })}
      </button>
      <div className="spacer-v--l col-span-12"></div>
      <div className={`${styles['iam-number-container']} hide--m-down`}>
        <div className={`${styles['iam-number-h-connector']} ${isLandlord ? null : styles['iam-number-h-connector--invert']}`}></div>
        <div className={styles['iam-number-circle']}>1</div>
        <div className={styles['iam-number-v-connector']}></div>
      </div>
      <div className={`${styles['iam-number-container']} spacer-v--s hide--m-down`}>
        <div className={`${styles['iam-number-h-connector']} ${isLandlord ? null : styles['iam-number-h-connector--invert']}`}></div>
        <div className={styles['iam-number-circle']}>2</div>
        <div className={styles['iam-number-v-connector']}></div>
      </div>
      <div className={`${styles['iam-number-container']} spacer-v--s hide--m-down`}>
        <div className={`${styles['iam-number-h-connector']} ${isLandlord ? null : styles['iam-number-h-connector--invert']}`}></div>
        <div className={styles['iam-number-circle']}>3</div>
      </div>
      {iamLandlord}
      {iamTenant}
    </div>
  );

  const video = (
    <div className="color-background-secondary-light-3 spacer-v--xxl-1 spacer-v--xl--m-down">
      <div className="container grid padding-v--xxl-1 padding-v--xl--m-down">
        <div className="col-span-6 col-span-9--m">
          {t('summary')}
        </div>
        <div className="col-span-6 col-span-9--m">
          <ul className={styles['video']}>
            <li data-src="https://vimeo.com/356862969">
              <a href="">
                <div>
                  <Image src={PlayButtonImage} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const logo = (
    <div className="container grid spacer-v--l spacer-v--m--s">
      <div className="col-span-12 flex justify-content-center">
        <Image src={LogoImage} />
      </div>
    </div>
  );

  return (
    <>
      {logo}
      {video}
      {iam}
      {noKey}
      {faq}
    </>
  );
};
