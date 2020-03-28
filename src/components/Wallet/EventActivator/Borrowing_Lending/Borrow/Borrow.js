// This page dynamicly show borrow and lend

import React, { useEffect, useState } from "react";
import {
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from "react-native";
import {
  Container,
  View,
  Card,
  Grid,
  Col,
  Row,
  Label,
  Button
} from "native-base";
import HeaderMenu from "../../../ComponentHeader/HeaderMenu";
import BLaNK_Notify from "../../BankNotityCard/Blank_Notify";

import EVNTCARD from "../../EventCard/EventCard";

import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";

import { LoadBorrow } from "../../../../../actions/EventActivator";

import { _update_borrow } from "./Func_Methods";
import { ScrollView } from "react-native-gesture-handler";

const Custom_Row = props => {
  return (
    <Row>
      <Col>
        <Row>
          <Text
            style={{
              fontWeight: "bold",
              width: "100%",
              color: "#1A1EEF",
              fontFamily: "Poppins-Black"
            }}
          >
            {props.name.toUpperCase()}
          </Text>
        </Row>
        <Row>
          <Label style={{ color: "#000" }}>{props.value}</Label>
        </Row>
      </Col>
    </Row>
  );
};

const CUSTOM_CARD = props => {
  return (
    <TouchableOpacity onPress={() => (props._modalOn(), props._dataSet())}>
      <Card style={{ height: 100, padding: 10 }}>
        <Grid>
          <Col>
            <Custom_Row name="name" value={props.data.name} />
            <Custom_Row name="borrowed data" value={props.data.date} />
          </Col>
          <Col>
            <Custom_Row name="amount" value={props.data.amount} />
            <Custom_Row name="lending data" value={props.data.return_date} />
          </Col>
        </Grid>
      </Card>
    </TouchableOpacity>
  );
};

const Borrow = props => {
  const [loader, setLoader] = useState(true);
  const [selectedData, setSelectedData] = useState([]);

  const [modalstatus, setModalstatus] = useState(false);

  const load_borrow_data = useSelector(
    state => state.EVENT_AC.load_borrow_data
  );
  const load_borrow = useSelector(state => state.EVENT_AC.load_borrow);
  const dispatch = useDispatch();

  // name Of description

  let NameOFDes = props.navigation.state.params.names;

  const title = NameOFDes.toUpperCase() + " " + "List";

  useEffect(() => {
    load_borrow == true ? setLoader(false) : null;

    // Using an IIFE
    (async function DataCreater() {
      try {
        // NameOFDes
        dispatch(LoadBorrow(NameOFDes));
      } catch (error) {
        console.log("Error is Borrow useEffect ", error);
      }
    })();
  }, [load_borrow]);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      {modalstatus == true ? (
        <Modal isVisible={modalstatus}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Card style={{ width: "80%", height: 200, padding: 20 }}>
              <Label style={{ color: "#000" }}>
                Thank you For Your Transection !{" "}
              </Label>
              <View style={{ flex: 0.7 }}></View>
              <View style={{ flex: 1 }}>
                <Grid>
                  <Col>
                    <TouchableOpacity
                      style={{ alignItems: "center" }}
                      onPress={() => (
                        setModalstatus(false),
                        _update_borrow(selectedData, props, NameOFDes)
                      )}
                    >
                      <Text>Confirm</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity
                      style={{ alignItems: "center" }}
                      onPress={() => setModalstatus(false)}
                    >
                      <Text>Cencel</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
              </View>
            </Card>
          </View>
        </Modal>
      ) : null}

      {loader == true ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#424E9C" />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: "center"
          }}
        >
          {load_borrow_data.length == 0 ? (
            <View style={{ width: "100%" }}>
              <BLaNK_Notify
                msg={
                  "You Don't have any current " +
                  (NameOFDes == "lend" ? "Lend" : "Borrow") +
                  " right now."
                }
              />
            </View>
          ) : (
            <ScrollView style={{ width: "100%" }}>
              {load_borrow_data.map((e, i) => (
                <View style={{ width: "100%" }}>
                  <CUSTOM_CARD
                    key={Math.floor(Math.random() * i)}
                    data={e}
                    _dataSet={() => setSelectedData(e)}
                    _modalOn={() => setModalstatus(true)}
                    _modalOff={() => setModalstatus(false)}
                  />
                </View>
              ))}
            </ScrollView>
          )}

          <View style={{ width: "100%" }}>
            <EVNTCARD
              Event_Name={"ADD " + NameOFDes.toUpperCase() + " LIST"}
              Nav={props.navigation}
            />
          </View>
        </View>
      )}
    </Container>
  );
};

export default Borrow;
