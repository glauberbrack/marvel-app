import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SkillBar from "../../components/SkillBar";

import { styles } from './styles';
import {baseUrl} from '../../services/baseUrl';

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
              } years old`}
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

        <View style={styles.abilities}>
          <Text style={styles.abilitiesTitle}>Skills</Text>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Strength</Text>
            <SkillBar value={character.abilities.force} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Intelligence</Text>
            <SkillBar value={character.abilities.intelligence} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Agilidade</Text>
            <SkillBar value={character.abilities.agility} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Endurance</Text>
            <SkillBar value={character.abilities.endurance} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Velocity</Text>
            <SkillBar value={character.abilities.velocity} />
          </View>
        </View>

        <View style={styles.movies}>
          <Text style={styles.abilitiesTitle}>Movies</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {character.movies.map((movie) => (
              <View key={movie} style={{ marginRight: 10 }}>
                <Image
                  source={{
                    uri: `${baseUrl}/${movie}`,
                  }}
                  style={styles.image}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;
