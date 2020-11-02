import {PERCENT_PER_POINT_RATING, Sorting, MonthNames} from './const';

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

export const offersAdapter = (data) => {
  return data.map((item) => {
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
  });
};

export const reviewAdapter = (data) => {
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

// export const reverseReviewAdapter = (data) => {

// };
