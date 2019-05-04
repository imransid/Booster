import React from "react";
import BackGroundImage from './BackGroundImage.js';
import PushNotification from 'react-native-push-notification';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { View } from "native-base";

export default class HomeScreen extends React.Component {

  //-----pushcontroler for push notification----
  PushController = () => {
    let setToken = this;
    PushNotification.configure({
        onRegister: function (token) {
          console.log('token', token.token)
            setToken.setState({ deviceToken: token.token })//this.setText();
        },
        onNotification: function (notification) {
          
          console.log('appp opwnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', notification)

          // this.props.navigation.navigate('LOGIN')

          console.log(this.props)
        },


        senderID: "470491176372",
        popInitialNotification: true,
        requestPermissions: true,
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
    });
    
    PushNotification.requestPermissions();      
  }


componentWillMount(){
  this.PushController();
}

_configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: '470491176372-tln4p3lflcpp7jsum2sdgrgjb036vqf7.apps.googleusercontent.com',
    offlineAccess: false,
  });
}

componentDidMount(){
  this._configureGoogleSignIn();
}

_Google_signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // this.setState({ userInfo, error: null });
    alert(userInfo.user.name)

    //this.onSignIn(userInfo)

  } catch (error) {

    console.log('eror', error)
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // sign in was cancelled
      Alert.alert('cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation in progress already
      Alert.alert('in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      Alert.alert('play services not available or outdated');
    } else {
      Alert.alert('Something went wrong', error.toString());
      this.setState({
        error,
      });
    }
  }
};


  render() {
    return (
      // <BackGroundImage>   disabled={this.state.isSigninInProgress} 
      <View>
        <BackGroundImage />
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._Google_signIn}
          />
      </View>
    );
  }
}