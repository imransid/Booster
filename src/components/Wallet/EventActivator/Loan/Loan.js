import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Container, Footer, View } from "native-base";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Styles";
import ADDLOAN from "./addLoan";
import CUSFOOTER from "./customFooterLoan";

import { LoadLoan } from "../../../../actions/EventActivator";

import { Custom_Card, AlertMsg } from "../EMI/CustomComponents";

const Loan = props => {
  const dispatch = useDispatch();

  const loader = useSelector(state => state.EVENT_AC.loan_loader);

  const Loan_Data = useSelector(state => state.EVENT_AC.Loan_Data);

  const status = useSelector(state => state.EVENT_AC.Loan_status);

  const [onCencel, setOnCencel] = useState(true);
  const title = onCencel == true ? "Loan" : "Add Loan";

  _modalActivator = info => {
    props.navigation.navigate("LoanStatics", { id: info.id });
  };

  useEffect(() => {
    try {
      dispatch(LoadLoan());
    } catch (error) {
      console.log("Error is Loan useEffect ", error);
    }
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      {loader == true ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 10 }}>
            <AlertMsg
              msgA={
                onCencel != true
                  ? "ADD NEW Loan."
                  : status == "retrive_data"
                  ? Loan_Data.length == 0
                    ? "No Loan."
                    : "Loan Lists."
                  : "Loan Added Sucessfully."
              }
              msgB={
                onCencel != true
                  ? "Now You Can Add Your New Loan In Loan List.."
                  : status == "retrive_data"
                  ? Loan_Data.length == 0
                    ? "You Can Add Your Loan."
                    : "All Loan Listed Are."
                  : "Your Loan Has Been Added Sucessfully."
              }
              type={
                onCencel != true
                  ? "added"
                  : status == "retrive_data"
                  ? Loan_Data.length == 0
                    ? "warning"
                    : "sucess"
                  : "info"
              }
              Coloraction={
                onCencel != true
                  ? "addemi"
                  : status == "retrive_data"
                  ? Loan_Data.length == 0
                    ? "warning"
                    : "sucess"
                  : "info"
              }
            />
          </View>
          <View style={{ flex: 4 }}>
            {onCencel == true ? (
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  paddingLeft: 12
                }}
              >
                {Loan_Data.length == 0 ? (
                  <Text
                    style={{ fontFamily: "Amiko-Bold", textAlign: "center" }}
                  >
                    No Loan Available Right Now...
                  </Text>
                ) : (
                  <Text style={{ fontFamily: "Amiko-Bold" }}>Recent EMI</Text>
                )}
              </View>
            ) : (
              <View
                style={{
                  flex: 0.2
                }}
              ></View>
            )}

            {/* Dynamiclly set addEmi Or List */}
            {onCencel == true ? (
              <View style={{ flex: 3.4 }}>
                <ScrollView style={{ padding: 10 }}>
                  {Loan_Data.length == 0
                    ? null
                    : Loan_Data.map((e, i) => (
                        <TouchableOpacity
                          key={i}
                          onPress={() => _modalActivator(e)}
                        >
                          <Custom_Card data={e} count={i + 1} name={"loan"} />
                        </TouchableOpacity>
                      ))}
                </ScrollView>
                <View style={styles.footer_scroll_Cus}>
                  <CUSFOOTER
                    cus_func={() => setOnCencel(!onCencel)}
                    cencel={onCencel}
                  />
                </View>
              </View>
            ) : (
              <View style={{ flex: 4 }}>
                <ADDLOAN cus_func={() => setOnCencel(!onCencel)} />
              </View>
            )}

            {/* For Footer */}
            {onCencel == true ? null : (
              <View style={{ flex: 0.9 }}>
                <Footer style={styles.footerCus}>
                  <CUSFOOTER
                    cus_func={() => setOnCencel(!onCencel)}
                    cencel={onCencel}
                  />
                </Footer>
              </View>
            )}
          </View>
        </View>
      )}
    </Container>
  );
};

export default Loan;
