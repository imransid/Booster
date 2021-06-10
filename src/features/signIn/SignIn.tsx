import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ScaledSheet } from "react-native-size-matters";
import { hdp, wdp } from "../../utils/Dimensions";

import Rocket from "../../components/rocket/Rocket";

import Button from "../../library/button/Button";

export default () => {
  return (
    <>
      <LinearGradient
        colors={["#6C2AA7", "#642CA9", "#572FAC"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <Button type={"social"} iconName={"facebook"} iconColor={"#152EAE"} />
      <Button type={"social"} iconName={"google"} iconColor={"#D04A3D"} />
    </>
  );
};

var styles = ScaledSheet.create({
  linearGradient: {
    height: hdp(460),
    width: wdp(360),
    borderBottomLeftRadius: wdp(550),
    borderBottomRightRadius: wdp(550),
    transform: [{ scaleX: 2 }],
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
