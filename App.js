import React, { Component } from "react";
import { Image, View, NativeModules } from "react-native";
import Routes from "./src/routes/navigator/nav";
import store from "./src/config/store";
import { Provider } from "react-redux";
import "./src/reducers";
import { LoginChker } from "./src/config/AppMethod";
import SplashScreen from "react-native-splash-screen";

const SharedStorage = NativeModules.SharedStorage;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: null
    };
  }

  componentDidMount() {
    var datathis = this;

    LoginChker(datathis);

    SharedStorage.set(
      JSON.stringify({ text: "This is data from the React Native app" })
    );
  }

  render() {
    return this.state.isLogged == null ? (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF"
        }}
      >
        <Image
          source={require("./src/assets/loader.gif")}
          style={{ height: 330, width: 330 }}
        ></Image>
      </View>
    ) : (
      <Provider store={store}>
        <Routes status={this.state.isLogged} />
      </Provider>
    );
  }
}
