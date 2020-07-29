import React, { Component, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { Container, View } from "native-base";
import C_Card from "./customComponent/CustomCard/CustomCard";
import C_Button from "./customElement/CustomButton/CustomButton";
import OverView from "./customComponent/OverView/OverView";
import TotalAmount from "./customComponent/TotalAmount/TotalAmount";
import Remaining from "./customComponent/Remaining/Remaining";
import CustomMenu from "./customComponent/CustomMenu/CustomMenu";
import CustomSubMenu from "./customComponent/CustomSubMenu/CustomSubMenu";

const Borrowing_lending = (props) => {
  const [activeStatus, setActiveStatus] = useState("Borrow");
  const color = activeStatus == "Lend" ? "#FF5252" : "#43A047";
  const [_switch, SetSwitch] = useState(false);

  return (
    <Container>
      <StatusBar hidden />
      {/* New Custom Menu */}
      <CustomMenu
        activeStatus={activeStatus}
        navigation={props.navigation}
        SetValue={(e) => setActiveStatus(e)}
        color={color}
      />
      {/* End Custom Menu */}
      <View style={{ flex: 3 }}>
        <View style={{ flex: _switch == true ? 1 : 0.3, padding: 8 }}>
          {/* OverView */}
          <OverView SetValue={() => SetSwitch(!_switch)} />
          {/* End OverView */}
          {_switch == true ? (
            /* Total amount */
            <TotalAmount />
          ) : null}
          {_switch == true ? (
            /* Remaing */
            <Remaining />
          ) : null}
        </View>
        <View
          style={{
            flex: _switch == true ? 0.4 : 0.3,
            backgroundColor: "#ECEFF1",
            paddingBottom: 6,
            paddingTop: 6,
            justifyContent: "center",
          }}
        >
          {/* Custom Sub Menu */}
          <CustomSubMenu />
          {/* End Custom Sub Menu */}
        </View>
        {/* Details block */}
        <View style={{ flex: 1.6, backgroundColor: "#ECEFF1" }}>
          <ScrollView>
            <C_Card activeStatus={activeStatus} color={color} />
            <C_Button name={"Add " + activeStatus} colour={color} />
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

export default Borrowing_lending;
