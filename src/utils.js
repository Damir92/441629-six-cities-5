import {PERCENT_PER_POINT_RATING, Sorting, MonthNames, PageTypes} from './const';

export const convertRatingToPercent = (value) => `${Math.round(value) * PERCENT_PER_POINT_RATING}%`;

export const updateObject = (a, b) => Object.assign({}, a, b);

export const sortOffers = (offers, type) => {
  switch (type) {
    case Sorting.PRICE_TO_HIGH:
      return [...offers.sort((a, b) => (a.price - b.price))];

    case Sorting.PRICE_TO_LOW:
      return [...offers.sort((a, b) => (b.price - a.price))];

    case Sorting.TOP_RATED:
      return [...offers.sort((a, b) => (b.rating - a.rating))];

    default:
      return offers;
  }
};

export const oneOfferAdapter = (item) => {
  if (item.fake) {
    return item;
  }

  return {
    city: item.city,
    preview: item.preview_image,
    images: item.images,
    title: item.title,
    isFavorite: item.is_favorite,
    isPremium: item.is_premium,
    rating: item.rating,
    type: item.type,
    bedrooms: item.bedrooms,
    volume: item.max_adults,
    price: item.price,
    goods: item.goods,
    host: {
      id: item.host.id,
      name: item.host.name,
      isPro: item.host.is_pro,
      avatar: item.host.avatar_url,
    },
    description: item.description,
    location: item.location,
    id: item.id,
  };
};

export const offersAdapter = (data) => {
  if (data[0] && data[0].fake) {
    return data;
  }

  return data.map((item) => {
    return oneOfferAdapter(item);
  });
};

export const reviewAdapter = (data) => {
  if (data[0] && data[0].fake) {
    return data;
  }

  return data.map((item) => {
    const date = new Date(item.date);

    return {
      id: item.id,
      avatar: item.user.avatar_url,
      date: item.date,
      dateHuman: `${MonthNames[date.getMonth()]} ${date.getFullYear()}`,
      name: item.user.name,
      rating: item.rating,
      text: item.comment,
    };
  });
};

export const getArticleClassesForOfferCard = (pageType) => {
  switch (pageType) {
    case PageTypes.MAIN:
      return `place-card cities__place-card`;
    case PageTypes.OFFER:
      return `place-card near-places__card`;
    case PageTypes.FAVORITES:
      return `place-card favorites__card`;
    default: `place-card`;
  };
};

export const getImageWrapClassesForOfferCard = (pageType) => {
  switch (pageType) {
    case PageTypes.MAIN:
      return `place-card__image-wrapper cities__image-wrapper`;
    case PageTypes.OFFER:
      return `place-card__image-wrapper near-places__image-wrapper`;
    case PageTypes.FAVORITES:
      return `place-card__image-wrapper favorites__image-wrapper`;
    default: `place-card__image-wrapper`;
  };
};

export const getCardInfoClassesForOfferCard = (pageType) => {
  switch (pageType) {
    case PageTypes.FAVORITES:
      return `place-card__info favorites__card-info`;
    default: `place-card__info`;
  }
}
