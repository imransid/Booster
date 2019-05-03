import React from "react";
import BackGroundImage from './BackGroundImage.js';
//var PushNotification = require('react-native-push-notification');
import PushNotification from 'react-native-push-notification';


export default class HomeScreen extends React.Component {

PushooioioioiController = () => {
    PushNotification.configure({

      senderID: "470491176372",
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
          console.log( 'TOKEN:', token.token );
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
                //notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },

      //popInitialNotification: true,

      //requestPermissions: true,
  });

  PushNotification.requestPermissions();
}


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


  render() {
    return (
      // <BackGroundImage>
      <BackGroundImage />
    );
  }
}