import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {
  InfluencerActive,
  InfluencerNon,
  PerformerActive,
  PerformerNon,
  SupportActive,
  SupportNon,
} from '../../../assets';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
const Kategory = ({title, active, onPress}) => {
  const Icon = () => {
    if (title === 'Performer')
      return active ? (
        <Image style={styles.images} source={PerformerActive} />
      ) : (
        <Image style={styles.images} source={PerformerNon} />
      );
    if (title === 'Influencer')
      return active ? (
        <Image style={styles.images} source={InfluencerActive} />
      ) : (
        <Image style={styles.images} source={InfluencerNon} />
      );
    if (title === 'Support')
      return active ? (
        <Image style={styles.images} source={SupportActive} />
      ) : (
        <Image style={styles.images} source={SupportNon} />
      );
    return <PerformerActive />;
  };
  return (
    <TouchableOpacity style={styles.container(active)} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Kategory;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    marginRight: -11,
    borderRadius: 10,
  }),
  images: {
    width: responsiveWidth(132),
    height: responsiveHeight(60),
    borderRadius: 10,
  },
});
