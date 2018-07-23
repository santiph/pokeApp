/*
 *
 * Pokémon reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_POKEMON_SUCCEEDED,
  FETCH_POKEMON_FAILED,
  POKEMON_LOADING_SET,
} from './constants';

const initialState = {
  isLoading: false,
  pokemon: {},
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON_SUCCEEDED:
      return {
        ...state,
        pokemon: action.payload.pokemon,
      };
    case POKEMON_LOADING_SET:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case FETCH_POKEMON_FAILED:
    default:
      return state;
  }
}

export default pokemonReducer;
