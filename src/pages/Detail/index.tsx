import React from "react";
import Constants from "expo-constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {baseUrl} from '../../services/baseUrl'

import Back from "../../assets/icons/back.svg";
import Age from "../../assets/icons/age.svg";
import Weight from "../../assets/icons/weight.svg";
import Height from "../../assets/icons/height.svg";
import Universe from "../../assets/icons/universe.svg";

interface IParams {
  character: {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: number;
      weight: {
        value: number;
        unity: string;
      };
      height: {
        value: number;
        unity: string;
      };
      universe: string;
    };
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      velocity: number;
    };
    movies: string[];
  };
}

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IParams;

  const { character } = routeParams;

  return (
    <ImageBackground
      source={{ uri: `${baseUrl}/${character.imagePath}` }}
      style={styles.container}
    >
      <LinearGradient
        colors={["transparent", "#000"]}
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "150%",
          },
          styles.container,
        ]}
      ></LinearGradient>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>

        <View style={styles.heroContainer}>
          <Text style={styles.alterEgo}>{character.alterEgo}</Text>
          <Text style={styles.name}>{character.name}</Text>
        </View>

        <View style={styles.characteristics}>
          <View style={styles.characteristicsContent}>
            <Age />
            <Text style={styles.characteristicsText}>
              {`${
                new Date().getFullYear() - character.caracteristics.birth
              } anos`}
            </Text>
          </View>
          <View style={styles.characteristicsContent}>
            <Weight />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.weight.value}
              {character.caracteristics.weight.unity}
            </Text>
          </View>
          <View style={styles.characteristicsContent}>
            <Height />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.height.value}
              {character.caracteristics.height.unity[0]}
            </Text>
          </View>
          <View style={styles.characteristicsContent}>
            <Universe />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.universe}
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.biographyText}>{character.biography}</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  heroContainer: {
    marginTop: 252,
  },
  alterEgo: {
    fontFamily: "gilroy-medium",
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.75,
    left: 14,
  },
  name: {
    fontFamily: "gilroy-heavy",
    fontSize: 40,
    color: "#FFFFFF",
    flexShrink: 1,
    left: 14,
    width: 180,
  },
  characteristics: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  characteristicsContent: {
    width: 60,
    height: 48,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  characteristicsText: {
    fontFamily: "gilroy-medium",
    fontSize: 12,
    color: "#FFFFFF",
  },
  biographyText: {
    fontFamily: "gilroy-medium",
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.75,
  },
});