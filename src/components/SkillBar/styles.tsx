
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    progress: {
      color: "#FFF",
      letterSpacing: 5,
    },
    progressWeakBefore: {
      width: 1,
      height: 15,
      backgroundColor: "white",
    },
    progressWeakAfter: {
      width: 1,
      height: 15,
      backgroundColor: "gray",
    },
    progressStrong: {
      width: 2,
      height: 20,
      backgroundColor: "white",
    },
    progressContent: {
      width: "78%",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });