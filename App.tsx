import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

import api from "./src/services/api";

export default function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    api.get("/").then(({ data }) => setData(JSON.stringify(data[0])));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "gilroy-semibold",
  },
});