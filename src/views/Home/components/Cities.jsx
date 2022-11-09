import React from "react";

//import "@assets/Images/cities";

export const Cities = ({ t }) => {
  const getListings = () => {
    if (typeof window !== "undefined") {
      document.addEventListener("DOMContentLoaded", function () {
        var xhr = new XMLHttpRequest();
        xhr.onloadend = function () {
          if (xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            Object.keys(resp).forEach(function (key) {
              document.getElementById(key + "-count").innerHTML = resp[key];
            });
          }
        };
        xhr.open("GET", "/searchrooms/getroomscount?lang=x");
        xhr.send();
      });
    } else {
      console.log("failed");
    }
  };
  getListings();

  const cityNames = ["Amsterdam", "Utrecht", "Nijmegen", "Rotterdam"];

  //   const PopularJSX = () => {
  //     cityNames.map((city) => {
  //       return <div key={city}>{city}</div>;
  //     });
  //   };

  let popularJSX = cityNames.map((city, i) => {
    return (
      <a
        href={`https://acceptance.kamernet.nl/en/for-rent/rooms-${city}`}
        key={i}
        className="col-span-3 card-city no-padding no-shadow color-background pointer"
      >
        <div className="aspect-ratio-box ratio-16-9">
          <picture>
            <source
              srcSet={require(`@assets/Images/cities/${city}.webp`)}
              type="image/webp"
            />
            <source
              srcSet={`../../../assets/Images/cities/${city}.png`}
              type="image/png"
            />
            <img
              className="lazy"
              loading="lazy"
              src={`../../../assets/Images/cities/${city}.png`}
              alt="@city.Key"
              width="342"
              height="193"
            />
          </picture>
        </div>
        <div className="card__title spacer-v--s">{city}</div>
        <span className="text-bold">
          <span id="@city.Key-count">...</span> woningen
        </span>
        beschikbaar
      </a>
    );
  });

  const CitiesJSX = () => {
    return (
      <div className="container spacer-v--xxl-1 spacer-v--l--s" id="cities">
        {/* @*POPULAR CITIES*@ */}
        <div className="grid">
          <div className="col-span-6">
            <div className="section-title">{t("popular-cities.title")}</div>
          </div>
          <div className="grid-item col-span-6 align-right align-bottom col-span-3--m">
            <a
              href="@NavigationHelper.GetFullRouteUrl(KamernetRoute.Search)"
              className="underline right"
            >
              {t("popular-cities.link")}
            </a>
          </div>
        </div>
        <div className="grid spacer-v--l spacer-v--m--s" id="popular-cities">
          {/* @for (int i = 0; i < cityIDs.Count(); i++)
            {
                var city = cityIDs.ElementAt(i);
                <div className="col-span-3 card-city no-padding no-shadow color-background pointer"
                     onclick="window.location='@NavigationHelper.GetSearchRouteUrl(new SearchOptions() { RoomTypes = null, CityName = city.Key, SearchIn = SearchInTypeEnum.Rooms })';">
                    <div className="aspect-ratio-box ratio-16-9">
                        <picture>
                            <source srcSet="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".webp")" type="image/webp">
                            <source srcSet="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".png")" type="image/png">
                            <img className="lazy" loading="lazy" src="@StaticResourcesHelper.GetImageUrl("/content/images/redesign/cities/"+city.Key+".png")" alt="@city.Key" width="342" height="193" />
                        </picture>
                    </div>
                    <div className="card__title spacer-v--s">
                        @city.Key
                    </div>
                    <span className="text-bold">
                        <span id="@city.Key-count">...</span> woningen
                    </span>beschikbaar
                </div>
            } */}
          {/* <PopularJSX /> */}
          {popularJSX}
        </div>
      </div>
    );
  };
  return <CitiesJSX />;
};
