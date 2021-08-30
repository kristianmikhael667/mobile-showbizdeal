import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {LogoFB, LogoGoogle, LogoTwitter} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, heightMobileUi} from '../../utils';

export default class Login extends Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={styles.container}>
        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.judul}> Selamat Datang Kembali! </Text>
            <Text style={styles.subjudul}>
              Yuk masuk ke ShowbizDeal, jangan lewatkan fitur fitur menarik di
              ShowbizDeal ya!
            </Text>
          </View>
          <View style={styles.body}>
            <Inputan
              label="Username"
              fontSize={14}
              placeholder="Username"
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
            />
            <Jarak height={25} />
            <Inputan
              label="Password"
              fontSize={14}
              placeholder="******"
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
            />
            <Jarak height={52} />
            <Tombol
              type="text"
              title="Masuk"
              fontSize={18}
              borderColor={colors.white}
              borderWidth={1}
              paddingVertical={11}
              paddingHorizontal={101}
              color={colors.primary2}
              width={259}
              height={48}
              onPress={() => this.props.navigation.navigate('Login')}
              backgroundColor={colors.white}
            />
            <Text style={styles.punyakun}>Belum Punya akun?</Text>
            <Jarak height={4} />
            <Tombol
              type="text"
              title="Daftar Disini"
              fontSize={14}
              borderColor={colors.white}
              borderWidth={1}
              paddingVertical={8}
              paddingHorizontal={28}
              color={colors.white}
              width={199}
              height={36}
              onPress={() => this.props.navigation.replace('Register')}
              backgroundColor={colors.primary2}
            />
            <Text style={styles.punyakun}>
              atau Bergabung dengan media sosial
            </Text>
            <View style={styles.sosmed}>
              <View style={{marginRight: 10}}>
                <LogoFB />
              </View>
              <View style={{marginRight: 10}}>
                <LogoTwitter />
              </View>
              <View>
                <LogoGoogle />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 44,
    marginTop: 164,
    marginBottom: 52,
  },
  judul: {
    fontSize: RFValue(24, heightMobileUi),
    color: colors.white,
    fontFamily: fonts.primary.bold,
    marginBottom: 10,
    textAlign: 'center',
  },
  subjudul: {
    color: colors.white,
    textAlign: 'center',
    lineHeight: 27,
    fontSize: RFValue(14, heightMobileUi),
  },
  body: {
    alignItems: 'center',
  },
  punyakun: {
    marginTop: 25,
    color: colors.white,
    fontSize: 14,
  },
  sosmed: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 61,
  },
});
