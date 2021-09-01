import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  BeAPartner,
  ButtonLefts,
  Heads,
  LogoHeader,
  MenuAlamat,
  MenuFavorit,
  MenuKeluar,
  MenuPembayaran,
  MenuSetBahasa,
  MenuShowbizcare,
  MenuTransaksi,
  MenuUbahProfile,
} from '../../assets';
import {Tombol} from '../../components';
import {
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <ScrollView>
          <View style={styles.heads}>
            <Image
              style={{resizeMode: 'stretch', width: '100%', height: 181}}
              source={Heads}
            />
            <Image
              source={LogoHeader}
              style={{position: 'absolute', marginTop: 6, marginLeft: 22}}
            />
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginTop: 30,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Tombol
                marginTop={30}
                marginRight={16}
                icon="notifikasi"
                padding={10}
              />
            </View>
            <View style={styles.bio}>
              <Text style={styles.nama}>Sasuke Uchiha</Text>
              <Text style={styles.email}>sasukeuchiha@email.com</Text>
            </View>
            <TouchableOpacity style={styles.bio}>
              <Image style={styles.beapart} source={BeAPartner} />
            </TouchableOpacity>
            <View style={styles.bios}>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuUbahProfile />
                  <Text style={styles.textmenu}>Ubah Profile</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuAlamat />
                  <Text style={styles.textmenu}>Alamat</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuFavorit />
                  <Text style={styles.textmenu}>Favorit</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuTransaksi />
                  <Text style={styles.textmenu}>Transaksi Saya</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuPembayaran />
                  <Text style={styles.textmenu}>Pembayaran</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuSetBahasa />
                  <Text style={styles.textmenu}>Pengaturan Bahasa</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuShowbizcare />
                  <Text style={styles.textmenu}>ShowbizCare</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
              <View style={styles.menus}>
                <View style={{flexDirection: 'row'}}>
                  <MenuKeluar />
                  <Text style={styles.textmenu}>Keluar</Text>
                </View>
                <View>
                  <ButtonLefts />
                </View>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 100,
              }}>
              <Image
                style={styles.images}
                source={{
                  uri: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/01/02/3432118224.jpg',
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  bio: {
    backgroundColor: colors.white,
    height: responsiveHeight(117),
    marginTop: 11,
  },
  bios: {
    backgroundColor: colors.white,
    marginTop: 11,
    paddingTop: 28,
    paddingBottom: 31,
    paddingHorizontal: 18,
  },
  beapart: {
    width: responsiveWidth(375),
    marginHorizontal: 18,
    borderRadius: 10,
    height: responsiveHeight(91),
    marginVertical: 10,
  },
  menus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(25, heightMobileUi),
    marginTop: 30,
    color: colors.primary2,
    textAlign: 'center',
    marginBottom: 2,
  },
  images: {
    width: responsiveWidth(143),
    height: responsiveHeight(143),
    borderRadius: 143,
  },
  email: {
    fontSize: RFValue(18, heightMobileUi),
    textAlign: 'center',
  },
  textmenu: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    marginLeft: 27,
    alignSelf: 'center',
  },
});
