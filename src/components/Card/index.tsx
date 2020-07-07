import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { styles } from './styles'
import { baseUrl } from '../../services/baseUrl'

interface ICharacter {
  name: string;
  alterEgo: string;
  imagePath: string;
}

const Card: React.FC<ICharacter> = ({ name, alterEgo, imagePath }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${baseUrl}/${imagePath}` }}
        style={styles.image}
      />
      <Text style={styles.alterEgo}>{alterEgo}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Card;
