import React from 'react';
import {View} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

const Focus = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <RoundedButton tittle={'+'} size={50} />
    </View>
  );
};

export default Focus;
