import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import boarding from '../../../data';
import {responsiveHeight, responsiveWidth} from '../../utils/utils';
import {StatusBars, Tombol} from '../../components';
import {colors, fonts} from '../../utils';

export default class Info extends Component {
  state = {showHomePage: false};
  _renderItem = ({item}) => {
    return (
      <LinearGradient colors={['#1A032D', '#34126C']} style={styles.container}>
        <StatusBars />
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
          {item.title && item.field ? (
            <>
              <View style={styles.field1}>
                <View style={styles.title}>
                  <Text style={styles.titles}>{item.title}</Text>
                </View>
                <Text style={styles.field}>{item.field}</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.field2}>
                <View style={styles.title2}>
                  <Text style={styles.titles}>Yuk!</Text>
                  <Text style={styles.titles}>Jadi Bagian dari</Text>
                  <Text style={styles.titles}>Kami</Text>
                </View>
                <Tombol
                  type="text"
                  title="Daftar Sekarang"
                  fontSize={18}
                  paddingVertical={10}
                  paddingHorizontal={60}
                  color={colors.white}
                  width={259}
                  height={48}
                  onPress={() => this.props.navigation.navigate('Register')}
                  backgroundColor={colors.primary2}
                />
                <Text style={styles.kenalan}>
                  atau Mau kenalan sama ShowbizDeal dulu?
                </Text>
                <Tombol
                  type="text"
                  title="Masuk Tanpa Harus Login"
                  borderWidth={1}
                  fontSize={14}
                  paddingVertical={12}
                  paddingHorizontal={38}
                  color={colors.primary2}
                  width={259}
                  height={48}
                  onPress={() => this.props.navigation.navigate('MainApp')}
                  borderColor={colors.primary2}
                />
              </View>
            </>
          )}
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

  field1: {
    marginBottom: 19,
    marginTop: 28,
    alignItems: 'center',
  },
  field2: {
    marginTop: 23,
    alignItems: 'center',
  },
  title: {
    width: responsiveWidth(260),
    height: responsiveHeight(70),
    marginHorizontal: 77,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 19,
    display: 'flex',
  },
  title2: {
    width: responsiveWidth(260),
    height: responsiveHeight(113),
    marginHorizontal: 77,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 19,
    display: 'flex',
  },
  titles: {
    fontSize: 26,
    color: colors.primary2,
    textAlign: 'center',
    lineHeight: 29,
    fontFamily: fonts.primary.bold,
    alignItems: 'center',
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
    color: colors.grey,
  },
});
