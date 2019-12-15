import React, { Component } from "react";
import { ScrollView, Text, View, TouchableHighlight } from "react-native";
import { Label, Card } from "native-base";
import CUSTOMADDCARD from "../CustomCard/CustomCard";
import { connect } from "react-redux";
import stylesTran from "./Styles";
import ENTYPO_ICON from "react-native-vector-icons/Entypo";
class Transection extends Component {
  constructor(props) {
    super(props);
  }

  ADD_New_Transection = () => {
    this.props.walletId == "Testing"
      ? alert(
          "! You Cann't Make Transection In Intial Wallet Card Please Add Your Card"
        )
      : this.props.navigation.navigate("ADD_TRANSECTIONS", {
          walletId: this.props.walletId
        });
  };

  IconGenarator() {
    if (this.props.all_leatest_transection.length == undefined) {
      return (
        <CUSTOMADDCARD
          IconGenarater={this.props.all_leatest_transection.IconCode}
          colorCode={this.props.all_leatest_transection.colorCode}
          name={this.props.all_leatest_transection.description}
          iconName={this.props.all_leatest_transection.IconName}
          date={this.props.all_leatest_transection.date}
          value={this.props.all_leatest_transection.amount}
          navigation={this.props.navigation}
          transectionid={this.props.all_leatest_transection.transectionid}
          selectCategory={this.props.all_leatest_transection.selectCategory}
        />
      );
    } else {
      return this.props.all_leatest_transection.map((e, i) => {
        return (
          <CUSTOMADDCARD
            key={i}
            IconGenarater={e.IconCode}
            colorCode={e.colorCode}
            name={e.description}
            iconName={e.IconName}
            date={e.date}
            value={e.amount}
            navigation={this.props.navigation}
            transectionid={e.transectionid}
            selectCategory={e.selectCategory}
          />
        );
      });
    }
  }

  render() {
    return (
      <ScrollView style={{ paddingBottom: 20 }}>
        {this.props.all_leatest_transection != null
          ? this.IconGenarator()
          : null}
        {this.props.all_leatest_transection == null ? (
          <View style={{ marginBottom: 50 }}>
            <Text style={{ fontWeight: "bold" }}>
              Opps...!!! You didn't make any transection yet.
            </Text>
          </View>
        ) : null}

        <View style={{ width: "100%", alignItems: "center", bottom: 0 }}>
          <TouchableHighlight
            style={stylesTran.defaultButtonTransection}
            onPress={() => this.ADD_New_Transection()}
          >
            <View style={{ flexDirection: "row" }}>
              <ENTYPO_ICON name="plus" size={24} color="#fff" />
              <Text style={stylesTran.ButtonAddTransectionText}>
                Add Transection
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

// export default Transection;

const mapStateProps = state => {
  const wallet_details = state.TRASECTION.wallet_detaits;
  const all_leatest_transection = state.TRASECTION.all_transection;
  const all_walllet_card = state.TRASECTION.all_walllet_card;
  const lodder = state.TRASECTION.lodder;
  const SyncStatus = state.TRASECTION;
  const name = state.SETTING.name;
  const loadedData = state.SETTING.loadedData;
  return {
    all_leatest_transection,
    lodder,
    all_walllet_card,
    wallet_details,
    name,
    loadedData
    //SyncStatus
  };
};

export default connect(mapStateProps)(Transection);
