import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

import Menu from "../../assets/icons/menu.svg";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Menu />
        <Logo />
        <Search />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});