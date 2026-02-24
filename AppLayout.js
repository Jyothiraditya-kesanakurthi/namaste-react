import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREp4XUCKrTj3MRgLMBCqCUo98-zMq60QXy761stj1CWQ5b40skdgV_k-Y&s"></img>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const swiggyData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1006058",
          name: "Arambam - Flavours of South",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/31/07cb011e-95fa-4e31-a2ae-47154cac4bf1_7bef26ce-823d-4373-a2f6-cd908157bb01.jpg",
          locality: "Vidisha Towers",
          areaName: "Dwarka Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian", "Healthy Food"],
          avgRating: 4,
          veg: true,
          parentId: "581903",
          avgRatingString: "4.0",
          totalRatingsString: "523",
          promoted: true,
          adTrackingId:
            "cid=ef997308-1187-4c1a-a934-7a1cb53f10ab~p=4~adgrpid=ef997308-1187-4c1a-a934-7a1cb53f10ab#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1006058~plpr=COLLECTION~eid=a73edebe-3627-4a17-adc1-f169b330fc61~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 15,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "ef997308-1187-4c1a-a934-7a1cb53f10ab",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1006058&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "63149",
          name: "Paradise Biryani",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/13/5ca29d78-f12e-44ba-92c7-319f049fd1d3_63149.JPG",
          locality: "Siripuram",
          areaName: "Waltair Uplands",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Kebabs", "Hyderabadi"],
          avgRating: 4.3,
          parentId: "700",
          avgRatingString: "4.3",
          totalRatingsString: "37K+",
          promoted: true,
          adTrackingId:
            "cid=89bde086-a42d-4bd9-84b0-fb866586c3b3~p=5~adgrpid=89bde086-a42d-4bd9-84b0-fb866586c3b3#ag16~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=63149~plpr=COLLECTION~eid=18b805a0-8d1d-499e-9b5c-199994853c03~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "12K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "89bde086-a42d-4bd9-84b0-fb866586c3b3",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=63149&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "382401",
          name: "AB's - Absolute Barbecues",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/10/17/28aedf7d-8a2b-477b-9c4c-5214e04f6691_29b6410c-b033-402d-917b-d76e342f5961.jpg",
          locality: "Dwarka Nagar",
          areaName: "Dwaraka Nagar",
          costForTwo: "₹500 for two",
          cuisines: ["North Indian", "Barbecue", "Kebabs", "Biryani"],
          avgRating: 4,
          parentId: "387759",
          avgRatingString: "4.0",
          totalRatingsString: "1.5K+",
          promoted: true,
          adTrackingId:
            "cid=69f2cb47-a61b-4c4d-8717-e0c6ce95c72d~p=7~adgrpid=69f2cb47-a61b-4c4d-8717-e0c6ce95c72d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=382401~plpr=COLLECTION~eid=e9d6daa9-33bf-4602-93c5-b7c8e8558349~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "9.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "69f2cb47-a61b-4c4d-8717-e0c6ce95c72d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=382401&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "618074",
          name: "UBQ-Meals,Thalis & Bowls",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/2994dc30-d5d4-495d-a514-62c63c3631fc_618074.JPG",
          locality: "Waltair Road",
          areaName: "Waltair Uplands",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Barbecue",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 4.1,
          parentId: "617376",
          avgRatingString: "4.1",
          totalRatingsString: "1.2K+",
          promoted: true,
          adTrackingId:
            "cid=085d8852-d407-49ec-96bc-23d1f4ab6b8a~p=8~adgrpid=085d8852-d407-49ec-96bc-23d1f4ab6b8a#ag24~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=618074~plpr=COLLECTION~eid=ac86a2f4-df9c-4837-ab8f-7925f6977871~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 30,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "70% OFF",
            subHeader: "UPTO ₹130",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "085d8852-d407-49ec-96bc-23d1f4ab6b8a",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=618074&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "283335",
          name: "Express By Ab's",
          cloudinaryImageId: "c6d55b2602db9dd1bd6d8a6ec9221d1e",
          locality: "Uma Vinayagar",
          areaName: "Dwaraka Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Barbecue", "Kebabs", "Biryani"],
          avgRating: 4,
          parentId: "10320",
          avgRatingString: "4.0",
          totalRatingsString: "2.1K+",
          promoted: true,
          adTrackingId:
            "cid=051ee570-f8d4-4928-854a-ad4e173d060c~p=9~adgrpid=051ee570-f8d4-4928-854a-ad4e173d060c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=283335~plpr=COLLECTION~eid=1211cadb-7c2c-4e89-9b28-ffa0966578d9~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "051ee570-f8d4-4928-854a-ad4e173d060c",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=283335&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "639530",
          name: "Dum Safar Biryani",
          cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
          locality: "Siripuram",
          areaName: "Suryabagh",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "barbeque",
          ],
          avgRating: 4,
          parentId: "351013",
          avgRatingString: "4.0",
          totalRatingsString: "1.4K+",
          promoted: true,
          adTrackingId:
            "cid=d3af66ea-dcfb-404a-a147-6dcfd7b5b3ac~p=11~adgrpid=d3af66ea-dcfb-404a-a147-6dcfd7b5b3ac#ag23~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=639530~plpr=COLLECTION~eid=8e21013d-4739-490f-b3f7-2197955f82de~srvts=1771854127722~collid=83649",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-02-23 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "d3af66ea-dcfb-404a-a147-6dcfd7b5b3ac",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=639530&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestCards = (Props) => {
  const { resData } = Props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, areaName } =
    resData.card.card.info; // this is deconstructing in js

  return (
    <>
      <div className="res-cards">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>

        <h6>{name}</h6>
        <h6>{areaName}</h6>
        <h6>{cuisines}</h6>
        <h6>{avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="Search Items"></input>
      </div>
      <div className="next">
        {swiggyData.map((restarunt) => (
          <RestCards key={restarunt.card.card.info.id} resData={restarunt} />
        ))}
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const result = createRoot(document.getElementById("root"));

result.render(<AppLayout />);
