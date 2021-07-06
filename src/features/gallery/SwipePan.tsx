import * as React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  useAnimatedGestureHandler,
  withSpring,
  useDerivedValue,
  runOnJS,
  useSharedValue,
} from "react-native-reanimated";

interface Value {
  value: number;
}

interface Props {
  x: Value;
  y: Value;
  originY: Value;
  onSnap: (swipedRight: boolean) => void;
  children: React.ReactNode;
}

const { width } = Dimensions.get("window");

export const SwipePan = ({ x, y, onSnap, originY, children }: Props) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log("value updated", value);
  }, [value]);

  const slideValueIS = useSharedValue("");

  useDerivedValue(() => {
    if (slideValueIS.value === "left") {
      runOnJS(onSnap)(false);
    } else if (slideValueIS.value === "right") {
      runOnJS(onSnap)(true);
    }
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx: any) => {
      console.log("ctx", ctx, x.value);
      // with the context (ctx), we track the original start positions
      ctx.startX = x.value;
      ctx.startY = y.value;

      // keep the y value for figuring out the image rotation direction
      originY.value = event.y;
    },
    onActive: (event, ctx) => {
      // user is actively touching and moving the image
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      // dragged 40 percent of the screen's width
      const thresh = width * 0.4;

      // how much the user moved the image horizontally
      const diff = ctx.startX + event.translationX;

      console.log("diff", diff, thresh);

      if (diff > thresh) {
        // swiped right
        console.log("right");

        slideValueIS.value = "right";
        //onSnap(true);
        //setValue("right");
      } else if (diff < -1 * thresh) {
        // swiped left
        console.log("left");
        //setValue("left");
        // onSnap(false);
        slideValueIS.value = "left";
      } else {
        // no left or right swipe, so 'jump' back to the initial position
        x.value = withSpring(0);
        y.value = withSpring(0);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      {children}
    </PanGestureHandler>
  );
};
