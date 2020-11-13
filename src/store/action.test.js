import {
  changeCityAction,
  getOffersAction,
  loadOffersAction,
  loadActiveOfferAction,
  loadNearbyOffersAction,
  loadReviewsAction,
  requireAuthorization,
  redirectToRoute,
  setSortingTypeAction,
  setActiveCard,
  setLoggedUser,
  ActionType,
  loadFavoriteOffersAction,
  unsetActiveOfferAction,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns action city payload`, () => {
    expect(changeCityAction(`City-1`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `City-1`
    });
  });

  it(`Action creator for get offers returns correct action`, () => {
    expect(getOffersAction()).toEqual({
      type: ActionType.GET_OFFERS,
    });
  });

  it(`Action creator for load offers returns action offers payload`, () => {
    expect(loadOffersAction([{}, {}, {}])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for load active offer returns action offer payload`, () => {
    expect(loadActiveOfferAction({id: 1})).toEqual({
      type: ActionType.LOAD_ACTIVE_OFFER,
      payload: {id: 1},
    });
  });

  it(`Action creator for load nearby offers returns action offers payload`, () => {
    expect(loadNearbyOffersAction([{}, {}, {}])).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for load reviews returns action reviews payload`, () => {
    expect(loadReviewsAction([{}, {}, {}])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for load favorite offers returns action offers payload`, () => {
    expect(loadFavoriteOffersAction([{}, {}, {}])).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: [{}, {}, {}],
    });
  });

  it(`Action creator for require auth returns action status payload`, () => {
    expect(requireAuthorization(`AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    });
  });

  it(`Action creator for redirect returns action route payload`, () => {
    expect(redirectToRoute(`/test`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/test`,
    });
  });

  it(`Action creator for set sorting returns action sorting type payload`, () => {
    expect(setSortingTypeAction(`popular`)).toEqual({
      type: ActionType.SET_SORTING_TYPE,
      payload: `popular`,
    });
  });

  it(`Action creator for set active card returns action card id payload`, () => {
    expect(setActiveCard(10)).toEqual({
      type: ActionType.SET_ACTIVE_CARD,
      payload: 10,
    });
  });

  it(`Action creator for set logged user returns action email payload`, () => {
    expect(setLoggedUser(`test@email.ru`)).toEqual({
      type: ActionType.SET_LOGGED_USER,
      payload: `test@email.ru`,
    });
  });

  it(`Action creator for unset active offer returns correct action`, () => {
    expect(unsetActiveOfferAction(`test@email.ru`)).toEqual({
      type: ActionType.UNSET_ACTIVE_OFFER,
    });
  });
});
