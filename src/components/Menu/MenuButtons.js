import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";

const DrawerButtons = props => {
  return (
    <Icon
      name="align-justify"
      size={30}
      color="#0091EA"
      onPress={() => props.nav.toggleDrawer()}
    />
  );
};

const mapStateProps = state => {
  const nav = state.audit.nav;
  return {
    nav
  };
};
export default connect(mapStateProps)(DrawerButtons);
