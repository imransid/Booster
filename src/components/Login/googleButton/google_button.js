import React, {Component} from "react";
import {TouchableHighlight, View } from "react-native";
import { Thumbnail } from "native-base";

const InputWithGoogle = (props) => {
    return (
      <TouchableHighlight onPress={props.g_method}>
            
            <Thumbnail style={{width: 50, height: 50}} source={require("../../../assets/images/google.png" )} />        

      </TouchableHighlight>
      
         
    )}

export default InputWithGoogle;