import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const RoundedButton = ({style = {}, textStyle = {}, size = 125, ...props}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]}>{props.tittle}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 2,
      justifyContent: 'center',
    },
    text: {
      color: '#000',
      fontSize: size / 3,
    },
  });

export default RoundedButton;
