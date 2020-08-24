import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, StatusBar } from "react-native";
import { Container, View } from "native-base";
import C_Card from "./customComponent/CustomCard/CustomCard";
import C_Button from "./customElement/CustomButton/CustomButton";
import OverView from "./customComponent/OverView/OverView";
import TotalAmount from "./customComponent/TotalAmount/TotalAmount";
import Remaining from "./customComponent/Remaining/Remaining";
import CustomMenu from "./customComponent/CustomMenu/CustomMenu";
import CustomSubMenu from "./customComponent/CustomSubMenu/CustomSubMenu";
import Loader from "./customComponent/Loader/Loader";
import { LoadBorrowOrLend } from "../../../../actions/EventActivator";
import CustomModel from "./customComponent/CustomModal/CustomModal";

const Borrowing_lending = (props) => {
  const [activeStatus, setActiveStatus] = useState("Borrow");
  const color = activeStatus == "Lend" ? "#FF5252" : "#43A047";
  const [_switch, SetSwitch] = useState(false);
  const [loader, setLoader] = useState(true);
  const [selectedData, setSelectedData] = useState([]);

  const [modalstatus, setModalstatus] = useState(false);
  const [modelinfo, setModelInfo] = useState("");

  const load_all_data = useSelector((state) => state.EVENT_AC.load_borrow_data);
  const load_borrow = useSelector((state) => state.EVENT_AC.load_borrow);
  const dispatch = useDispatch();

  const SetSwitchData = (e) => {
    try {
      setActiveStatus(e);
      dispatch(LoadBorrowOrLend(e));
    } catch (err) {
      console.log("Error IS SetSwitchData ", err);
    }
  };

  useEffect(() => {
    // Using an IIFE
    (async function DataCreater() {
      try {
        dispatch(LoadBorrowOrLend(activeStatus));
      } catch (error) {
        console.log("Error is Borrow useEffect ", error);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      // NameOFDes
      load_borrow == true ? setLoader(false) : setLoader(true);
    } catch (error) {
      console.log("Error is Borrow useEffect ", error);
    }
  }, [load_borrow]);

  return (
    <Container>
      <StatusBar hidden />
      {/* New Custom Menu */}
      <CustomMenu
        activeStatus={activeStatus}
        navigation={props.navigation}
        SetValue={(e) => SetSwitchData(e)}
        color={color}
      />
      {/* modal */}
      {modalstatus ? (
        <CustomModel
          modalstatus={modalstatus}
          setModal={() => setModalstatus(!modalstatus)}
          name={activeStatus}
          selectedData={modelinfo}
        />
      ) : null}
      {/* End Custom Menu */}
      <View style={{ flex: 3 }}>
        <View
          style={{
            flex: _switch == true && loader === false ? 1 : 0.3,
            padding: 8,
          }}
        >
          {/* OverView */}
          <OverView SetValue={() => SetSwitch(!_switch)} />
          {/* End OverView */}
          {_switch === true && loader === false ? (
            /* Total amount */
            <TotalAmount name={activeStatus} />
          ) : null}
          {_switch === true && loader === false ? (
            /* Remaing */
            <Remaining />
          ) : null}
        </View>
        <View
          style={{
            flex: _switch == true && loader === false ? 0.4 : 0.3,
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
          {loader === true ? (
            <Loader />
          ) : (
            <ScrollView>
              {load_all_data.length !== 0
                ? load_all_data.map((e, i) => (
                    <C_Card
                      key={i}
                      activeStatus={activeStatus}
                      color={color}
                      info={e}
                      setModel={() => setModalstatus(!modalstatus)}
                      setModelData={() => setModelInfo(e)}
                    />
                  ))
                : null}

              <C_Button
                name={"Add " + activeStatus}
                colour={color}
                _navigate={() =>
                  props.navigation.navigate("add_borrow_list", {
                    names: activeStatus,
                  })
                }
              />
            </ScrollView>
          )}
        </View>
      </View>
    </Container>
  );
};

export default Borrowing_lending;
