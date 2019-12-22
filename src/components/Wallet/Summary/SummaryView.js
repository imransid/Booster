import styles from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import React, { Component } from "react";
import { Text, ImageBackground, TouchableOpacity } from "react-native";
import { Card, Grid, Col, Row, Label } from "native-base";
import SUMMARY_IMAGE from "./SummmaryImage";

export default class SummaryView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={styles.Summary_card}>
        <Grid>
          <Row style={styles.Summary_card_1st_Row}>
            <Col>
              <Text style={styles.Summary_card_1st_Row_Head}>
                {this.props.title}
              </Text>
            </Col>
            <Col>
              <Text style={styles.Summary_card_1st_Row_date}>
                {this.props.dateString}
              </Text>
            </Col>
          </Row>
          <Row>
            <SUMMARY_IMAGE
              cardID={this.props.cardId}
              Action={this.props.title}
            />
            {/*  */}
          </Row>
          <Row>
            <Col>
              <Row>
                <Label style={styles.Summary_card_3rd_Row_1_Text}>
                  Expense
                </Label>
              </Row>
              <Row>
                <Label style={styles.Summary_card_3rd_Row_1_Text}>
                  Balance
                </Label>
              </Row>
            </Col>
            <Col>
              <Row>
                <Label style={styles.Summary_card_3rd_Row_3_Text}>
                  {this.props.expense}
                </Label>
              </Row>
              <Row>
                <Label style={styles.Summary_card_3rd_Row_4_Text}>
                  {this.props.balance}
                </Label>
              </Row>
            </Col>
          </Row>
          <Row style={styles.Summary_card_last_row}>
            <Col>
              <Label style={styles.Summary_card_last_row_text}>
                View Chart
              </Label>
            </Col>
            <Col>
              <TouchableOpacity>
                <Icon
                  style={{ textAlign: "right" }}
                  name="angle-down"
                  size={20}
                  color="#2779C7"
                  onPress={() => console.log("okk")}
                />
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </Card>
    );
  }
}
