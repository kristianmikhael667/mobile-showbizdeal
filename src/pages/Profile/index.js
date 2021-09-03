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
  MenuDashboard,
  MenuFavorit,
  MenuIdCard,
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
  getData,
  responsiveHeight,
  responsiveWidth,
  clearStorage,
  API_URL,
} from '../../utils';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: false,
      role: false,
    };
  }

  login = () => {
    clearStorage();
    this.props.navigation.replace('Info');
  };

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('users').then(res => {
      const data = res;
      if (data) {
        this.setState({
          profiles: data.data.user,
          role: data.data,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {profiles, role} = this.state;
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
            <View style={styles.biok}>
              <Text style={styles.nama}>{profiles.full_name}</Text>
              <Text style={styles.email}>{profiles.email}</Text>
              <Text style={styles.nik}>{profiles.nik ? profiles.nik : []}</Text>
            </View>
            {role.roles == 'common.user' ? (
              <TouchableOpacity style={styles.bio}>
                <Image style={styles.beapart} source={BeAPartner} />
              </TouchableOpacity>
            ) : (
              []
            )}
            {role.roles == 'common.user' ? (
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
                <TouchableOpacity
                  onPress={() => this.login()}
                  style={styles.menus}>
                  <View style={{flexDirection: 'row'}}>
                    <MenuKeluar />
                    <Text style={styles.textmenu}>Keluar</Text>
                  </View>
                  <View>
                    <ButtonLefts />
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.bios}>
                <View style={styles.menus}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('IDCard', {
                        profiles,
                      })
                    }
                    style={{flexDirection: 'row'}}>
                    <MenuIdCard />
                    <Text style={styles.textmenu}>View my ID Card</Text>
                  </TouchableOpacity>
                  <View>
                    <ButtonLefts />
                  </View>
                </View>
                <View style={styles.menus}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('MyDashboard', {
                        profiles,
                      })
                    }
                    style={{flexDirection: 'row'}}>
                    <MenuDashboard />
                    <Text style={styles.textmenu}>My Dashboard</Text>
                  </TouchableOpacity>
                  <View>
                    <ButtonLefts />
                  </View>
                </View>
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
                <TouchableOpacity
                  onPress={() => this.login()}
                  style={styles.menus}>
                  <View style={{flexDirection: 'row'}}>
                    <MenuKeluar />
                    <Text style={styles.textmenu}>Keluar</Text>
                  </View>
                  <View>
                    <ButtonLefts />
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 100,
              }}>
              <Image
                style={styles.images}
                source={{
                  uri: profiles.avatar_url
                    ? API_URL + profiles.avatar_url
                    : 'https://pbs.twimg.com/profile_images/1415573131251486725/Or3H-UjP_400x400.jpg',
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
  biok: {
    backgroundColor: colors.white,
    height: responsiveHeight(130),
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
  nik: {
    fontSize: RFValue(18, heightMobileUi),
    marginBottom: 11,
    marginTop: 3,
    textAlign: 'center',
  },
});
