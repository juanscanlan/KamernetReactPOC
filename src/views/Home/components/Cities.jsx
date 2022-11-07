import React from "react";

export const Cities = ({ t }) => {
  const CitiesJSX = () => {
    return (
      <div class="container spacer-v--xxl-1 spacer-v--l--s" id="cities">
        {/* @*POPULAR CITIES*@ */}
        <div class="grid">
          <div class="col-span-6">
            <div class="section-title">{t("popular-cities.title")}</div>
          </div>
          <div class="grid-item col-span-6 align-right align-bottom col-span-3--m">
            <a
              href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)"
              class="underline right"
            >
              {t("popular-cities.link")}
            </a>
          </div>
        </div>
        <div class="grid spacer-v--l spacer-v--m--s" id="popular-cities">
          {/* @for (int i = 0; i < cityIDs.Count(); i++)
            {
                var city = cityIDs.ElementAt(i);
                <div class="col-span-3 card-city no-padding no-shadow color-background pointer"
                     onclick="window.location='@NavigationHelper.GetSearchRouteUrl(new SearchOptions() { RoomTypes = null, CityName = city.Key, SearchIn = SearchInTypeEnum.Rooms })';">
                    <div class="aspect-ratio-box ratio-16-9">
                        <picture>
                            <source srcset="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".webp")" type="image/webp">
                            <source srcset="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".png")" type="image/png">
                            <img class="lazy" loading="lazy" src="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".png")" alt="@city.Key" width="342" height="193" />
                        </picture>
                    </div>
                    <div class="card__title spacer-v--s">
                        @city.Key
                    </div>
                    <span class="text-bold">
                        <span id="@city.Key-count">...</span> woningen
                    </span>beschikbaar
                </div>
            } */}
        </div>
      </div>
    );
  };
  return <CitiesJSX />;
};
