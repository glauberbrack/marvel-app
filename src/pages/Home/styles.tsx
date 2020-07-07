import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
    bar: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    head: {
      marginTop: 20,
    },
    title: {
      fontFamily: "gilroy-semibold",
      fontSize: 14,
      color: "#B7B7C8",
    },
    subTitle: {
      fontFamily: "gilroy-heavy",
      fontSize: 32,
      color: "#313140",
    },
    categories: {
      marginTop: 20,
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    circle: {
      width: 56,
      height: 56,
      borderRadius: 50,
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#B7B7C8",
    },
  });