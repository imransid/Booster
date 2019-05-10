import React, {Component} from "react";
import {TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const InputWithButtonCurrencies = (props) => {
    return (
      <TouchableHighlight style={{ width: '500', height: 48 }}>

              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}
              >
                Login with Facebook
              </Icon.Button>

      </TouchableHighlight>
      
         
    )}

  export default InputWithButtonCurrencies;