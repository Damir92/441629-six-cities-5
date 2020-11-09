import MockAdapter from 'axios-mock-adapter';

import {APIRoutes, Cities, Sorting, SortingTypes} from '../../../const';
import {cityOffers, reviews} from '../../../mocks/tests-data';

import {siteData} from './site-data';
import {createAPI} from '../../../services/api';
import {ActionType} from '../../action';
import {
  fetchOffersList,
  fetchActiveOffer,
  fetchReviews,
  postReview,
  fetchNearbyOffers,
} from '../../api-actions';

const ID = 10;

const api = createAPI(() => {});

describe(`Test reducer for site-data`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(siteData(void 0, {})).toEqual({
      activeCard: null,
      activeOffer: {},
      city: Cities[0],
      nearbyOffers: [],
      reviews: [],
      offers: [],
      sortingType: Sorting.POPULAR,
    });
  });

  it(`Reducer should get city offers by get offers if city set`, () => {
    expect(siteData({
      offers: cityOffers,
      city: cityOffers[0].city.name,
    }, {
      type: ActionType.GET_OFFERS,
    })).toEqual({
      city: cityOffers[0].city.name,
      offers: cityOffers,
    });
  });

  it(`Reducer should update nearbyOffers by load their`, () => {
    expect(siteData({
      nearbyOffers: [],
    }, {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: cityOffers,
    })).toEqual({
      nearbyOffers: cityOffers,
    });
  });

  it(`Reducer should update reviews by load reviews`, () => {
    expect(siteData({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toEqual({
      reviews,
    });
  });

  it(`Reducer should set activeCard`, () => {
    expect(siteData({
      activeCard: null,
    }, {
      type: ActionType.SET_ACTIVE_CARD,
      payload: {},
    })).toEqual({
      activeCard: {},
    });
  });

  it(`Reducer should change city`, () => {
    expect(siteData({
      city: Cities[0],
    }, {
      type: ActionType.SET_CITY,
      payload: Cities[1],
    })).toEqual({
      city: Cities[1],
    });
  });

  it(`Reducer should change sortingType`, () => {
    expect(siteData({
      sortingType: SortingTypes[0],
    }, {
      type: ActionType.SET_SORTING_TYPE,
      payload: SortingTypes[1],
    })).toEqual({
      sortingType: SortingTypes[1],
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoutes.OFFERS)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /offers/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const activeOfferLoader = fetchActiveOffer(ID);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${ID}`)
      .reply(200, {fake: true});

    return activeOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ACTIVE_OFFER,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct API call to /offers/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersLoader = fetchNearbyOffers(ID);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${ID}/nearby`)
      .reply(200, [{fake: true}]);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /reviews/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(ID);

    apiMock
      .onGet(`${APIRoutes.REVIEWS}/${ID}`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API POST call to /reviews/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewPost = postReview({
      id: ID,
      comment: `test`,
      rating: `5`,
    });

    apiMock
      .onPost(`${APIRoutes.REVIEWS}/${ID}`, {comment: `test`, rating: `5`})
      .reply(200, [{fake: true}]);

    return reviewPost(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
});
