import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { View, Card, Grid, Col, Label } from "native-base";
import Modal from "react-native-modal";
import { _update_borrow } from "../../Borrow/Func_Methods";
//

const CustomModal = (props) => {
  const [modalstatus, setModalstatus] = useState(props.modalstatus);
  const NameOFDes = props.name;
  const selectedData = props.selectedData;
  const dispatch = useDispatch();
  return (
    <Modal isVisible={modalstatus}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Card style={{ width: "80%", height: 200, padding: 20 }}>
          <Label style={{ color: "#000" }}>
            Thank you For Your Transection !{" "}
          </Label>
          <View style={{ flex: 0.7 }}></View>
          <View style={{ flex: 1 }}>
            <Grid>
              <Col>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    borderColor: "#D3D3D3",
                    marginRight: 5,
                    borderWidth: 1,
                  }}
                  onPress={() => (
                    props.setModal(),
                    _update_borrow(selectedData, props, NameOFDes, dispatch)
                  )}
                >
                  <Text style={{ color: "green" }}>Confirm</Text>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    borderColor: "#D3D3D3",
                    borderWidth: 1,
                    marginLeft: 5,
                  }}
                  onPress={() => props.setModal()}
                >
                  <Text style={{ color: "red" }}>Cencel</Text>
                </TouchableOpacity>
              </Col>
            </Grid>
          </View>
        </Card>
      </View>
    </Modal>
  );
};

export default CustomModal;
