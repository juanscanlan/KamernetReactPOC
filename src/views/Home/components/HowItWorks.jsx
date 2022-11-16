import React from "react";

const HowItWorks = () => {
  const HowItWorksJSX = () => {
    return (
      <div
        class="color-background-secondary-light-3 spacer-v--xxl-1 padding-v--xl--s spacer-v--l--s"
        id="hiw"
      >
        <div class="container">
          <div class="grid">
            <div class="grid-item col-span-6 text-subtitle row--s">
              @hiwTitle
            </div>
            <div class="grid-item col-span-6 align-center-vertical align-right col-span-3--m col-span-2--s hide--s">
              <a
                href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.HowDoesItWork, new RouteValueDictionary(new { @variant = '' }))"
                class="underline"
              >
                @Translator.TranslateText("LBL_LEARN_MORE") >
              </a>
            </div>
          </div>
          <div class="grid spacer-v--m" id="hiw-cards">
            {/* @for (int i = 1; i <= 3; i++)
            {
                <div class="grid-item col-span-4">
                    <div class="card--large pointer" onclick="window.location.href='@NavigationHelper.GetFullRouteUrl(KamernetRoute.HowDoesItWork, new RouteValueDictionary(new { @variant = "" }))';">
                        <div class="card__head">
                            <div class="aspect-ratio-box ratio-1-1">
                                <picture>
                                    <source srcset="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/pages/home/hiw/hiw"+i+".webp")" type="image/webp">
                                    <source srcset="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/pages/home/hiw/hiw"+i+".png")" type="image/png">
                                    <img class="lazy border-radius--no-bl border-radius--l" loading="lazy" src="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/pages/home/hiw/hiw"+i+".png")" alt="How does it work?" width="300" height="300" />
                                </picture>
                            </div>
                        </div>
                        <div class="card__body section-subtitle">
                            @i. @Translator.TranslateText("LBL_LANDINGPAGE_SEARCH_HIW_CARD" + i + "_TITLE")
                        </div>
                        <div class="card__footer">
                            @Translator.TranslateText("LBL_LANDINGPAGE_SEARCH_HIW_CARD" + i + "_TEXT");
                        </div>
                    </div>
                </div>
            } */}
          </div>
        </div>
      </div>
    );
  };

  return <div>HowItWorks</div>;
};

export default HowItWorks;
