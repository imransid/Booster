import React, {Component} from "react";
import {TouchableHighlight, View } from "react-native";
import { Thumbnail } from "native-base";
import styles from '../styles';

const InputWithGoogle = (props) => {
    return (
      <TouchableHighlight onPress={props.g_method}>
            
            <Thumbnail style={ styles.Social } source={require("../../../assets/images/google.png" )} />        

      </TouchableHighlight>
      
         
    )}

export default InputWithGoogle;