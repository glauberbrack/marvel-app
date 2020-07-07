import React from "react";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";

// Importação da nossa nova página
import Home from "./src/pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "gilroy-bold": require("./assets/fonts/gilroy-bold.ttf"),
    "gilroy-heavy": require("./assets/fonts/gilroy-heavy.ttf"),
    "gilroy-medium": require("./assets/fonts/gilroy-medium.ttf"),
    "gilroy-regular": require("./assets/fonts/gilroy-regular.ttf"),
    "gilroy-semibold": require("./assets/fonts/gilroy-semibold.ttf"),
  });

  if (!fontsLoaded) return <AppLoading />;

  return <Home />;
}