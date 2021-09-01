import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {LogoSukses} from '../../assets';
import {Tombol} from '../../components';
import {colors, fonts, heightMobileUi} from '../../utils';

export default class RegisterSuccess extends Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={styles.container}>
        <View style={styles.logo}>
          <LogoSukses />
        </View>
        <View style={styles.title}>
          <Text style={styles.selamat}>Selamat! </Text>
          <Text style={styles.selamat}>Akun kamu berhasil dibuat</Text>
        </View>
        <Text style={styles.cekemail}>
          Cek email kamu, untuk verifikasi data yang sudah kamu buat
        </Text>
        <View style={styles.buttons}>
          <Tombol
            type="text"
            title="Verifikasi sekarang"
            fontSize={18}
            borderColor={colors.white}
            borderWidth={1}
            paddingVertical={11}
            paddingHorizontal={47}
            color={colors.primary2}
            width={259}
            borderRadius={5}
            height={48}
            // onPress={() => this.props.navigation.navigate('Login')}
            backgroundColor={colors.white}
          />
          <Text style={styles.nexts}>atau kamu bisa langsung lanjut</Text>
          <Tombol
            type="text"
            title="Masuk"
            fontSize={14}
            borderColor={colors.white}
            borderWidth={1}
            borderRadius={5}
            paddingVertical={8}
            paddingHorizontal={28}
            color={colors.white}
            width={199}
            height={36}
            onPress={() => this.props.navigation.replace('Login')}
            backgroundColor={colors.primary2}
          />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: 176,
  },
  title: {
    marginTop: 40,
    marginHorizontal: 32,
    marginBottom: 11,
  },
  selamat: {
    fontSize: RFValue(24, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    textAlign: 'center',
  },
  cekemail: {
    fontSize: RFValue(14, heightMobileUi),
    color: colors.white,
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 11,
  },
  nexts: {
    color: colors.white,
    marginTop: 11,
    marginBottom: 4,
  },
});
