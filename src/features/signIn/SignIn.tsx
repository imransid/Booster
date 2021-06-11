import React, { useState, useCallback } from "react";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ScaledSheet } from "react-native-size-matters";
import { hdp, wdp } from "../../utils/Dimensions";

import Rocket from "../../components/rocket/Rocket";

import Button from "../../library/button/Button";

export default () => {
  const [status, setStatus] = useState(false);

  const onFocus = () => {
    setStatus(true);
  };

  return (
    <>
      <LinearGradient
        colors={["#6C2AA7", "#642CA9", "#572FAC"]}
        style={styles.linearGradient}
      ></LinearGradient>
      <View style={{ height: hdp(120) }}>
        <Rocket activeStatus={status} />
      </View>
      <View style={styles.button}>
        <View style={{ paddingRight: wdp(10) }}>
          <Button
            type={"social"}
            iconName={"facebook"}
            iconColor={"#152EAE"}
            onFocus={() => onFocus()}
          />
        </View>
        <View style={{ paddingLeft: wdp(10) }}>
          <Button
            type={"social"}
            iconName={"google"}
            iconColor={"#D04A3D"}
            onFocus={() => onFocus()}
          />
        </View>
      </View>
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
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
