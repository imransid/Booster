import React, {useCallback} from 'react';
import {View, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export default () => {
  const offset = useSharedValue(10);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(
            offset.value === 10 ? offset.value : offset.value - 795,
            {
              duration: 3500,
              easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            },
          ),
        },
      ],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(
        offset.value === 10 ? offset.value * 20 : offset.value * 255,
        {
          damping: 20,
          stiffness: 90,
        },
      ),
      height: withSpring(
        offset.value === 10 ? offset.value * 20 : offset.value * 255,
        {
          damping: 20,
          stiffness: 90,
        },
      ),
    };
  });

  const updateFunction = useCallback(() => (offset.value = 2), [offset]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#7CA1B4',
      }}>
      <Animated.Image
        source={require('../../../assets/rocket.gif')}
        resizeMode="contain"
        style={[customSpringStyles, style]}
      />
      <Button onPress={updateFunction} title="Move" />
    </View>
  );
};
