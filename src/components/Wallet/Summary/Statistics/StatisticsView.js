import React from "react";
import { View, Text } from "react-native";
import SummaryCard from "./SummaryCard";
import { connect } from "react-redux";

// summary card

const StatisticsView = props => {
  return (
    <View>
      <SummaryCard
        title={props.language.summary.Today}
        dateString={props.today_data.dateString}
        income={props.today_data.income}
        expense={props.today_data.expense}
        balance={props.total_balance}
        symbol={props.assetBaseCharacter}
      />

      <SummaryCard
        title={props.language.summary.This_week}
        dateString={props.week_data.dateString}
        income={props.week_data.income}
        expense={props.week_data.expense}
        balance={props.total_balance}
        symbol={props.assetBaseCharacter}
      />

      <SummaryCard
        title={props.language.summary.This_month}
        dateString={props.month_data.dateString}
        income={props.month_data.income}
        expense={props.month_data.expense}
        balance={props.total_balance}
        symbol={props.assetBaseCharacter}
      />

      <SummaryCard
        title={props.language.summary.This_year}
        dateString={props.year_data.dateString}
        income={props.year_data.income}
        expense={props.year_data.expense}
        balance={props.total_balance}
        symbol={props.assetBaseCharacter}
      />

      {props.next_year_check == true ? (
        <SummaryCard
          title={props.language.summary.nxt_year}
          dateString={props.next_year_data.dateString}
          income={props.next_year_data.income}
          expense={props.next_year_data.expense}
          balance={props.total_balance}
          symbol={props.assetBaseCharacter}
        />
      ) : null}

      {props.pre_year_check == true ? (
        <SummaryCard
          title={props.language.summary.pre_year}
          dateString={props.pre_year_data.dateString}
          income={props.pre_year_data.income}
          expense={props.pre_year_data.expense}
          balance={props.total_balance}
          symbol={props.assetBaseCharacter}
        />
      ) : null}
    </View>
  );
};

function mapStateToProps(state) {
  return {
    today_data: state.summary.today_data,
    language: state.settingReducer.language_strings,
    total_balance: state.summary.total_balance,
    week_data: state.summary.week_data,
    month_data: state.summary.month_data,
    year_data: state.summary.year_data,
    next_year_data: state.summary.next_year_data,
    pre_year_data: state.summary.pre_year_data,
    next_year_check: state.summary.next_year_check,
    pre_year_check: state.summary.pre_year_check
  };
}

export default connect(mapStateToProps)(StatisticsView);
