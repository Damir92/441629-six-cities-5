export const PERCENT_PER_POINT_RATING = 20;

export const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_PAGE: `/offer/:id`,
  OFFER_LINK: `/offer`,
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
