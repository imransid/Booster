import React, { Component } from "react";
import { View, ImageBackground, Text, Image, StatusBar } from "react-native";
import FBbutton from "./facebookButton/fb_Button";
import GooGleButton from "./googleButton/google_button";
import styles from "./styles";
export default class BackGroundImage extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/images/Back.png")}
        style={styles.backgroundDefault}
      >
        <StatusBar hidden />
        <View style={styles.bodyContainer}>
          <View style={styles.headContainer}>
            <View style={styles.headerFixedheight}></View>
            <View style={styles.headerIconIamgeheight}>
              <Image
                style={{ height: 300, width: 300 }}
                source={require("../../assets/icons/output-onlinepngtools.png")}
              />
            </View>
            <View style={styles.headerIconTextheight}>
              <View style={styles.headerTextBoxA}>
                <Text style={styles.headerTextB}>B</Text>
                <Text style={styles.headerTextA}>OO</Text>
                <Text style={styles.headerTextB}>STER</Text>
              </View>
              <View style={styles.headerTextBoxB}>
                <Text style={styles.headerTextC}>
                  Your Untimate Booster of your own money
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.headerTextc}></View>
            <View style={styles.footerContentX}>
              <Text style={styles.footerContentText}>Get Connect With</Text>
            </View>
            <View style={styles.footerContentY}>
              <View style={styles.footerFake}></View>
              <View style={styles.footerSocial}>
                <FBbutton fb_metgod={this.props.facebook} />

                <GooGleButton g_method={this.props.google} />
              </View>
              <View style={styles.footerFake}></View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
