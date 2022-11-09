import classNames from "classnames";
import { useTranslation } from "next-i18next";

import Script from "next/script";

import SearchWrapperStyles from "../home.module.scss";
// import CommonStyles from "@styles/full.module.scss";
// import SearchStyles from "@styles/components/Search/SearchBar.scss";

const SearchWrapper = () => {
  const { t } = useTranslation(["home", "common"]);
  const SearchWrapperJSX = () => {
    return (
      <div className={SearchWrapperStyles["search-wrapper"]}>
        {/* @* SEARCH *@ */}
        <div className="grid container" id="head">
          <div className="row" id="above-search">
            <div className="full-width">
              <div className="grid">
                <div className="grid-item col-span-4 card--large color-background-secondary-light-1 border-radius--no-bl section-title color-text-light ">
                  {t("header-title")}
                </div>
              </div>
            </div>
          </div>

          <div
            className="row search-block color-background border-radius--m"
            id="search"
          >
            {/* @using (Html.BeginFormLocalized("PerformSearchAllAdverts", "SearchRooms", FormMethod.Post, new { @id = "SearchForm" }))
            {
                @Html.Hidden("PageNumber", Model.RoomSearch.PageNumber)
                @Html.Hidden("DontFecthEarlyBird", Model.RoomSearch.DontFecthEarlyBird)
                @Html.Hidden("SearchResults.SearchView", Model.RoomSearch.SearchResults.SearchView)
                @Html.Hidden("SearchResults.ResultType", "Search")
                @Html.Hidden("IsNoResultsPage", Model.RoomSearch.IsNoResultsPage)
                @Html.Hidden("SearchLanguageId", LocalizationHelper.GetUserLanguage())
                @Html.Partial("~/Views/Redesign/Components/Search/_SearchBar.cshtml", Model.RoomSearch.SearchBar)

            } */}
            <form
              action="/en/SearchRooms/PerformSearchAllAdverts"
              id="SearchForm"
              method="post"
              noValidate="novalidate"
            >
              <input
                id="PageNumber"
                name="PageNumber"
                type="hidden"
                value="1"
              />
              <input
                id="DontFecthEarlyBird"
                name="DontFecthEarlyBird"
                type="hidden"
                value="False"
              />
              <input
                id="SearchResults_SearchView"
                name="SearchResults.SearchView"
                type="hidden"
                value="Tile"
              />
              <input
                id="SearchResults_ResultType"
                name="SearchResults.ResultType"
                type="hidden"
                value="Search"
              />
              <input
                id="IsNoResultsPage"
                name="IsNoResultsPage"
                type="hidden"
                value="False"
              />
              <input
                id="SearchLanguageId"
                name="SearchLanguageId"
                type="hidden"
                value="2"
              />

              <div className="search-block-inner full-width box-shadow border-radius--s">
                <div className="grid">
                  <div className="grid-item col-span-4 select-prepend  city-select-wrapper">
                    <div className="tag tag--m border-radius--m border-radius--no-bl no-match-error color-background-warning color-text-light box-shadow">
                      City or postal code is not recognized
                    </div>
                    <i className="select-prepend-icon location icon-m color-background-secondary"></i>
                    <select
                      className="select-className single-select-search select-city hide select2-hidden-accessible"
                      id="LocationText"
                      name="LocationText"
                      style={{ width: "100%" }}
                      aria-label="LocationText"
                      data-select2-id="LocationText"
                      tabIndex="-1"
                      aria-hidden="true"
                    ></select>
                    <span
                      className="select2 select2-container select2-container--kamernet city-input"
                      dir="ltr"
                      data-select2-id="1"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single hide-dropdown-selector"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-LocationText-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            aria-disabled="true"
                            aria-label="undefined"
                            id="select2-LocationText-container"
                            role="textbox"
                            aria-readonly="true"
                          >
                            <span
                              aria-disabled="true"
                              className="select2-selection__placeholder"
                            >
                              City or postal code
                            </span>
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <select
                      className="select-className embed-select select2-hidden-accessible"
                      data-for="RadiusId"
                      id="RadiusId__"
                      name="RadiusId[]"
                      data-select2-id="RadiusId__"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option selected="selected" value="1" data-select2-id="3">
                        + 0 km
                      </option>
                      <option value="2">+ 1 km</option>
                      <option value="3">+ 2 km</option>
                      <option value="4">+ 5 km</option>
                      <option value="5">+ 10 km</option>
                      <option value="7">+ 20 km</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--kamernet-embed"
                      dir="ltr"
                      data-select2-id="2"
                      style={{ width: "83px" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-RadiusId__-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            aria-disabled="true"
                            aria-label="undefined"
                            id="select2-RadiusId__-container"
                            role="textbox"
                            aria-readonly="true"
                            title="+ 0 km"
                          >
                            + 0 km
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>{" "}
                  </div>
                  <div className="grid-item col-span-3 select-prepend select-checkbox col-span-4--m row--s ">
                    <i className="select-prepend-icon home icon-m color-background-secondary"></i>

                    <select
                      className="select-className single-select select-room-type hide select2-hidden-accessible"
                      data-for="RoomTypeId"
                      id="RoomTypeId"
                      multiple=""
                      name="RoomTypeId"
                      data-select2-id="RoomTypeId"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option disabled="disabled" value="">
                        -
                      </option>
                      <option value="1">Room</option>
                      <option value="2">Apartment</option>
                      <option value="4">Studio</option>
                      <option value="8">Anti-squat</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--kamernet-checkbox"
                      dir="ltr"
                      data-select2-id="4"
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--multiple"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="-1"
                          aria-disabled="false"
                        >
                          <ul className="select2-selection__rendered">
                            <li className="select2-search select2-search--inline">
                              <input
                                className="select2-search__field"
                                type="search"
                                tabIndex="0"
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="none"
                                spellCheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                id="4qus0i"
                                placeholder="Property type"
                                style={{ width: "206.609px" }}
                                readOnly="readonly"
                              />
                              <label htmlFor="4qus0i">
                                &lrm;&lrm;&rlm;&rlm;&lrm; &lrm;
                              </label>
                            </li>
                          </ul>
                          <div className="search-gradient-overlay"></div>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <label htmlFor="RoomTypeId"></label>
                  </div>

                  <div className="grid-item col-span-2 select-prepend text-center col-span-4--m row--s ">
                    <i
                      className="select-prepend-icon value icon-m color-background-secondary"
                      style={{ display: "none" }}
                    ></i>
                    <span
                      className="select-prepend-icon"
                      aria-disabled="true"
                      id="placeholder-price"
                    >
                      max.
                    </span>

                    <select
                      className="select-className single-select select-price hide select2-hidden-accessible"
                      data-val="false"
                      data-val-number="The field RentalPriceId must be a number."
                      data-val-required="The RentalPriceId field is required."
                      id="RentalPriceId"
                      name="RentalPriceId"
                      data-select2-id="RentalPriceId"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option value=""></option>
                      <option value="1">€ 100</option>
                      <option value="2">€ 200</option>
                      <option value="3">€ 300</option>
                      <option value="4">€ 400</option>
                      <option value="5">€ 500</option>
                      <option value="6">€ 600</option>
                      <option value="7">€ 700</option>
                      <option value="8">€ 800</option>
                      <option value="9">€ 900</option>
                      <option value="10">€ 1.000</option>
                      <option value="11">€ 1.100</option>
                      <option value="12">€ 1.200</option>
                      <option value="13">€ 1.300</option>
                      <option value="14">€ 1.400</option>
                      <option value="15">€ 1.500</option>
                      <option value="16">€ 1.750</option>
                      <option value="17">€ 2.000</option>
                      <option value="18">€ 2.250</option>
                      <option value="19">€ 2.500</option>
                      <option value="20">€ 2.750</option>
                      <option value="21">€ 3.000</option>
                      <option value="22">€ 3.250</option>
                      <option value="23">€ 3.500</option>
                      <option value="24">€ 3.750</option>
                      <option value="25">€ 4.000</option>
                      <option value="26">€ 4.250</option>
                      <option value="27">€ 4.500</option>
                      <option value="28">€ 4.750</option>
                      <option value="29">€ 5.000</option>
                      <option value="30">€ 5.250</option>
                      <option value="31">€ 5.500</option>
                      <option value="32">€ 5.750</option>
                      <option
                        selected="selected"
                        value="33"
                        data-select2-id="6"
                      >
                        € 6.000
                      </option>
                      <option value="34">None</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--kamernet"
                      dir="ltr"
                      data-select2-id="5"
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-RentalPriceId-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            aria-disabled="true"
                            aria-label="undefined"
                            id="select2-RentalPriceId-container"
                            role="textbox"
                            aria-readonly="true"
                            title="€ 6.000"
                          >
                            € 6.000
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="RentalPriceId"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  <div className="grid-item col-span-2 select-prepend text-center col-span-4--m row--s ">
                    <i
                      className="select-prepend-icon m2 icon-m color-background-secondary"
                      style={{ display: "none" }}
                    ></i>
                    <span
                      className="select-prepend-icon"
                      aria-disabled="true"
                      id="placeholder-m2"
                    >
                      min.
                    </span>

                    <select
                      className="select-className single-select select-surface hide select2-hidden-accessible"
                      data-for="SurfaceId"
                      data-val="false"
                      data-val-number="The field SurfaceId must be a number."
                      data-val-required="The SurfaceId field is required."
                      id="SurfaceId"
                      name="SurfaceId"
                      data-select2-id="SurfaceId"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option value=""></option>
                      <option selected="selected" value="2" data-select2-id="8">
                        6 m2
                      </option>
                      <option value="3">8 m2</option>
                      <option value="4">10 m2</option>
                      <option value="5">12 m2</option>
                      <option value="6">14 m2</option>
                      <option value="7">16 m2</option>
                      <option value="8">18 m2</option>
                      <option value="9">20 m2</option>
                      <option value="10">22 m2</option>
                      <option value="11">24 m2</option>
                      <option value="12">26 m2</option>
                      <option value="13">28 m2</option>
                      <option value="14">30 m2</option>
                      <option value="15">32 m2</option>
                      <option value="16">34 m2</option>
                      <option value="17">36 m2</option>
                      <option value="18">38 m2</option>
                      <option value="19">40 m2</option>
                      <option value="20">45 m2</option>
                      <option value="21">50 m2</option>
                      <option value="22">60 m2</option>
                      <option value="23">70 m2</option>
                      <option value="24">80 m2</option>
                      <option value="25">90 m2</option>
                      <option value="26">100 m2</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--kamernet"
                      dir="ltr"
                      data-select2-id="7"
                      style={{ width: "auto" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-SurfaceId-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            aria-disabled="true"
                            aria-label="undefined"
                            id="select2-SurfaceId-container"
                            role="textbox"
                            aria-readonly="true"
                            title="6 m2"
                          >
                            6 m2
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      <span
                        className="dropdown-wrapper"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <span
                      className="field-validation-valid"
                      data-valmsg-for="SurfaceId"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  <div className="grid-item col-start-9--m row-start-1--m row-span-2--m row--s">
                    <button
                      className="btn-medium search-action primary full-width border-radius--no-bl border-radius--no-tl full-height--m"
                      id="btn-search"
                      aria-label="Search"
                    >
                      <i className="search icon-m color-background hide--s"></i>
                      <span
                        className="for-mobile-only color-text-light"
                        aria-disabled="true"
                      >
                        Search
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <input
                data-val="true"
                data-val-number="The field CityId must be a number."
                data-val-required="The CityId field is required."
                id="CityId"
                name="CityId"
                type="hidden"
                value="0"
              />
              <input id="CityName" name="CityName" type="hidden" value="" />
              <input
                data-val="true"
                data-val-number="The field PostalCodeId must be a number."
                data-val-required="The PostalCodeId field is required."
                id="PostalCodeId"
                name="PostalCodeId"
                type="hidden"
                value="0"
              />
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SearchWrapperJSX />
    </div>
  );
};

export default SearchWrapper;
