import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import boarding from '../../../data';
import {responsiveHeight, responsiveWidth} from '../../utils/utils';
import {Tombol} from '../../components';
import {colors} from '../../utils';

export default class Info extends Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <LinearGradient colors={['#1A032D', '#34126C']} style={styles.container}>
        <Image
          source={item.image}
          style={{
            marginTop: 20,
            resizeMode: 'stretch',
            height: '73%',
            width: '100%',
          }}
        />
        <View style={styles.content}>
          <View style={styles.judul}>
            <Text style={styles.title}>{item.title}</Text>
            {item.field ? (
              <Text style={styles.field}>{item.field}</Text>
            ) : (
              <>
                <Tombol
                  type="text"
                  title="Daftar Sekarang"
                  fontSize={18}
                  paddingVertical={10}
                  paddingHorizontal={60}
                  color={colors.white}
                  width={259}
                  height={48}
                  backgroundColor={colors.primary2}
                />
                <Text style={styles.kenalan}>
                  atau Mau kenalan sama ShowbizDeal dulu?
                </Text>
                <Tombol
                  type="text"
                  title="Masuk Tanpa Harus Login"
                  borderWidth={1}
                  fontSize={18}
                  paddingVertical={10}
                  paddingHorizontal={60}
                  color={colors.primary2}
                  width={259}
                  height={48}
                  borderColor={colors.primary2}
                />
              </>
            )}
          </View>
        </View>
      </LinearGradient>
    );
  };
  render() {
    return (
      <AppIntroSlider
        activeDotStyle={{
          backgroundColor: colors.active,
          width: 24,
          height: 10,
          marginBottom: 61,
        }}
        dotStyle={{
          backgroundColor: colors.nonactive,
          width: 10,
          height: 10,
          marginBottom: 61,
        }}
        renderItem={this._renderItem}
        data={boarding}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    bottom: 0,
    position: 'absolute',
    height: 375,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  judul: {
    marginTop: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 19,
    width: responsiveWidth(260),
    height: responsiveHeight(63),
    fontWeight: '800',
    marginHorizontal: 77,
    fontSize: 26,
    textAlign: 'center',
    lineHeight: 27,
  },
  field: {
    marginHorizontal: responsiveWidth(41),
    textAlign: 'center',
    lineHeight: 27,
    fontSize: 14,
    width: responsiveWidth(332),
  },
  kenalan: {
    marginTop: 19,
    fontSize: 13,
    marginBottom: 4,
  },
});
