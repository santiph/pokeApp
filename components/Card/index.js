import React from 'react';
import { Image, Text, View } from 'react-native';

export default (props) => (
  <View style={styles.view}>
    <Text style={styles.text}>Pokémon Details</Text>
    <Image
      source={{uri: props.pokemon.sprites.front_default}}
      style={{width: 96, height: 96}}
    />
    <Text>{props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)}</Text>
  </View>
);

const styles = {
  text: { fontSize: 20 },
  view: {
    alignItems: 'center',
  }
};
