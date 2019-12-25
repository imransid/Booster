import React, { Component } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Thumbnail, Label } from "native-base";
import { connect } from "react-redux";
import { customNavigation } from "../../actions/audit";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

class MenuDrawer extends Component {
  constructor(props) {
    super(props);

    this.props.dispatch(customNavigation(props.props));

    this.state = {
      urlIMG: false,
      dataURL: "",
      user: ""
    };
  }

  navImage(nav) {
    if (nav == "WALLET") {
      return (
        <Image
          style={{ width: 25, height: 25, marginRight: 15 }}
          source={require("../../assets/images/wallet.png")}
        />
      );
    } else if (nav == "CONVERT") {
      return (
        <Image
          style={{ width: 25, height: 25, marginRight: 15 }}
          source={require("../../assets/images/convert.png")}
        />
      );
    } else if (nav == "SETTING") {
      return (
        <Image
          style={{ width: 25, height: 25, marginRight: 15 }}
          source={require("../../assets/images/SETTING.png")}
        />
      );
    } else if (nav == "RATE") {
      return (
        <Image
          style={{ width: 25, height: 25, marginRight: 15 }}
          source={require("../../assets/images/rate.png")}
        />
      );
    } else if (nav == "FAQ") {
      return (
        <Image
          style={{ width: 25, height: 25, marginRight: 15 }}
          source={require("../../assets/images/FAQ.png")}
        />
      );
    }
  }

  navLink(nav, tExt) {
    //let data = "../../assets/images/" + nav + ".png";
    return (
      <View style={{ paddingLeft: 20, height: 37, marginBottom: 5 }}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => this.props.props.navigate(nav)}
        >
          {this.navImage(nav)}
          <Label style={styles.Link}>{tExt}</Label>
        </TouchableOpacity>
      </View>
    );
  }

  renderIamgeScreen() {
    return this.props.logstatus == true ? (
      <Thumbnail
        style={{ width: 80, height: 80 }}
        source={{ uri: this.props.userpic }}
      />
    ) : (
      <Thumbnail
        style={{ width: 80, height: 80 }}
        source={{ uri: `data:image/png;base64,${this.state.dataURL}` }}
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userpic !== null) {
      this.setState({
        urlIMG: true,
        dataURL: this.props.userpic
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_head}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={{ width: "50%" }}>
              {this.state.urlIMG == false ? (
                <Thumbnail
                  style={{ width: 80, height: 80 }}
                  source={require("../../assets/images/Vector_Smart_Object.png")}
                />
              ) : (
                this.renderIamgeScreen()
              )}
            </View>
            <View>
              <Label style={{ fontWeight: "400", color: "black" }}>
                Wallet Balance:
              </Label>
              <Label
                style={{ fontWeight: "800", fontSize: 25, color: "black" }}
              >
                ${this.props.walletBlance}
              </Label>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              marginTop: 10
            }}
          >
            <View>
              <Label style={{ color: "black" }}>{this.props.name}</Label>
            </View>
            <View>
              <Label>{this.props.email}</Label>
            </View>
          </View>
        </View>
        <View style={styles.container_buttom}>
          {this.navLink("WALLET", "Wallet")}
          {this.navLink("CONVERT", "Converter")}
          {this.navLink("SETTING", "Setting")}
          {this.navLink("RATE", "Rate our app")}
          {this.navLink("FAQ", "FAQ")}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container_head: {
    height: "30%",
    backgroundColor: "#E3F2FD",
    paddingTop: 30,
    paddingLeft: 20
  },
  container_buttom: {
    flex: 1,
    paddingTop: 20,
    // paddingButtom : 450,
    backgroundColor: "#000000"
  },
  Link: {
    //flex: 1,
    fontSize: 16,
    textAlign: "left",
    //padding: 6,
    color: "#C0C0C0"
  }
});

// export default MenuDrawer;

const mapStateProps = state => {
  const userpic = state.SETTING.userpic;
  const name = state.SETTING.name;
  const email = state.SETTING.useremail;
  const walletBlance = state.TRASECTION.walletBlance;
  const logstatus = state.SETTING.logstatus;
  return {
    name,
    email,
    walletBlance,
    userpic,
    logstatus
    //SyncStatus
  };
};

export default connect(mapStateProps)(MenuDrawer);
