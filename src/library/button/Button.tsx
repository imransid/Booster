import React, { useMemo, useCallback } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { Pressable } from "react-native";
import Icons from "react-native-vector-icons/Fontisto";
import { hdp, wdp } from "../../utils/Dimensions";

interface ButtonInterface {
  type: string;
  text?: string;
  iconName?: string;
  iconColor?: string;
}

const Button: React.FC<ButtonInterface> = ({ type, iconName, iconColor }) => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  //   set Icon Name
  const IconName = useMemo(
    () => (iconName === undefined ? "facebook" : iconName),
    [iconName]
  );

  //  on click

  const onClick = useCallback(() => {
    rotation.value = withSequence(
      withTiming(-4, { duration: 100 }),
      withRepeat(withTiming(12, { duration: 150 }), 2, true),
      withTiming(0, { duration: 100 })
    );
  }, [rotation]);

  return (
    <Pressable onPress={onClick}>
      {type === "social" ? (
        <Animated.View
          style={[
            animatedStyle,
            {
              height: hdp(160),
            },
          ]}
        >
          <Icons
            name={IconName}
            size={32}
            color={"#fff"}
            style={{
              backgroundColor: iconColor,
              height: hdp(60),
              width: wdp(55),
              borderRadius: 100 / 2,
              textAlign: "center",
              paddingTop: hdp(12),
            }}
          />
        </Animated.View>
      ) : (
        <></>
      )}
    </Pressable>
  );
};

export default Button;
