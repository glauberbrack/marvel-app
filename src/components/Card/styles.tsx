import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      width: 120,
      height: 210,
      borderRadius: 20,
      marginRight: 8,
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    image: {
      width: 120,
      height: 210,
      borderRadius: 20,
    },
    alterEgo: {
      fontFamily: "gilroy-medium",
      fontSize: 10,
      color: "#FFFFFF",
      opacity: 0.75,
  
      position: "absolute",
      left: 14,
      bottom: 25,
    },
    name: {
      maxWidth: 100,
      fontFamily: "gilroy-heavy",
      fontSize: 14,
      color: "#FFFFFF",
  
      flexShrink: 1,
  
      position: "absolute",
      left: 14,
      bottom: 0,
    },
  });