import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useVector, snapPoint } from "react-native-redash";

import Wave, { HEIGHT, MARGIN_WIDTH, Side, WIDTH } from "./Wave";
// import BUtton from "./Button";

const PREV = WIDTH;
const NEXT = 0;

interface SlideProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

const Slider = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
}: SlideProps) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const activeSide = useSharedValue(Side.NONE);

  const isTransitionLeft = useSharedValue(false);
  const isTransitionRight = useSharedValue(false);

  const left = useVector();
  const right = useVector();

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({ x }) => {
      if (x < MARGIN_WIDTH) {
        activeSide.value = Side.LEFT;
      } else if (x > WIDTH - MARGIN_WIDTH) {
        activeSide.value = Side.RIGHT;
      } else {
        activeSide.value = Side.NONE;
      }
    },
    onActive: ({ x, y }) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = x;
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = WIDTH - x;
        right.y.value = y;
      }
    },
    onEnd: ({ x, velocityX, velocityY }) => {
      if (activeSide.value === Side.LEFT) {
        const snapPoints = [MARGIN_WIDTH, WIDTH];
        const dest = snapPoint(x, velocityX, snapPoints);

        isTransitionLeft.value = dest === WIDTH;
        left.x.value = withSpring(
          dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitionLeft.value ? true : false,
            restSpeedThreshold: isTransitionLeft.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitionLeft.value ? 100 : 0.01,
          },
          () => {
            if (isTransitionLeft.value) {
              runOnJS(setIndex)(index - 1);
            }
          }
        );
      } else if (activeSide.value === Side.RIGHT) {
        const snapPoints = [WIDTH - MARGIN_WIDTH, 0];
        const dest = snapPoint(x, velocityX, snapPoints);
        isTransitionRight.value = dest === 0;
        right.x.value = withSpring(
          WIDTH - dest,
          {
            velocity: velocityX,
            overshootClamping: isTransitionRight.value ? true : false,
            restSpeedThreshold: isTransitionRight.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitionRight.value ? 100 : 0.01,
          },
          () => {
            if (isTransitionRight.value) {
              runOnJS(setIndex)(index + 1);
            }
          }
        );
      }
    },
  });

  const leftStyle = useAnimatedStyle(() => ({
    zIndex: activeSide.value === Side.LEFT ? 100 : 0,
  }));

  useEffect(() => {
    left.x.value = withSpring(MARGIN_WIDTH);
    right.x.value = withSpring(MARGIN_WIDTH);
  }, [left.x, right.x]);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill}>
        {current}
        {prev && (
          <Animated.View style={[StyleSheet.absoluteFill, leftStyle]}>
            <Wave side={Side.LEFT} position={left}>
              {prev}
            </Wave>
          </Animated.View>
        )}
        {next && (
          <View style={[StyleSheet.absoluteFill]}>
            <Wave side={Side.RIGHT} position={right}>
              {next}
            </Wave>
          </View>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;
