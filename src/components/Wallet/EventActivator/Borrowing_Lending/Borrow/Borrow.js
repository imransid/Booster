import React, { useEffect, useState } from "react";
import {
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from "react-native";
import { Container, View, Card, Grid, Col, Row, Label } from "native-base";
import HeaderMenu from "../../../ComponentHeader/HeaderMenu";
import BLaNK_Notify from "../../BankNotityCard/Blank_Notify";

import EVNTCARD from "../../EventCard/EventCard";

import { useSelector, useDispatch } from "react-redux";

import { LoadBorrow } from "../../../../../actions/EventActivator";

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
  console.log(props);
  return (
    <TouchableOpacity>
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
  const title = "Borrow List";
  const [loader, setLoader] = useState(true);

  const load_borrow_data = useSelector(
    state => state.EVENT_AC.load_borrow_data
  );
  const load_borrow = useSelector(state => state.EVENT_AC.load_borrow);
  const dispatch = useDispatch();

  useEffect(() => {
    load_borrow == true ? setLoader(false) : null;

    // Using an IIFE
    (async function DataCreater() {
      try {
        dispatch(LoadBorrow("borrow"));
      } catch (error) {
        console.log("Error is Borrow useEffect ", error);
      }
    })();
  }, [load_borrow]);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

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
                msg={"You Don't have any current Borrow right now."}
              />
            </View>
          ) : (
            load_borrow_data.map((e, i) => (
              <View style={{ width: "100%" }}>
                <CUSTOM_CARD key={Math.floor(Math.random() * i)} data={e} />
              </View>
            ))
          )}

          <View style={{ width: "100%" }}>
            <EVNTCARD Event_Name={"ADD BORROW LIST"} Nav={props.navigation} />
          </View>
        </View>
      )}
    </Container>
  );
};

export default Borrow;
