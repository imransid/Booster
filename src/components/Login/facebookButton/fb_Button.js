import React, {Component} from "react";
import {TouchableHighlight, View } from "react-native";
import { Thumbnail } from "native-base";
import styles from '../styles';

const InputWithFB = (props) => {
    return (
      <TouchableHighlight onPress={props.fb_metgod}>
            
            <Thumbnail style={ styles.Social } source={require("../../../assets/images/facebook.png" )} />

      </TouchableHighlight>
      
         
    )}

  export default InputWithFB;