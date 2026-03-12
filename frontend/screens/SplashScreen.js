import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F3F0E8" />

      <Image
        source={require("../assets/images/Image1.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.vogue}>Vogue</Text>
        <Text style={styles.vault}>Vault</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F0E8",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 160,
    height: 110,
    marginBottom: 10,
  },

  textContainer: {
    flexDirection: "row",
  },

  vogue: {
    fontSize: 42,
    color: "#6EA28C",
    fontFamily: "serif",
  },

  vault: {
    fontSize: 42,
    color: "#C89B2D",
    fontFamily: "serif",
  },
});