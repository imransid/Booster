// import { ScaledSheet } from "react-native-size-matters";
import { Dimensions, Platform, StyleSheet } from "react-native";
import { hdp, wdp } from "../../utils/Dimensions";

const likeNopeDeg = "22deg";

const { width, height } = Dimensions.get("window");
const rangeThreshold = width * 0.65;

export const styles = StyleSheet.create({
  //   square: {
  //     width: wdp(312),
  //     height: hdp(203),
  //   },

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
