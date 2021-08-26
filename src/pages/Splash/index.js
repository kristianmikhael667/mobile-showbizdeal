import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from '../../assets';
import {StatusBars} from '../../components';
import {colors} from '../../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('Info');
    }, 3000);
  }
  render() {
    return (
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={styles.linearGradient}>
        <StatusBars />
        <Logo />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
