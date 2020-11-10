export const PERCENT_PER_POINT_RATING = 20;

export const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_PAGE: `/offer/:id`,
  OFFER_LINK: `/offer`,
};

export const APIRoutes = {
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
  OFFERS: `/hotels`,
  LOGIN: `/login`,
};

export const PageTypes = {
  FAVORITES: `FAVORITES`,
  OFFER: `OFFER`,
  MAIN: `MAIN`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteStatus = {
  IS_FAVORITE: 1,
  IS_NOT_FAVORITE: 0,
};

export const Cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const LivingType = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const Sorting = {
  POPULAR: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SortingTitles = {
  [Sorting.POPULAR]: `Popular`,
  [Sorting.PRICE_TO_HIGH]: `Price: low to high`,
  [Sorting.PRICE_TO_LOW]: `Price: high to low`,
  [Sorting.TOP_RATED]: `Top rated first`,
};

export const SortingTypes = [
  Sorting.POPULAR,
  Sorting.PRICE_TO_HIGH,
  Sorting.PRICE_TO_LOW,
  Sorting.TOP_RATED,
];

export const MonthNames = {
  1: `January`,
  2: `February`,
  3: `March`,
  4: `April`,
  5: `May`,
  6: `June`,
  7: `July`,
  8: `August`,
  9: `September`,
  10: `November`,
  11: `October`,
  12: `December`,
};

export const ReviewLength = {
  MIN: 50,
  MAX: 300,
};
