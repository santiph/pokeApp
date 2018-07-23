/*
 *
 * PokeApp actions
 *
 */

import {
    FETCH_POKEMON_SUCCEEDED,
    FETCH_POKEMON_FAILED,
    POKEMON_LOADING_SET,
  } from './constants';

export const fetchPokemonSucceeded = (pokemon) => ({
  type: FETCH_POKEMON_SUCCEEDED,
  payload: { pokemon },
});

export const fetchPokemonFailed = (error) => ({
  type: FETCH_POKEMON_FAILED,
  payload: { error },
});

export const pokemonLoadingSet = (isLoading) => ({
  type: POKEMON_LOADING_SET,
  payload: { isLoading },
});
