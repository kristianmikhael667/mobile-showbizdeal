import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  HomeAktif,
  HomeNon,
  TransaksiAktif,
  TransaksiNon,
  Showbizlive,
  MessageAktif,
  MessageNon,
  ProfileAktif,
  ProfileNon,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Marketplace') {
      return isFocused ? <HomeAktif /> : <HomeNon />;
    }
    if (label === 'Transaksi') {
      return isFocused ? <TransaksiAktif /> : <TransaksiNon />;
    }
    if (label === 'ShowbizLive') {
      return isFocused ? <Showbizlive /> : <Showbizlive />;
    }
    if (label === 'Message') {
      return isFocused ? <MessageAktif /> : <MessageNon />;
    }
    if (label === 'Account') {
      return isFocused ? <ProfileAktif /> : <ProfileNon />;
    }
    return <HomeAktif />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 8,
    flex: 1,
  },
  text: isFocused => ({
    color: isFocused ? colors.primary2 : colors.grey,
    fontSize: 8,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 8,
  }),
});
