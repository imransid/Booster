import React, { Component } from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from "react-native-reanimated";
import Card from "../../components/card/Card";

import { hdp, wdp } from "../../utils/Dimensions";

export default () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const updateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onActive: (evt: any, ctx) => {
      console.log("evt", evt);
      translateX.value = evt.translationX;
      //   translateY.value = evt.translateY;
    },
  });
  return (
    <>
      <Text>Pan Gesture Handler</Text>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={[styles.square, updateStyle]}>
          <Card />
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  square: {
    width: wdp(312),
    height: hdp(203),
  },
});
