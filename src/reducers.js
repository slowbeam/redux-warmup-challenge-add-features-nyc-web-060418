import { combineReducers } from 'redux';
import artworks from './data/artworks';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_ACTIVE_PAINTING, FILTER_PAINTINGS } from './actions/types';

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case DELETE_ACTIVE_PAINTING:
      let newPaintings = [...state];
      return newPaintings.filter(element => element.id !== action.id);
    case FILTER_PAINTINGS:
      let filteredPaintings = [...state]
      return filteredPaintings.filter(element => element.museum.name === action.payload);
    default:
      return state;
  }
};

const activePaintingIdReducer = (state = artworks[0].id, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
