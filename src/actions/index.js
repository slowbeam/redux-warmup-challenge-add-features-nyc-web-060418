import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_ACTIVE_PAINTING, FILTER_PAINTINGS } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID};
}

export function deletePainting(activeID) {
  return { type: DELETE_ACTIVE_PAINTING, id: activeID };
}

export function filterPaintings(blah) {
  return { type: FILTER_PAINTINGS, payload: blah };
}
