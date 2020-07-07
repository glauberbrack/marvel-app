import React from "react";
import {  View, Text, TouchableOpacity } from "react-native";

import {styles} from './styles'

interface ISection {
  title: string;
}

const Section: React.FC<ISection> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Section;
