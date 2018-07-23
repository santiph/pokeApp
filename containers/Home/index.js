import React from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'

import Card from '../../components/Card';
import { fetchPokemonSucceeded, pokemonLoadingSet } from '../../actions';
import pokeapi from '../../services/pokeapi';

class Home extends React.Component {
  _onPressPokemonButton = async () => {
    const { dispatch, pokemon } = this.props;
    const pokeId = pokemon && pokemon.id && pokemon.id === 151
      ? 149 // Dragonite
      : 151; // Mew

    dispatch(pokemonLoadingSet(true));

    const newPokemon = await pokeapi.getPokemon(pokeId);

    dispatch(fetchPokemonSucceeded(newPokemon));
    dispatch(pokemonLoadingSet(false));
    Alert.alert(`You've catched ${newPokemon.name}!`);
  }

  render() {
    const { isLoading, pokemon } = this.props;
    const buttonText = pokemon.id
      ? 'Show Another Pokémon'
      : 'Show Pokémon';

    return (
      <View style={styles.container}>
        {pokemon.id && <Card pokemon={pokemon} />}
        <ActivityIndicator size='large' animating={isLoading} />
        <Button
          disabled={isLoading}
          onPress={this._onPressPokemonButton}
          title={buttonText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps)(Home);
