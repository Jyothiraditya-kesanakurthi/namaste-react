const ResMenu = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "99 Slice by Olio Pizza",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "1335739",
              name: "99 Slice by Olio Pizza",
              city: "Vizag",
              slugs: {
                restaurant:
                  "99-slice-by-olio-pizza-vidisha-towers-dwarka-nagar",
                city: "vizag",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/ac7df771-a24b-4de2-afc6-e3d24ade4967_1335739.JPG",
              locality: "Vidisha Towers",
              areaName: "Dwaraka Nagar",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["Pizzas", "Pastas"],
              avgRating: 4.5,
              feeDetails: {
                restaurantId: "1335739",
                fees: [{}],
              },
              parentId: "759939",
              avgRatingString: "4.5",
              totalRatingsString: "9 ratings",
              sla: {
                restaurantId: "1335739",
                deliveryTime: 37,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 0.4,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 470,
                slaString: "35-45 MINS",
                lastMileTravelString: "0.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-03-25 23:59:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Get every item @ 98",
                shortDescriptionList: [
                  {
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 98",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 98",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "99-slice-by-olio-pizza-vidisha-towers-dwarka-nagar",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "First floor, back side, No. 47-14-10, Plot 221/B, Vidisha Towers, Dwaraka Nagar Main Road, Visakhapatnam-530016, Andhra Pradesh",
                },
                {
                  title: "Cuisines",
                  message: "Pizzas,Pastas",
                },
              ],
              totalRatings: 9,
              aggregatedDiscountInfoV2: {
                header: "Get every item @ 98",
                shortDescriptionList: [
                  {
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 98",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "Get every item @ 98",
                    discountType: "FinalPrice",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 12,
                  discountInfo: {
                    discountType: "FinalPrice",
                    value: 1499,
                  },
                  unlockedMessage: "Deal of the Day unlocked!",
                  minItemCount: 1,
                  maxItemCount: 1,
                  type: "SILD",
                  nudgeTagInfo: {
                    title: "Deal of the Day",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  logoCtx: {},
                  movComputationType: "MOV_COMPUTATION_TYPE_DISCOUNTED_PRICE",
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/1335739",
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png",
                },
                freedelMessage: "Free delivery on orders above ₹199",
              },
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "17.72643393328194,83.30646780940836",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              requestContexts: ["enable_ecosaver", "99store"],
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "BUY 1 GET 1 FREE",
                      offerTagColor: "#E46D47",
                      offerIds: ["b2877307-3d2c-410e-9d14-cd13b2382a36"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE BUY1GET1",
                      description: "ON SELECT ITEMS",
                      offerType: "offers",
                      restId: "1335739",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE BUY1GET1",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "ITEMS AT ₹98",
                      offerTag: "DEAL OF DAY",
                      offerTagColor: "#E46D47",
                      offerIds: ["e3dcae34-7829-490e-9dc4-0c61e59a82ec"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      description: "ON SELECT ITEMS |",
                      offerType: "offers",
                      restId: "1335739",
                      offerLogo: "offers/DealRush_Offer_Icon.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹125 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["07458ad1-ff3b-475e-a23e-2e296a73674a"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAVORFUL",
                      description: "ABOVE ₹279",
                      offerType: "offers",
                      restId: "1335739",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAVORFUL",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹150 OFF",
                      offerTag: "FLAT DEAL",
                      offerTagColor: "#E46D47",
                      offerIds: ["dae47dfe-b936-4a36-b26f-82866176b686"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE FLAT150",
                      description: "ABOVE ₹449",
                      offerType: "offers",
                      restId: "1335739",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE FLAT150",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "FLAT ₹125 OFF",
                      offerTagColor: "#E46D47",
                      offerIds: [
                        "fba0334c-e416-41d8-96a4-8e312eed92ea",
                        "f2d39006-19f0-41c9-8925-655e99e85d3e",
                      ],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE DUOJOY",
                      offerType: "offers",
                      restId: "1335739",
                      offerLogo: "offers/generic",
                      secondaryDiscountCallout: "EXTRA ₹30 OFF ON NEXT ORDER",
                      descriptionTextColor: "#7302060C",
                      primaryDescription: "USE DUOJOY",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      offersFilter: {
                        attributes: {
                          displayText: "Buy 1 Get 1",
                        },
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Drinks & Desserts",
                      categories: [
                        {
                          title: "Beverages",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195173827",
                                  name: "Thums Up",
                                  category: "Drinks & Desserts",
                                  description: "Serves 1",
                                  imageId: "x6kbfk1ne1udfxmmkma4",
                                  inStock: 1,
                                  isVeg: 1,
                                  price: 6000,
                                  variants: {},
                                  variantsV2: {},
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                    portionSize: "Serves 1",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  itemBadge: {},
                                  badgesV2: {},
                                  ratings: {
                                    aggregatedRating: {
                                      rating: "5.0",
                                      ratingCount: "1 rating",
                                      ratingCountV2: "1",
                                    },
                                    ratingsPresentationConfig: {
                                      bgGradient: {
                                        colours: ["#C8F9E5", "#00FFFFFF"],
                                        gradientDirection:
                                          "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                      },
                                      ratingIconColor: "rating_very_good",
                                      ratingTextColor: "rating_very_good",
                                      ratingCountTextColor: "rating_very_good",
                                      ratingFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                      ratingCountFontName:
                                        "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                    },
                                  },
                                  itemPriceStrikeOff: true,
                                  parentId: "119048163",
                                  menuFilterIds: ["VEG", "offer", "toprated"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72432996",
                        },
                      ],
                      image: "x6kbfk1ne1udfxmmkma4",
                      categoryId: "72432995",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Classic Pizza Slice",
                      categories: [
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130800",
                                  name: "Farmhouse Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A veggie-loaded farmhouse slice topped with fresh flavors and generous cheese on a smoky crust",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/c60b272c-6893-4ac1-b4a6-863c95efbb56_75dc0fd1-e436-4351-a0c6-2ed8282fe6bb.png",
                                  isVeg: 1,
                                  price: 34900,
                                  finalPrice: 17900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595617",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595618",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595619",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "c29d8353-b5c4-4da0-bbf1-dd385110fe75",
                                  ],
                                  parentId: "118997507",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130801",
                                  name: "Fiery Jalapeno & Paprika Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A bold, spicy slice topped with jalapeños and smoky paprika over gooey cheese.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/586a63dc-c7ec-4bdf-97f4-6bf3ff56828d_fbfd8883-4886-4bf1-ac14-80ba5f3e326d.png",
                                  isVeg: 1,
                                  price: 19900,
                                  finalPrice: 9800,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595621",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595622",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595623",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "e3dcae34-7829-490e-9dc4-0c61e59a82ec",
                                  ],
                                  parentId: "118997509",
                                  offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                  menuFilterIds: ["bestseller", "VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130807",
                                  name: "Margherita Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A classic slice of mozzarella melt on a rich tomato base with a perfectly baked golden crust.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/0580df0f-bb46-43fe-8b00-e7b7e1954376_381debfb-b53c-4d77-aafa-f534d711bd1b.png",
                                  isVeg: 1,
                                  price: 19900,
                                  finalPrice: 9800,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595639",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595640",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595641",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "e3dcae34-7829-490e-9dc4-0c61e59a82ec",
                                  ],
                                  parentId: "118997524",
                                  offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                  menuFilterIds: ["bestseller", "VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130809",
                                  name: "Mexican Wave Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A zesty Mexican-style slice bursting with greens and asli cheese.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/5d43b013-82e0-4037-b276-c9098923a227_13950bcb-e140-454d-8bb0-3f1b9db0e375.png",
                                  isVeg: 1,
                                  price: 29900,
                                  finalPrice: 14800,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595647",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595648",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595649",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "455f244e-3264-4376-b2ef-9bc98a39d6c0",
                                  ],
                                  parentId: "118997528",
                                  offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130828",
                                  name: "Ultimate Spinach Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A creamy spinach-loaded slice layered with rich, asli cheese on a smoky crust",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/42f0d748-5474-4544-b862-6a4a6ba90fb4_f673b900-4a9a-496c-a29f-bae2914c27b7.png",
                                  isVeg: 1,
                                  price: 29900,
                                  finalPrice: 14900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595683",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595684",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595685",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  cartContext: "quick_prep",
                                  offerIds: [
                                    "ac7470d7-696b-4ace-982e-7f737162e41e",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "118997562",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72414880",
                        },
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130795",
                                  name: "BBQ Chicken Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A smoky BBQ chicken slice with rich sauce and cheesy melt on a smoky crust.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/1daa8908-1f7a-4eb3-91df-a74bb0befdff_6b80f5bd-4354-4ddf-8a2c-7d71e41b5821.png",
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595597",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595598",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595599",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      title: "Buy 1 Get 1",
                                      textColor: "#DB6742",
                                      backgroundColor: "#FAE8E3",
                                      matchText: "B1G1",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "B1G1",
                                  itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "b2877307-3d2c-410e-9d14-cd13b2382a36",
                                  ],
                                  parentId: "118997497",
                                  menuFilterIds: ["B1G1", "NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130821",
                                  name: "Peri Peri Chicken Giant Pizza Slice (24 cm)",
                                  category: "Classic Pizza Slice",
                                  description:
                                    "A fiery peri peri chicken slice layered over cheesy mozzarella and a smoky crust",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/2d94e853-a700-446e-b9f6-0d03cf786ece_236df722-ad99-4bb4-aaa3-0906538d7413.png",
                                  price: 29900,
                                  finalPrice: 14800,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595671",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595672",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595673",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {
                                    text: "Bestseller",
                                    textColor: "#ffffff",
                                    topBackgroundColor: "#d53d4c",
                                    bottomBackgroundColor: "#b02331",
                                  },
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  isBestseller: true,
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "455f244e-3264-4376-b2ef-9bc98a39d6c0",
                                  ],
                                  parentId: "118997552",
                                  offerCategory: "OFFER_CATEGORY_DEAL_RUSH",
                                  menuFilterIds: [
                                    "bestseller",
                                    "NONVEG",
                                    "offer",
                                  ],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72414879",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/c60b272c-6893-4ac1-b4a6-863c95efbb56_75dc0fd1-e436-4351-a0c6-2ed8282fe6bb.png",
                      categoryId: "72414870",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      title: "Signature Pizza Slice",
                      categories: [
                        {
                          title: "Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130798",
                                  name: "Country Feast Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A wholesome feast slice packed with capsicum, olives, roasted mushroom, red paprika and cheesy goodness.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/228dcf43-70f2-4875-a23c-1272e3c3cd6e_a497e9f5-fff2-41b4-a8a0-c8c0656e9097.png",
                                  isVeg: 1,
                                  price: 34900,
                                  finalPrice: 17900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595609",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595610",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595611",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "c29d8353-b5c4-4da0-bbf1-dd385110fe75",
                                  ],
                                  parentId: "118997503",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130799",
                                  name: "Farmer's Pick Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A farm-fresh veggie slice layered with broccoli, cherry tomatoes, baby corn, mushroom and bell peppers for a cheesy indulgence",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/2febba3f-47ac-4f73-ba55-024f8a4e375d_8fef286e-d94b-4127-88d8-37a134c20341.png",
                                  isVeg: 1,
                                  price: 39900,
                                  finalPrice: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595613",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595614",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595615",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "f1ce2232-05f7-4318-b230-15020265b365",
                                  ],
                                  parentId: "118997505",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130802",
                                  name: "Five Pepper Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A fiery five-pepper slice delivering bold heat and flavor in every bite.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/c3d26b93-62d9-4f00-a78c-371178a3695a_e6b239c1-753a-477f-9610-4493715241fe.png",
                                  isVeg: 1,
                                  price: 29900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595625",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595626",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595627",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      title: "Buy 1 Get 1",
                                      textColor: "#DB6742",
                                      backgroundColor: "#FAE8E3",
                                      matchText: "B1G1",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "B1G1",
                                  itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "b2877307-3d2c-410e-9d14-cd13b2382a36",
                                  ],
                                  parentId: "118997511",
                                  menuFilterIds: ["B1G1", "VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130808",
                                  name: "Mediterranean Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A vibrant Mediterranean-style slice with olives, herbs, cherry tomatoes and rich cheese.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/36845db7-34de-461f-93d5-e6c7e3d0bacf_597bf100-5ab6-45f5-9fb3-e23fa6eb1610.png",
                                  isVeg: 1,
                                  price: 39900,
                                  finalPrice: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595643",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595644",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595645",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "f1ce2232-05f7-4318-b230-15020265b365",
                                  ],
                                  parentId: "118997526",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130829",
                                  name: "Veg Overload Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "An indulgent veg-loaded slice stacked with fresh toppings, real cheese and a smoky crust",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/606c2013-f15e-4ad3-9b24-3d1053f5142e_a4713eff-fe98-4c72-9ee7-72f24c65f26e.png",
                                  isVeg: 1,
                                  price: 29900,
                                  finalPrice: 14900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595687",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595688",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595689",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "VEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  cartContext: "quick_prep",
                                  offerIds: [
                                    "ac7470d7-696b-4ace-982e-7f737162e41e",
                                  ],
                                  isNinetyninestoreItem: true,
                                  parentId: "118997564",
                                  menuFilterIds: ["VEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72414878",
                        },
                        {
                          title: "Non Veg",
                          itemCards: [
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130794",
                                  name: "Bacon States Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A smoky bacon and roasted chicken slice layered over gooey, golden-baked cheese.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/25440132-1158-4bd8-8d80-f898dd60c16d_e4c0d6ee-5569-4ffa-89e3-98c41b8d0b48.png",
                                  price: 39900,
                                  finalPrice: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595593",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595594",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595595",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "f1ce2232-05f7-4318-b230-15020265b365",
                                  ],
                                  parentId: "118997495",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130811",
                                  name: "Non Veg Overload Royal Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A fully loaded non-veg slice stacked with chicken tikka, peri peri chicken, garlic herb chicken, BBQ chicken, tandoori chicken and rich mozzarella.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/e78fdeea-4366-41f4-a2ce-ddbdbb90d960_f880d18f-b994-40ef-bd64-4be436059513.png",
                                  price: 39900,
                                  finalPrice: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595655",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595656",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595657",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "f1ce2232-05f7-4318-b230-15020265b365",
                                  ],
                                  parentId: "118997533",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                            {
                              card: {
                                "@type":
                                  "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                info: {
                                  id: "195130827",
                                  name: "Tropical Chicken Pineapple Giant Pizza Slice (24 cm)",
                                  category: "Signature Pizza Slice",
                                  description:
                                    "A tropical-style slice with juicy chicken and sweet pineapple chunks.",
                                  imageId:
                                    "FOOD_CATALOG/IMAGES/CMS/2026/2/22/fdc8e492-254a-4dad-be61-acb40d644d60_eeadb6e9-963f-4afc-abac-19496f04fa94.png",
                                  price: 39900,
                                  finalPrice: 19900,
                                  variants: {},
                                  variantsV2: {},
                                  addons: [
                                    {
                                      groupId: "276595679",
                                      groupName: "Add a dip",
                                      choices: [
                                        {
                                          id: "145050674",
                                          name: "Cheesy Dip",
                                          price: 4000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 1,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595680",
                                      groupName: "Add a drink",
                                      choices: [
                                        {
                                          id: "145050702",
                                          name: "Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050700",
                                          name: "Diet Coke",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050668",
                                          name: "Thums Up",
                                          price: 6000,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050675",
                                          name: "Lemon Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050671",
                                          name: "Peach Iced Tea",
                                          price: 8500,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                    {
                                      groupId: "276595681",
                                      groupName: "Add a side",
                                      choices: [
                                        {
                                          id: "145050672",
                                          name: "Signature Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                        {
                                          id: "145050679",
                                          name: "Peri Peri Garlic Knots",
                                          price: 11900,
                                          inStock: 1,
                                          isVeg: 1,
                                          isEnabled: 1,
                                        },
                                      ],
                                      maxAddons: 2,
                                      maxFreeAddons: -1,
                                    },
                                  ],
                                  nextAvailableAtMessage:
                                    "Next available at 7:38 pm, today",
                                  itemAttribute: {
                                    vegClassifier: "NONVEG",
                                  },
                                  ribbon: {},
                                  type: "ITEM",
                                  offerTags: [
                                    {
                                      matchText: "SILD",
                                    },
                                  ],
                                  itemBadge: {},
                                  badgesV2: {},
                                  itemNudgeType: "FinalPrice",
                                  ratings: {
                                    aggregatedRating: {},
                                  },
                                  itemPriceStrikeOff: true,
                                  offerIds: [
                                    "f1ce2232-05f7-4318-b230-15020265b365",
                                  ],
                                  parentId: "118997560",
                                  menuFilterIds: ["NONVEG", "offer"],
                                },
                                analytics: {},
                                hideRestaurantDetails: true,
                              },
                            },
                          ],
                          subtitleSuffix: {},
                          categoryId: "72414877",
                        },
                      ],
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/228dcf43-70f2-4875-a23c-1272e3c3cd6e_a497e9f5-fff2-41b4-a8a0-c8c0656e9097.png",
                      categoryId: "72414869",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chef's Special Pepperoni Pizza Slice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130797",
                              name: "Chicken Pepperoni Giant Pizza Slice (24 cm)",
                              category: "Chef's Special Pepperoni Pizza Slice",
                              description:
                                "A flavor-packed chicken pepperoni slice with a generous cheese melt and a golden smoky crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/fd1aaf39-2f22-482d-a3fd-195a2e387dd3_7fdc592f-f3c3-4032-a7d0-efbe8fda83c4.png",
                              price: 39900,
                              finalPrice: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595605",
                                  groupName: "Add a dip",
                                  choices: [
                                    {
                                      id: "145050674",
                                      name: "Cheesy Dip",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595606",
                                  groupName: "Add a drink",
                                  choices: [
                                    {
                                      id: "145050702",
                                      name: "Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050700",
                                      name: "Diet Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050668",
                                      name: "Thums Up",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050675",
                                      name: "Lemon Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050671",
                                      name: "Peach Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595607",
                                  groupName: "Add a side",
                                  choices: [
                                    {
                                      id: "145050672",
                                      name: "Signature Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050679",
                                      name: "Peri Peri Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f1ce2232-05f7-4318-b230-15020265b365",
                              ],
                              parentId: "118997501",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130819",
                              name: "Pepperoni Bacon Giant Pizza Slice (24 cm)",
                              category: "Chef's Special Pepperoni Pizza Slice",
                              description:
                                "A double-delish trip of a slice topped with pepperoni and crispy bacon over molten cheese.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/797b89f7-7447-4dfc-a4f7-4e55df71bc7a_860ce53f-6fda-4770-a8bc-2472835e8b9b.png",
                              price: 39900,
                              finalPrice: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595663",
                                  groupName: "Add a dip",
                                  choices: [
                                    {
                                      id: "145050674",
                                      name: "Cheesy Dip",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595664",
                                  groupName: "Add a drink",
                                  choices: [
                                    {
                                      id: "145050702",
                                      name: "Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050700",
                                      name: "Diet Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050668",
                                      name: "Thums Up",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050675",
                                      name: "Lemon Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050671",
                                      name: "Peach Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595665",
                                  groupName: "Add a side",
                                  choices: [
                                    {
                                      id: "145050672",
                                      name: "Signature Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050679",
                                      name: "Peri Peri Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f1ce2232-05f7-4318-b230-15020265b365",
                              ],
                              parentId: "118997548",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130823",
                              name: "Pork Pepperoni Giant Pizza Slice (24 cm)",
                              category: "Chef's Special Pepperoni Pizza Slice",
                              description:
                                "A classic pork pepperoni slice with rich tomato sauce on a rich cheesy, smoky crust.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/75cff3a8-84e8-4e5a-825a-44ccc74c7702_16c84402-37e5-4444-9bb3-56e7ecb44333.png",
                              price: 39900,
                              finalPrice: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595675",
                                  groupName: "Add a dip",
                                  choices: [
                                    {
                                      id: "145050674",
                                      name: "Cheesy Dip",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 1,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595676",
                                  groupName: "Add a drink",
                                  choices: [
                                    {
                                      id: "145050702",
                                      name: "Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050700",
                                      name: "Diet Coke",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050668",
                                      name: "Thums Up",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050675",
                                      name: "Lemon Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050671",
                                      name: "Peach Iced Tea",
                                      price: 8500,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                                {
                                  groupId: "276595677",
                                  groupName: "Add a side",
                                  choices: [
                                    {
                                      id: "145050672",
                                      name: "Signature Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050679",
                                      name: "Peri Peri Garlic Knots",
                                      price: 11900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f1ce2232-05f7-4318-b230-15020265b365",
                              ],
                              parentId: "118997555",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/fd1aaf39-2f22-482d-a3fd-195a2e387dd3_7fdc592f-f3c3-4032-a7d0-efbe8fda83c4.png",
                      categoryId: "72414871",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Make your Own Pizza Slice",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130805",
                              name: "Make your Own Non Veg Giant Pizza Slice (24 cm)",
                              category: "Make your Own Pizza Slice",
                              description:
                                "Build-your-own slice stacked with your favourite combinations on a signature base of real cheese and a smoky crust",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/aa1afd29-5d7d-4789-a741-da9b85f650f9_ab0635b0-fa1a-4352-8b4e-db2d931ac9c8.png",
                              price: 19900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595637",
                                  groupName: "Top it up!",
                                  choices: [
                                    {
                                      id: "145050698",
                                      name: "Sweet Corn",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050696",
                                      name: "Red Paprika",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050705",
                                      name: "Jalapenos",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050704",
                                      name: "Black Olives",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050703",
                                      name: "Roasted Babycorn",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050701",
                                      name: "Roasted Broccoli",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050651",
                                      name: "Peri Peri Paneer",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050650",
                                      name: "Roasted Mushroom",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050649",
                                      name: "Creamy Spinach",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050646",
                                      name: "BBQ Chicken",
                                      price: 4900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050644",
                                      name: "Peri Peri Chicken",
                                      price: 4900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050641",
                                      name: "Garlic Herb Chicken",
                                      price: 4900,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050638",
                                      name: "Mozzarella Cheese",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "de27c924-ce1c-469a-88db-502a0251de25",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "118997520",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130806",
                              name: "Make your Own Veg Giant Pizza Slice (24 cm)",
                              category: "Make your Own Pizza Slice",
                              description:
                                "A fully customizable veg slice loaded with your favorite fresh toppings on a signature base of real cheese and a smoky golden crust",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/c148f6c3-8239-4052-aaff-0e922c124795_e8450a55-7225-4f85-91be-8ea2522f52a1.png",
                              isVeg: 1,
                              price: 19900,
                              finalPrice: 9900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595638",
                                  groupName: "Top it up!",
                                  choices: [
                                    {
                                      id: "145050683",
                                      name: "Sweet Corn",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050681",
                                      name: "Red Paprika",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050686",
                                      name: "Jalapenos",
                                      price: 2900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050685",
                                      name: "Black Olives",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050687",
                                      name: "Roasted Babycorn",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050653",
                                      name: "Roasted Broccoli",
                                      price: 3900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050655",
                                      name: "Roasted Mushroom",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050654",
                                      name: "Mozzarella Cheese",
                                      price: 4900,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050652",
                                      name: "Peri Peri Paneer",
                                      price: 4900,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 3,
                                  maxFreeAddons: -1,
                                  minAddons: 1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              cartContext: "quick_prep",
                              offerIds: [
                                "de27c924-ce1c-469a-88db-502a0251de25",
                              ],
                              isNinetyninestoreItem: true,
                              parentId: "118997522",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/aa1afd29-5d7d-4789-a741-da9b85f650f9_ab0635b0-fa1a-4352-8b4e-db2d931ac9c8.png",
                      categoryId: "72414872",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Meal Combos @ 50% OFF",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130824",
                              name: "Giant Pizza Slice + Drink Meal Combo",
                              category: "Meal Combos @ 50% OFF",
                              description:
                                "A royal pizza slice of your choice served with a drink for the perfect meal combo.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/4b574916-0c9a-450f-ae04-89091b57973a_7d559d41-7e8a-485a-b5e9-479989d18866.png",
                              isVeg: 1,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "72339382",
                                    name: "Choose your Pizza Slice",
                                    variations: [
                                      {
                                        name: "Margherita",
                                        price: 349,
                                        default: 1,
                                        id: "213924002",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Fiery Jalapeno & Paprika",
                                        price: 349,
                                        id: "213924003",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Cheese N Corn",
                                        price: 349,
                                        id: "213924004",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Peppy Paneer",
                                        price: 449,
                                        id: "213924005",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Ultimate Spinach",
                                        price: 449,
                                        id: "213924006",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Farmhouse",
                                        price: 449,
                                        id: "213924007",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Barbeque Chicken",
                                        price: 449,
                                        id: "213924008",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                      {
                                        name: "Peri Peri Chicken",
                                        price: 449,
                                        id: "213924009",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339383",
                                          variationId: "213924010",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "72339383",
                                    name: "Choose your drink",
                                    variations: [
                                      {
                                        name: "Diet Coke",
                                        default: 1,
                                        id: "213924010",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Coke",
                                        id: "213924011",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Thums Up",
                                        id: "213924012",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Lemon Iced Tea",
                                        id: "213924013",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Peach Iced Tea",
                                        id: "213924014",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924002",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924002",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924002",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924002",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924002",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924003",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924003",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924003",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924003",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924003",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924004",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924004",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924004",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924004",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924004",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 34900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924005",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924005",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924005",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924005",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924005",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924006",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924006",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924006",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924006",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924006",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924007",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924007",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924007",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924007",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924007",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924008",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924008",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924008",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924008",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924008",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924009",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924010",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924009",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924011",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924009",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924012",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924009",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924013",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339382",
                                        variationId: "213924009",
                                      },
                                      {
                                        groupId: "72339383",
                                        variationId: "213924014",
                                      },
                                    ],
                                    price: 44900,
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 34900,
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              parentId: "118997515",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130825",
                              name: "Giant Pizza Slice + Knots Meal Combo",
                              category: "Meal Combos @ 50% OFF",
                              description:
                                "A loaded royal pizza slice paired with soft, buttery garlic knots - a cheesy dream come true!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/6c4ed8e1-ebc9-421a-ba70-24a186a9d2a8_8f38f9c7-c373-4c24-ac03-9666a6348299.png",
                              isVeg: 1,
                              finalPrice: 19900,
                              variants: {},
                              variantsV2: {
                                variantGroups: [
                                  {
                                    groupId: "72339384",
                                    name: "Choose your Pizza Slice",
                                    variations: [
                                      {
                                        name: "Margherita",
                                        price: 399,
                                        default: 1,
                                        id: "213924015",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Fiery Jalapeno & Paprika",
                                        price: 399,
                                        id: "213924016",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Cheese N Corn",
                                        price: 399,
                                        id: "213924017",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Peppy Paneer",
                                        price: 499,
                                        id: "213924018",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Ultimate Spinach",
                                        price: 499,
                                        id: "213924019",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Farmhouse",
                                        price: 499,
                                        id: "213924020",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Barbeque Chicken",
                                        price: 499,
                                        id: "213924021",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                      {
                                        name: "Peri Peri Chicken",
                                        price: 499,
                                        id: "213924022",
                                        inStock: 1,
                                        isEnabled: 1,
                                        dependantVariation: {
                                          groupId: "72339385",
                                          variationId: "213924023",
                                        },
                                      },
                                    ],
                                  },
                                  {
                                    groupId: "72339385",
                                    name: "Choose your flavour",
                                    variations: [
                                      {
                                        name: "Signature Garlic Knots",
                                        default: 1,
                                        id: "213924023",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Peri Peri Garlic Knots",
                                        id: "213924024",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                                pricingModels: [
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924015",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924015",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924016",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924016",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924017",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924017",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 39900,
                                    finalPrice: {
                                      units: "199",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924018",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924018",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924019",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924019",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924020",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924020",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924021",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924021",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924022",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924023",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                  {
                                    variations: [
                                      {
                                        groupId: "72339384",
                                        variationId: "213924022",
                                      },
                                      {
                                        groupId: "72339385",
                                        variationId: "213924024",
                                      },
                                    ],
                                    price: 49900,
                                    finalPrice: {
                                      units: "299",
                                    },
                                  },
                                ],
                              },
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              defaultPrice: 39900,
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f1ce2232-05f7-4318-b230-15020265b365",
                              ],
                              parentId: "118997517",
                              menuFilterIds: ["bestseller", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/4b574916-0c9a-450f-ae04-89091b57973a_7d559d41-7e8a-485a-b5e9-479989d18866.png",
                      categoryId: "72414876",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Value Combos",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130815",
                              name: "Pack of 2 - Classic Giant Pizza Slice",
                              category: "Value Combos",
                              description:
                                "Two classic royal slices of your choice loaded with rich cheese and bold flavors.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/4e4e5ba4-345c-48e3-b8f6-6827b8a5b17b_1af58b1a-73c0-4f74-b32f-541bb7363de2.png",
                              isVeg: 1,
                              price: 39900,
                              finalPrice: 19900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595659",
                                  groupName: "Choose your flavours",
                                  choices: [
                                    {
                                      id: "145050635",
                                      name: "Margherita",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050637",
                                      name: "Cheese n Corn",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050636",
                                      name: "Fiery Jalapeno & Paprika",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050642",
                                      name: "Pappy Paneer",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050639",
                                      name: "Ultimate Spinach",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050647",
                                      name: "Mexican Wave",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050689",
                                      name: "Farmhouse",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050688",
                                      name: "Peri Peri Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050691",
                                      name: "Barbeque Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                  minAddons: 2,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f1ce2232-05f7-4318-b230-15020265b365",
                              ],
                              parentId: "118997540",
                              menuFilterIds: ["bestseller", "VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130816",
                              name: "Pack of 2 - Signature Giant Pizza Slice",
                              category: "Value Combos",
                              description:
                                "Two signature royal slices of your choice stacked with premium, indulgent toppings.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/3d2348fb-4084-450b-aa64-41777bf81d81_072d8933-08f8-4e91-acdc-a0fc616c42ce.png",
                              isVeg: 1,
                              price: 59900,
                              finalPrice: 29900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595660",
                                  groupName: "Choose your flavours",
                                  choices: [
                                    {
                                      id: "145050690",
                                      name: "Veg Overload",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050693",
                                      name: "Country Feast",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050692",
                                      name: "Mushroom Olives & Sweet Corn",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050695",
                                      name: "Five Pepper",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050694",
                                      name: "Meditteranean",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050699",
                                      name: "Hawaiian Pineapple",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050697",
                                      name: "Farmer's Pick",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050706",
                                      name: "Forest Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050667",
                                      name: "Non Veg Overload",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050666",
                                      name: "Tropical Chicken Pineapple",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050670",
                                      name: "Bacon States",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 2,
                                  maxFreeAddons: -1,
                                  minAddons: 2,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "4bbec641-ac71-4c4f-b4bd-565b81108e4f",
                              ],
                              parentId: "118997542",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130817",
                              name: "Pack of 4 - Classic Giant Pizza Slice",
                              category: "Value Combos",
                              description:
                                "Four classic royal slices of your choice packed with timeless cheesy goodness. Perfect party-starter!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/b075a7bc-2e66-43ad-a377-c2dda65a73cf_93c88753-ecff-4af6-a502-e61d5214e7d6.png",
                              isVeg: 1,
                              price: 79900,
                              finalPrice: 39900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595661",
                                  groupName: "Choose your flavours",
                                  choices: [
                                    {
                                      id: "145050669",
                                      name: "Margherita",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050676",
                                      name: "Cheese n Corn",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050673",
                                      name: "Fiery Jalapeno & Paprika",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050680",
                                      name: "Peppy Paneer",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050678",
                                      name: "Ultimate Spinach",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050684",
                                      name: "Mexican Wave",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050656",
                                      name: "Farmhouse",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050658",
                                      name: "Peri Peri Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050657",
                                      name: "Barbeque Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                  minAddons: 4,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "f9aece6d-7b28-493f-892d-4cac3e3e5eaf",
                              ],
                              parentId: "118997544",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130818",
                              name: "Pack of 4 - Signature Giant Pizza Slice",
                              category: "Value Combos",
                              description:
                                "Four indulgent signature royal slices bursting with gourmet toppings. Absolute show-stopper!",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/2c663a5a-0f09-4835-b5a5-fc19bb121a70_566a4ba8-cf77-413f-af3c-69091f47cb5b.png",
                              isVeg: 1,
                              price: 119900,
                              finalPrice: 59900,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "276595662",
                                  groupName: "Choose your flavours",
                                  choices: [
                                    {
                                      id: "145050660",
                                      name: "Veg Overload",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050659",
                                      name: "Country Feast",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050662",
                                      name: "Mushroom Olives & Sweet Corn",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050661",
                                      name: "Five Pepper",
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050664",
                                      name: "Meditteranean",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050663",
                                      name: "Hawaiian Pineapple",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050665",
                                      name: "Farmer's Pick",
                                      price: 10000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050643",
                                      name: "Forest Chicken",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050640",
                                      name: "Non Veg Overload",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050648",
                                      name: "Tropical Chicken Pineapple",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "145050645",
                                      name: "Bacon States",
                                      price: 10000,
                                      inStock: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: 4,
                                  maxFreeAddons: -1,
                                  minAddons: 4,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "e4b1304b-81a3-4da4-afe3-e7836cb6dff6",
                              ],
                              parentId: "118997546",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/4e4e5ba4-345c-48e3-b8f6-6827b8a5b17b_1af58b1a-73c0-4f74-b32f-541bb7363de2.png",
                      categoryId: "72414874",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "XL Party Orders",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130812",
                              name: "Pack of 10 - Fiery Jalapenos & Paprika Giant Pizza Slice",
                              category: "XL Party Orders",
                              description:
                                "Ten spicy jalapeño and paprika slices with bold heat and cheesy goodness.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/870b5443-d122-4994-9a00-c1083551ebc0_d7e9a5a9-68e9-43cc-84db-cb8f4ac4bb18.png",
                              isVeg: 1,
                              price: 199900,
                              finalPrice: 99900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "3e9826e3-7ec3-4690-86df-822178d5c3d0",
                              ],
                              parentId: "118997534",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130813",
                              name: "Pack of 10 - Margherita Giant Pizza Slice",
                              category: "XL Party Orders",
                              description:
                                "Ten classic Margherita slices with rich tomato sauce and mozzarella melt.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/05ce3a12-b9ac-45be-bc3f-ffe0480094be_21727245-0d27-49ee-b5e9-84e7f1a10370.png",
                              isVeg: 1,
                              price: 199900,
                              finalPrice: 99900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "3e9826e3-7ec3-4690-86df-822178d5c3d0",
                              ],
                              parentId: "118997536",
                              menuFilterIds: ["VEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "195130814",
                              name: "Pack of 10 - Peri Peri Chicken Giant Pizza Slice",
                              category: "XL Party Orders",
                              description:
                                "Ten fiery peri peri chicken slices layered with rich, melty cheese on a smoky crust",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/22/ce9746e8-7be2-41eb-91c1-c028d0f2cbdb_f7bf10df-8130-4551-8ff1-b73262056980.png",
                              price: 299900,
                              finalPrice: 149900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7:38 pm, today",
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  matchText: "SILD",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "FinalPrice",
                              ratings: {
                                aggregatedRating: {},
                              },
                              itemPriceStrikeOff: true,
                              offerIds: [
                                "e215d38e-cc16-4797-8cdf-4d0e3c78b3d9",
                              ],
                              parentId: "118997538",
                              menuFilterIds: ["NONVEG", "offer"],
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2026/2/22/870b5443-d122-4994-9a00-c1083551ebc0_d7e9a5a9-68e9-43cc-84db-cb8f4ac4bb18.png",
                      categoryId: "72414873",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 10124003000983"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "99 Slice by Olio Pizza",
                      area: "Dwaraka Nagar",
                      completeAddress:
                        "First floor, back side, No. 47-14-10, Plot 221/B, Vidisha Towers, Dwaraka Nagar Main Road, Visakhapatnam-530016, Andhra Pradesh",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "15ae6673-21e6-4edf-8885-2cbd2764fe81",
  sid: "qf626c123b6-30e8-4ad7-b898-a3c530b62",
  deviceId: "7614d9b2-5521-1697-b1d4-735ed891f30b",
  csrfToken: "HeXmHKe9hBwx-44LiOdGcPV5j5nqdSqiEWEbJbbY",
};

export default ResMenu;
