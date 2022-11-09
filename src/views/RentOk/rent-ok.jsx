import { useTranslation } from "next-i18next";
import Image from "next/image";
import LogoImage from '@public/images/rent-ok/RentOKlogo.png';
import PlayButtonImage from "@public/images/play-button.png";
import styles from './rent-ok.module.scss';

export const RentOk = () => {
  const { t } = useTranslation(["rent-ok", "common"]);

  const iamLandlord = (
    <>
      <div class={`${styles['iam-box']} padding-m text-center col-span-9--m-down`}>
        <div class="section-subtitle">
          @Translator.TranslateText("LBL_ROK_LAN_SECTION_1_TITLE")
        </div>
        <div class="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_1_CONTENT_1")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
        <div class="rent-ok-page__iam-h-divider spacer-v--s"></div>
        <div class="spacer-v--s rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_1_CONTENT_2")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
        <div class="spacer-v--s rent-ok-page__iam-content">@Html.Raw(Translator.TranslateText("LBL_ROK_LAN_SECTION_1_CONTENT_3"))</div>
        <div class="rent-ok-page__iam-h-divider spacer-v--s"></div>
        <div class="flex justify-content-center spacer-v--s">
          <a href="@verificationUrl" class="btn-medium header accent-dark">@Translator.TranslateText("LBL_ROK_LAN_SECTION_1_CTA")</a>
        </div>
      </div>

      <div class="rent-ok-page__iam-box padding-m text-center spacer-v--s col-span-9--m-down">
        <div class="section-subtitle">
          @Translator.TranslateText("LBL_ROK_LAN_SECTION_2_TITLE")
        </div>
        <div class="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_2_CONTENT_1")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
        <div class="rent-ok-page__iam-h-divider spacer-v--s"></div>
        <div class="spacer-v--s rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_2_CONTENT_2")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
        <div class="spacer-v--s rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_2_CONTENT_3")</div>
        <div class="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_2_CONTENT_4")</div>
      </div>

      <div class="rent-ok-page__iam-box padding-m text-center spacer-v--s col-span-9--m-down">
        <div class="section-subtitle">
          @Translator.TranslateText("LBL_ROK_LAN_SECTION_3_TITLE")
        </div>
        <div class="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_3_CONTENT_1")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
        <div class="rent-ok-page__iam-h-divider spacer-v--s"></div>
        <div class="spacer-v--s rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_LAN_SECTION_3_CONTENT_2")</div>
        <div class="padding-h--s spacer-v--s">
          img
        </div>
      </div>
    </>
  );

  const iamTenant = (
    <>
      <div className="rent-ok-page__iam-box rent-ok-page__iam-box--inactive padding-m text-center col-span-9--m-down">
        <div className="section-subtitle">@Translator.TranslateText("LBL_ROK_TEN_SECTION_1_TITLE")</div>
        <div className="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_TEN_SECTION_1_CONTENT_1")</div>
        <div className="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_TEN_SECTION_1_CONTENT_2")</div>
        <div className="padding-h--s spacer-v--s">
          img
        </div>
      </div>

      <div className="rent-ok-page__iam-box rent-ok-page__iam-box--inactive padding-m text-center spacer-v--s col-span-9--m-down">
        <div className="section-subtitle">@Translator.TranslateText("LBL_ROK_TEN_SECTION_2_TITLE")</div>
        <div className="rent-ok-page__iam-content">@Translator.TranslateText("LBL_ROK_TEN_SECTION_2_CONTENT_1")</div>
        <div className="padding-h--s spacer-v--s">
          img
        </div>
        <div className="spacer-v--s">@Translator.TranslateText("LBL_ROK_TEN_SECTION_2_CONTENT_2")</div>
      </div>

      <div className="rent-ok-page__iam-box rent-ok-page__iam-box--inactive padding-m text-center spacer-v--s col-span-9--m-down">
        <div className="section-subtitle">@Translator.TranslateText("LBL_ROK_TEN_SECTION_3_TITLE")</div>
        <div className="rent-ok-page__iam-content">@Html.Raw(Translator.TranslateText("LBL_ROK_TEN_SECTION_3_CONTENT_1"))</div>
        <div className="padding-h--s spacer-v--s">
          img
        </div>
        <div className="rent-ok-page__iam-h-divider spacer-v--s"></div>
        <div className="rent-ok-page__iam-content spacer-v--s">@Translator.TranslateText("LBL_ROK_TEN_SECTION_3_CONTENT_2")</div>
        <div className="padding-h--s spacer-v--s">
          img
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container grid spacer-v--l spacer-v--m--s">
        <div className="col-span-12 flex justify-content-center">
          <Image src={LogoImage} />
        </div>
      </div>
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
      <div className={`${styles['iam']} container padding-v--xxl-1 padding-v--xl--m-down grid no-col-gap no-row-gap`}>
        <div className="col-span-12 text-center text-l">{t('iam.title')}</div>
        <div className="spacer-v--l col-span-12"></div>
        <button className={`${styles['iam-landlord-button']} padding-s padding-xs--m-down primary btn col-span-5 col-span-4--m col-span-2--s full-width`}>
          {t('landlord', { ns: 'common' })}
        </button>
        <button className={`${styles['iam-tenant-button']} padding-s padding-xs--m-down btn col-start-8 col-span-5 col-start-6--m col-span-4--m col-start-3--s col-span-2--s  full-width`}>
          {t('tenant', { ns: 'common' })}
        </button>
        <div className="spacer-v--l col-span-12"></div>
        <div className={`${styles['iam-number-container']} hide--m-down`}>
          <div className={styles['iam-number-h-connector']}></div>
          <div className={styles['iam-number-circle']}>1</div>
          <div className={styles['iam-number-v-connector']}></div>
        </div>
        <div className={`${styles['iam-number-container']} spacer-v--s hide--m-down`}>
          <div className={styles['iam-number-h-connector']}></div>
          <div className={styles['iam-number-circle']}>2</div>
          <div className={styles['iam-number-v-connector']}></div>
        </div>
        <div className={`${styles['iam-number-container']} spacer-v--s hide--m-down`}>
          <div className={styles['iam-number-h-connector']}></div>
          <div className={styles['iam-number-circle']}>3</div>
        </div>
        {iamLandlord}
      </div>
    </>
  );
};
