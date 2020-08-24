import React from "react";
import { View, Image } from "react-native";

const Loader = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../../../../../assets/images/lo_ad.gif")}
        style={{ height: 330, width: 330 }}
      />
    </View>
  );
};

export default Loader;
