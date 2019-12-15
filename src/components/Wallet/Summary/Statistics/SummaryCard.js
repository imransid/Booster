import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PieChart from "./PieChart";
import { connect } from "react-redux";

class SummaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChartVisible: false
    };
  }

  chartVisibilityToogler = () => {
    let valueToBeSet = !this.state.isChartVisible;
    this.setState({
      isChartVisible: valueToBeSet
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: "#21324c",
          borderRadius: 10,
          margin: 10,
          paddingBottom: 10
        }}
      >
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.textLeft}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            <View style={styles.textRight}>
              <Text style={styles.date}>{this.props.dateString}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.textLeft}>
              <Text>Income</Text>
            </View>
            <View style={styles.textRight}>
              <Text style={{ color: "green" }}>
                {this.props.symbol} {this.props.income}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.textLeft}>
              <Text>Expense</Text>
            </View>
            <View style={styles.textRight}>
              <Text style={{ color: "red" }}>
                {this.props.symbol} {this.props.expense}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.textLeft}>
              <Text>Balance</Text>
            </View>
            <View style={styles.textRight}>
              <Text>
                {this.props.symbol} {this.props.balance}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 5
          }}
        >
          <TouchableOpacity onPress={() => this.chartVisibilityToogler()}>
            {/* <Text style={{ fontSize: 16, color: '#D0D3D4' }}>{this.state.isChartVisible ? this.props.language.summary.Hide_Chart : this.props.language.summary.View_Chart}</Text> */}
            {this.state.isChartVisible ? (
              <Text style={{ fontSize: 16, color: "#D0D3D4" }}>
                {this.props.language.summary.Hide_Chart}
              </Text>
            ) : (
              <Text style={{ fontSize: 16, color: "#D0D3D4" }}>
                {this.props.language.summary.View_Chart}
              </Text>
            )}
          </TouchableOpacity>
        </View>
        {this.state.isChartVisible ? (
          parseFloat(this.props.balance) !== 0.0 ? (
            <View>
              <PieChart
                dataSource={[
                  {
                    name: "Income",
                    y: parseFloat(this.props.income),
                    color: "#0E6655"
                  },
                  {
                    name: "Expense",
                    y: parseFloat(this.props.expense),
                    color: "#A93226"
                  }
                ]}
                parent={"summary"}
              />
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5
              }}
            >
              <Text style={{ fontSize: 14, color: "#21618C" }}>
                No chart to display
              </Text>
            </View>
          )
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2630"
  },
  card: {
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  rowTitle: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#101825"
  },
  textLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 2
  },
  textRight: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 2
  },
  title: {
    fontSize: 16,
    color: "white",
    marginBottom: 2
  },
  date: {
    fontSize: 14,
    color: "white",
    marginBottom: 2
  }
});

function mapStateToProps(state) {
  return {
    language: state.settingReducer.language_strings
  };
}

export default connect(mapStateToProps)(SummaryCard);
