import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  InfluencerActive,
  InfluencerNon,
  PerformerActive,
  PerformerNon,
  SupportActive,
  SupportNon,
} from '../../../assets';
import {colors} from '../../../utils';
const Kategory = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Performer')
      return active ? <PerformerActive /> : <PerformerNon />;
    if (title === 'Influencer')
      return active ? <InfluencerActive /> : <InfluencerNon />;
    if (title === 'Support') return active ? <SupportActive /> : <SupportNon />;
    return <PerformerActive />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <View>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default Kategory;

const styles = StyleSheet.create({
  container: active => ({
    flex: 1,
    backgroundColor: active ? WARNA_UTAMA : '#FFFFFF',
    flexDirection: 'row',
    borderColor: colors.primary2,
  }),
});
