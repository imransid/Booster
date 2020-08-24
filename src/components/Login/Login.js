import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import BackGroundImage from "./BackGroundImage.js";
import PushNotification from "react-native-push-notification";
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin";
import * as firebase from "firebase";
import { firebaseconfig } from "../../config/config";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import { connect } from "react-redux";
import { init_setting } from "../../actions/Setting";

firebase.initializeApp(firebaseconfig);

class Login extends Component {
  // for fblogin //

  isFBLogged = () => {
    var props = this.props;

    LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " + JSON.stringify(result)
          );

          AccessToken.getCurrentAccessToken().then((data) => {
            var api =
              "https://graph.facebook.com/v2.8/" +
              data.userID +
              "?fields=name,email&access_token=" +
              data.accessToken;
            fetch(api)
              .then((response) => response.json())
              .then((responseData) => {
                console.log(responseData);
                // Alert.alert(responseData.name);
                if (responseData.name) {
                  // this._success_google(props);
                  //props.navigation.navigate("Converter");
                }
              })
              .done();
          });
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
        Alert.alert("Login fail");
      }
    );
  };

  //-----pushcontroler for push notification----
  PushController = () => {
    let setToken = this;
    PushNotification.configure({
      onRegister: function (token) {
        console.log("token", token.token);
        setToken.setState({ deviceToken: token.token }); //this.setText();
      },
      onNotification: function (notification) {
        console.log("appp opwnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", notification);

        // this.props.navigation.navigate('LOGIN')

        console.log(this.props);
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
  };

  componentWillMount() {
    this.PushController();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        "470491176372-tln4p3lflcpp7jsum2sdgrgjb036vqf7.apps.googleusercontent.com",
      offlineAccess: false,
    });
  }

  onSignIn = (googleUser) => {
    // console.log('Google Auth Response', googleUser.user.email);

    // Alert.alert(googleUser.user.email);

    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();
        // // Check if we are already signed-in Firebase with the correct user.
        console.log("firebase user", firebaseUser);
        let chker;
        if (firebaseUser) {
          var providerData = firebaseUser.providerData;
          for (var i = 0; i < providerData.length; i++) {
            console.log("firebase", googleUser.user.id);
            console.log("isjs", providerData[i].uid);
            if (
              providerData[i].providerId ===
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.user.id
            ) {
              // We don't need to reauth the Firebase connection.
              chker = true;
            }
          }
        } else {
          chker = false;
        }

        if (chker == false) {
          // for android develop :: ./keytool -exportcert -keystore "C:\Users\ITG-06\.android\debug.keystore" -list -v
          // for build :: ./keytool -exportcert -keystore "G:\Work Project\try\InstaWallet\android\app\my-release-key.keystore" -list -v

          //  79:BE:04:97:2C:CD:00:88:82:15:E0:30:D4:55:0D:6B:81:3D:58:A6

          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(() => console.log("user sign in"))
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log("User already signed-in Firebase.");
        }
      }.bind(this)
    );
  };

  componentDidMount() {
    this._configureGoogleSignIn();
  }

  _Google_signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      this.onSignIn(userInfo);
      this._social_SuccessLogin(
        userInfo.user.email,
        userInfo.user.name,
        userInfo.user.photo
      );
    } catch (error) {
      console.log("eror", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // sign in was cancelled
        Alert.alert("cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation in progress already
        Alert.alert("in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert("play services not available or outdated");
      } else {
        Alert.alert("Something went wrong", error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  _social_SuccessLogin = (userEmail, UserName, UserPic) => {
    let status = true;
    // okk

    this.props.dispatch(init_setting(userEmail, UserName, UserPic, status));

    this.props.navigation.navigate("WALLET", { status: true });
  };

  render() {
    return (
      <BackGroundImage
        google={this._Google_signIn}
        facebook={this.isFBLogged}
      />
    );
  }
}

const mapStateProps = (state) => {
  return {};
};

export default connect(mapStateProps)(Login);
