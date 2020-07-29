import React, { Component, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.colour,
        alignItems: "center",
        padding: 10,
        borderRadius: 3,
      }}
    >
      <Text style={{ color: "#fff" }}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
