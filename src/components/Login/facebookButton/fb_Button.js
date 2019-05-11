import React, {Component} from "react";
import {TouchableHighlight, View } from "react-native";
import { Thumbnail } from "native-base";

const InputWithFB = (props) => {
    return (
      <TouchableHighlight onPress={props.fb_metgod}>
            
            <Thumbnail style={{width: 50, height: 50}} source={require("../../../assets/images/facebook.png" )} />

      </TouchableHighlight>
      
         
    )}

  export default InputWithFB;