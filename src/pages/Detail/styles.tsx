
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
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
    abilities: {
      marginTop: 15,
      marginBottom: 15,
    },
    abilitiesTitle: {
      fontFamily: "gilroy-bold",
      fontSize: 18,
      color: "#FFFFFF",
      marginBottom: 15,
    },
    abilitiesText: {
      fontFamily: "gilroy-regular",
      fontSize: 12,
      color: "#FFFFFF",
      opacity: 0.75,
      width: 80,
    },
    abilitiesContent: {
      marginBottom: 15,
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
    },
    movies: {
      marginTop: 15,
      marginBottom: 15,
    },
    image: {
      width: 120,
      height: 210,
      borderRadius: 15,
    },
  });