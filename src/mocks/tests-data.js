export const noop = () => {};

export const history = {
  push: noop,
};

export const cityOffers = [
  {
    bedrooms: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    goods: [
      `Fridge`,
      `Washer`,
      `Coffee machine`,
      `Washing machine`,
      `Dishwasher`,
      `Laptop friendly workspace`,
      `Cable TV`,
      `Air conditioning`,
      `Baby seat`,
      `Towels`,
      `Breakfast`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    id: 2,
    images: [
      `imgURL-1`,
      `imgURL-2`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16,
    },
    volume: 1,
    preview: `previewURL`,
    price: 111,
    rating: 3.3,
    title: `Wood and stone place`,
    type: `room`,
  },
  {
    bedrooms: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
    goods: [
      `Laptop friendly workspace`,
      `Baby seat`,
      `Towels`,
      `Air conditioning`,
      `Breakfast`,
      `Washer`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    id: 4,
    images: [
      `imgURL-1`,
      `imgURL-2`,
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35054,
      longitude: 4.908976,
      zoom: 16,
    },
    volume: 2,
    preview: `previewURL`,
    price: 294,
    rating: 3.8,
    title: `Loft Studio in the Central Area`,
    type: `hotel`,
  }, {
    bedrooms: 4,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    goods: [
      `Air conditioning`,
      `Baby seat`,
      `Fridge`,
      `Towels`,
      `Breakfast`,
      `Washer`,
      `Laptop friendly workspace`,
    ],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Angelina`,
    },
    id: 9,
    images: [
      `imgURL-1`,
      `imgURL-2`,
    ],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16,
    },
    volume: 10,
    preview: `previewURL`,
    price: 406,
    rating: 2.2,
    title: `Loft Studio in the Central Area`,
    type: `hotel`,
  },
];

export const offer = {
  bedrooms: 4,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  description: `This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
  goods: [
    `Air conditioning`,
    `Baby seat`,
    `Fridge`,
    `Towels`,
    `Breakfast`,
    `Washer`,
    `Laptop friendly workspace`,
  ],
  host: {
    avatar: `img/avatar-angelina.jpg`,
    id: 25,
    isPro: true,
    name: `Angelina`,
  },
  id: 9,
  images: [
    `imgURL-1`,
    `imgURL-2`,
  ],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.37854,
    longitude: 4.894976,
    zoom: 16,
  },
  volume: 10,
  preview: `previewURL`,
  price: 406,
  rating: 2.2,
  title: `Loft Studio in the Central Area`,
  type: `hotel`,
};

export const reviews = [
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    date: `2019-04-24`,
    dateHuman: `April 2019`,
    name: `Max`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    date: `2019-04-24`,
    dateHuman: `April 2019`,
    name: `Max`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  },
];
