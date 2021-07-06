import React, { useCallback, useState } from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Image,
} from "react-native";
import ImageBackground from "react-native-fast-image";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
// import { CrossSVG } from "./CrossSVG";
// import { HeartSVG } from "./HeartSVG";
import { SwipePan } from "./SwipePan";

const likeNopeDeg = "22deg";

const { width, height } = Dimensions.get("window");
const rangeThreshold = width * 0.65;

const images = [
  { src: require("./assets/images/1.jpg") },
  { src: require("./assets/images/2.jpg") },
  { src: require("./assets/images/3.jpg") },
  { src: require("./assets/images/4.jpg") },
  { src: require("./assets/images/5.jpg") },
  { src: require("./assets/images/6.jpg") },
  { src: require("./assets/images/7.jpg") },
  { src: require("./assets/images/8.jpg") },
  { src: require("./assets/images/9.jpg") },
  { src: require("./assets/images/10.jpg") },
  { src: require("./assets/images/11.jpg") },
  { src: require("./assets/images/12.jpg") },
  { src: require("./assets/images/13.jpg") },
  { src: require("./assets/images/14.jpg") },
  { src: require("./assets/images/15.jpg") },
  { src: require("./assets/images/16.jpg") },
  { src: require("./assets/images/17.jpg") },
];

const TinderDemo = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [lock, setLock] = useState(false);
  const scale = useSharedValue(1);
  const overrideNopeOpacity = useSharedValue(0);
  const overrideLikeOpacity = useSharedValue(0);

  const [secondIndex, setSecondIndex] = useState(index + 1);

  const getItemIndex = async (right: boolean) => {
    try {
      let item = 0;
      let nxtItem = 1;
      if (images.length !== index && images.length > index) {
        item = index + 1;
        nxtItem = item + 1;
      }

      setIndex(item);
      setSecondIndex(nxtItem);

      console.log("right", right, index);
    } catch (err) {
      console.log("Error in getItemIndex ", err);
    }
  };

  const onSwiped = useCallback(
    async (right) => {
      // disable touches while animating
      lock === false ? setLock(true) : null;

      if (right) {
        // spring 'over the screen' to the right
        x.value = withSpring(width * 1.5);
        y.value = withSpring(0);
      } else {
        // spring 'over the screen' to the left
        x.value = withSpring(-width * 1.5);
        y.value = withSpring(0);
      }

      // while the spring/swipe animation is running, we do not want to switch
      // to the next image already, but just when the image is out of screen

      if (lock) {
        setTimeout(() => {
          getItemIndex(right);

          // reset values/positions
          x.value = 0;
          y.value = 0;
          overrideNopeOpacity.value = 0;
          overrideLikeOpacity.value = 0;

          // prevent memory issues

          setKey(index + 1);
          setLock(false);
        }, 300);
      }
    },
    [key, lock]
  );

  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const originY = useSharedValue(0);

  const nopeOpacityStyle = useAnimatedStyle(() => {
    // swipe left - x is getting closer more negative - more opacity
    const opacity = interpolate(x.value, [0, -rangeThreshold], [0, 1]);
    return {
      opacity: overrideNopeOpacity.value || opacity,
    };
  });

  const likeOpacityStyle = useAnimatedStyle(() => {
    // swipe right - x is getting closer more positive - more opacity
    const opacity = interpolate(x.value, [0, rangeThreshold], [0, 1]);

    return {
      opacity: overrideLikeOpacity.value || opacity,
    };
  });

  const style = useAnimatedStyle(() => {
    let factor = -1;

    // half of the screen's height changes the rotation direction
    if (originY.value < height / 2) {
      factor = 1;
    }

    // the further we are to the left (-) or right (+), we rotate by up to 10deg
    const rotateZ = interpolate(x.value, [0, factor * rangeThreshold], [0, 10]);

    // the image rotation with border radius is not working well on android, thus disabled
    return {
      elevation: 2,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      transform: [
        { scale: scale.value },
        { translateX: x.value },
        { translateY: y.value },
        { rotateZ: Platform.OS === "android" ? "0deg" : `${rotateZ}deg` },
      ],
    };
  });

  const lowerStyle = useAnimatedStyle(() => {
    // keep the lower image static
    return {
      zIndex: -1,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      transform: [{ translateX: 0 }, { translateY: 0 }],
    };
  });

  console.log("index", index, "secondIndex", secondIndex);

  return (
    <SafeAreaView
      pointerEvents={lock ? "none" : "auto"}
      style={styles.container}
    >
      <View
        style={{ flexDirection: "row", height: 70, backgroundColor: "red" }}
      >
        <ScrollView horizontal={true}>
          {images.map((e, i) => (
            //console.log("e", e)
            <Image style={{ height: 40, width: 40 }} source={e.src} key={i} />
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View style={styles.headFoot} />

        <View style={{ flex: 1 }}>
          <AnimCard
            {...{
              key: secondIndex,
              pointerEvents: "none",
              style: lowerStyle,
              images,
              index: secondIndex,
            }}
          />

          <AnimCard {...{ style, images, index, key: index }}>
            <SwipePan key={key} {...{ onSnap: onSwiped, x, y, originY }}>
              <Animated.View style={styles.overlay}>
                <View style={styles.row}>
                  <Animated.View style={[styles.like, likeOpacityStyle]}>
                    <Text style={styles.likeLabel}>LIKE</Text>
                  </Animated.View>
                  <Animated.View style={[styles.nope, nopeOpacityStyle]}>
                    <Text style={styles.nopeLabel}>NOPE</Text>
                  </Animated.View>
                </View>
              </Animated.View>
            </SwipePan>
          </AnimCard>
        </View>

        {/* <View style={[styles.headFoot, { marginBottom: 16 }]}>
          <TouchableOpacity
            onPress={() => {
              // let "nope" stay a bit, before swiping
              overrideNopeOpacity.value = withSpring(1);
              setTimeout(() => onSwiped(false), 500);
            }}
            style={styles.icon}
          >
            <CrossSVG />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // let "like" stay a bit, before swiping
              overrideLikeOpacity.value = withSpring(1);
              setTimeout(() => onSwiped(true), 500);
            }}
            style={[styles.icon, {}]}
          >
            <HeartSVG />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const AnimCard = ({
  style,
  index,
  children,
  ...rest
}: {
  style: ViewStyle;
  index: number;
  children?: React.ReactNode;
}) => {
  return (
    <Animated.View {...{ style }} {...rest}>
      <View style={styles.imgOut}>
        <ImageBackground style={styles.img} source={images[index].src}>
          {children}
        </ImageBackground>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headFoot: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    minHeight: 40,
    marginVertical: 16,
  },
  contentContainer: {
    paddingTop: 30,
  },
  imgOut: {
    borderRadius: 8,
    width: "95%",
    height: "100%",
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  nope: {
    borderWidth: 5,
    borderRadius: 6,
    padding: 8,
    margin: 8,
    borderColor: "#e04e81",
    transform: [{ rotateZ: `${likeNopeDeg}` }],
  },
  nopeLabel: {
    fontSize: 32,
    color: "#e04e81",
    fontWeight: "bold",
  },

  like: {
    borderWidth: 5,
    borderRadius: 6,
    padding: 8,
    margin: 8,
    borderColor: "#67d4a8",
    transform: [{ rotateZ: `-${likeNopeDeg}` }],
  },
  likeLabel: {
    fontSize: 32,
    color: "#67d4a8",
    fontWeight: "bold",
  },
  icon: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    padding: 14,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,1)",
  },
});

export default TinderDemo;
