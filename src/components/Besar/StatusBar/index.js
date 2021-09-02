import React from 'react';
import {StatusBar, View} from 'react-native';

const StatusBars = () => {
  return (
    <StatusBar
      barStyle="dark-content"
      translucent={true}
      backgroundColor="transparent"
    />
  );
};

export default StatusBars;
