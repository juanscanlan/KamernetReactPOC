import { useTranslation } from "next-i18next";
import React from "react";

const Advertise = () => {
  const { t } = useTranslation(["home", "common"]);
  const AdvertiseJSX = () => {
    return (
      <div class="padding-v--l hide--s color-background-secondary-light-3">
        <div class="grid container">
          <div class="grid-item col-span-8 dir-column col-span-6--m">
            <h2 class="section-title no-margin">{t("sub-header.title")}</h2>
            <p class="no-margin">{t("sub-header.paragraph")}</p>
            <a
              class="btn-medium accent-dark right spacer-v--s"
              href="@NavigationHelper.GetLandlordLandingPageUrl()"
              aria-disabled="true"
            >
              {t("place-advert", { ns: "common" })}
            </a>
          </div>
          <div class="grid-item col-span-4 align-right col-span-3--m">
            <a
              class="underline"
              href="@NavigationHelper.GetLandlordLandingPageUrl()"
              aria-disabled="true"
            >
              {t("sub-header.link")}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <AdvertiseJSX />
      <div>Yeet</div>
    </div>
  );
};

export default Advertise;
