import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import { wdp, hdp } from "../../library/styles/Dimensions";

const Card = () => {
  return (
    <ImageBackground
      style={{
        height: hdp(200),
        width: wdp(310),
      }}
      source={require("../../../assets/O9FG4R0.jpg")}
    >
      <View
        style={{
          height: hdp(200),
          width: wdp(310),
          borderRadius: wdp(12),
          flexDirection: "column",
          borderWidth: wdp(2),
          borderColor: "#000",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: hdp(130),
            width: wdp(310),
          }}
        >
          <View style={{ width: "50%" }}>
            <Image
              source={require("../../../assets/icons8-chip-card-100.png")}
              style={{
                height: hdp(80),
                width: wdp(80),
                left: 0,
              }}
            />
          </View>
          <View
            style={{
              width: "50%",
              paddingRight: wdp(15),
            }}
          >
            <Text
              style={{
                fontSize: wdp(18),
                color: "#faf9f4",
                fontWeight: "bold",
                paddingTop: wdp(13),
                textAlign: "right",
              }}
            >
              Bank Name
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            height: hdp(65),
            width: wdp(310),
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: hdp(35),
            }}
          >
            <Text
              style={{
                fontSize: wdp(20),
                color: "#faf9f4",
                fontWeight: "bold",
              }}
            >
              **** {``} **** {``} **** {``}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#faf9f4",
                fontSize: wdp(12),
                paddingBottom: hdp(5),
              }}
            >
              {" "}
              1234
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: wdp(12),
                color: "#faf9f4",
              }}
            >
              {" "}
              Imran Khan Opu
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;
