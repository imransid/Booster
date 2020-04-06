import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Container, Footer, View } from "native-base";
import Modal from "react-native-modal";
import HeaderMenu from "../../ComponentHeader/HeaderMenu";
import { Custom_Card, AlertMsg } from "./CustomComponents";
import styles from "../Loan/Styles";
import CUSFOOTER from "../Loan/customFooterLoan";
import ADDEMI from "./AddEMI";
import { LoadEMI } from "../../../../actions/EventActivator";
import { useSelector, useDispatch } from "react-redux";
import CusTomModal from "./CustomModal";

const EMI = props => {
  const dispatch = useDispatch();

  const loader = useSelector(state => state.EVENT_AC.emi_loader);

  const EMI_Data = useSelector(state => state.EVENT_AC.Load_EMI_Data);

  const status = useSelector(state => state.EVENT_AC.status);

  const [onCencel, setOnCencel] = useState(true);

  const [modalActivator, setModalActivator] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const title = onCencel == true ? "EMI" : "Add EMI";

  _modalActivator = info => {
    setModalInfo(info);
    setModalActivator(true);
  };

  useEffect(() => {
    try {
      dispatch(LoadEMI());
    } catch (error) {
      console.log("Error is EMI useEffect ", error);
    }
  }, [loader]);

  return (
    <Container>
      <StatusBar hidden />
      <HeaderMenu props={props.navigation} title={title} />

      {/* Custom Modal */}
      <Modal isVisible={modalActivator}>
        <CusTomModal
          info={modalInfo}
          closeModal={() => setModalActivator(false)}
        />
      </Modal>

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
                  ? "ADD NEW EMI."
                  : status == "retrive_data"
                  ? EMI_Data.length == 0
                    ? "No EMI."
                    : "EMI Lists."
                  : "EMI Added Sucessfully."
              }
              msgB={
                onCencel != true
                  ? "Now You Can Add Your New EMI In EMI List.."
                  : status == "retrive_data"
                  ? EMI_Data.length == 0
                    ? "You Can Add Your EMI."
                    : "All EMI Listed Are."
                  : "Your EMI Has Been Added Sucessfully."
              }
              type={
                onCencel != true
                  ? "added"
                  : status == "retrive_data"
                  ? EMI_Data.length == 0
                    ? "warning"
                    : "sucess"
                  : "info"
              }
              Coloraction={
                onCencel != true
                  ? "addemi"
                  : status == "retrive_data"
                  ? EMI_Data.length == 0
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
                {EMI_Data.length == 0 ? (
                  <Text
                    style={{ fontFamily: "Amiko-Bold", textAlign: "center" }}
                  >
                    No EMI Available Right Now...
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
                  {EMI_Data.length == 0
                    ? null
                    : EMI_Data.map((e, i) => (
                        <TouchableOpacity onPress={() => _modalActivator(e)}>
                          <Custom_Card data={e} count={i + 1} />
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
                <ADDEMI cus_func={() => setOnCencel(!onCencel)} />
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

export default EMI;
