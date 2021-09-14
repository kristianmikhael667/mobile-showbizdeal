import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import {connect} from 'react-redux';
import {getManajemenProfileId} from '../../actions/MarketPlace';
import {
  ButtonLefts,
  Heads,
  ImgFacebook,
  ImgInstagram,
  ImgWebsite,
  ImgWhatsapp,
  ImgYoutube,
  LogoHeader,
  MenuAlamat,
  MyEvent,
  MyOrder,
  MyPortopolio,
  MyProduct,
  MyTalent,
} from '../../assets';
import {StatusBars, Tombol} from '../../components';
import {
  API_URL,
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class MyDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: this.props.route.params.profiles,
    };
  }

  componentDidMount() {
    const {profiles} = this.state;
    this.props.dispatch(getManajemenProfileId(profiles.uid));
  }

  render() {
    const {getManajementResult} = this.props;
    console.log(getManajementResult);

    return (
      <View style={styles.pages}>
        <ScrollView
          showsVerticalScrollIndicator
          contentContainerStyle={{
            top: 0,
            bottom: 0,
            flexGrow: 1,
            height: 1080,
          }}>
          <View style={styles.header}>
            <Image
              style={{
                resizeMode: 'stretch',
                width: '100%',
                height: responsiveHeight(312),
              }}
              source={Heads}
            />
            <Image
              source={LogoHeader}
              style={{position: 'absolute', marginTop: 6, marginLeft: 22}}
            />
            <View
              style={{
                marginTop: 60,
                position: 'absolute',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginLeft: responsiveWidth(20),
                }}>
                <Tombol
                  onPress={() => this.props.navigation.goBack()}
                  icon="left"
                  paddingVertical={8}
                  paddingHorizontal={10}
                />
              </View>
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginHorizontal: responsiveWidth(50),
                }}>
                <Text style={styles.dashboard}>My Dashboard</Text>
              </View>
              <View style={{}}>
                <Tombol marginRight={20} icon="notifikasi" padding={10} />
              </View>
            </View>
            <View style={styles.profile}>
              <View style={styles.profilebisnis}>
                <Image
                  style={styles.gambar}
                  source={{uri: API_URL + getManajementResult.img}}
                />
                <View style={styles.texts}>
                  <Text style={styles.tit}>Nama Bisnis</Text>
                  <Text style={styles.nama}>{getManajementResult.name}</Text>
                  <Text style={styles.tit}>NIK</Text>
                  <Text style={styles.some}>{getManajementResult.nik}</Text>
                  <Text style={styles.tit}>NPWP</Text>
                  <Text style={styles.some}>{getManajementResult.npwp}</Text>
                  <Text style={styles.tit}>SIUP</Text>
                  <Text style={styles.some}>{getManajementResult.siup}</Text>
                </View>
              </View>
              <View
                style={{
                  width: responsiveWidth(334),
                  borderWidth: 1,
                  borderColor: colors.line,
                  alignSelf: 'center',
                  marginBottom: 6,
                  marginTop: responsiveHeight(16),
                }}
              />
              <Text style={styles.bussines}>Bussiness Social Media</Text>
              <View style={{marginHorizontal: 18, marginBottom: 13}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image
                      source={ImgWebsite}
                      style={{
                        width: responsiveWidth(66),
                        marginRight: 1,
                        height: 18,
                        borderRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={ImgFacebook}
                      style={{
                        width: responsiveWidth(66),
                        marginRight: 1,
                        height: 18,
                        borderRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={ImgInstagram}
                      style={{
                        width: responsiveWidth(66),
                        marginRight: 1,
                        height: 18,
                        borderRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={ImgWhatsapp}
                      style={{
                        width: responsiveWidth(66),
                        marginRight: 1,
                        height: 18,
                        borderRadius: 2,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={ImgYoutube}
                      style={{
                        width: responsiveWidth(66),
                        borderRadius: 2,
                        height: 18,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bio}>
              <Text style={styles.biodara}>Bio</Text>
              <View
                style={{
                  width: responsiveWidth(334),
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                  marginBottom: 15,
                }}>
                <Text style={styles.descs}>{getManajementResult.desc}</Text>
              </View>
              <Text style={styles.biodara}>Alamat</Text>
              <View
                style={{
                  width: responsiveWidth(334),
                  alignSelf: 'center',
                  paddingHorizontal: 20,
                  marginBottom: 15,
                }}>
                <Text style={styles.descs}>{getManajementResult.address}</Text>
                <Text style={styles.viewmaps}>View On Map</Text>
              </View>
            </View>
          </View>
          <View style={styles.menus}>
            <TouchableOpacity style={styles.menu}>
              <View style={{flexDirection: 'row'}}>
                <MyTalent />
                <Text style={styles.textmenu}>My Talent</Text>
              </View>
              <View>
                <ButtonLefts />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <View style={{flexDirection: 'row'}}>
                <MyProduct />
                <Text style={styles.textmenu}>My Product</Text>
              </View>
              <View>
                <ButtonLefts />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <View style={{flexDirection: 'row'}}>
                <MyPortopolio />
                <Text style={styles.textmenu}>My Portopolio</Text>
              </View>
              <View>
                <ButtonLefts />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <View style={{flexDirection: 'row'}}>
                <MyOrder />
                <Text style={styles.textmenu}>My Order</Text>
              </View>
              <View>
                <ButtonLefts />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <View style={{flexDirection: 'row'}}>
                <MyEvent />
                <Text style={styles.textmenu}>My Event</Text>
              </View>
              <View>
                <ButtonLefts />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getManajementResult: state.MarketPlaceReducer.getManajementResult,
});

export default connect(mapStatetoProps, null)(MyDashboard);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },

  dashboard: {
    fontFamily: fonts.primary.bold,
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
  profile: {
    backgroundColor: colors.white,
    width: responsiveWidth(374),
    // height: responsiveHeight(251),
    position: 'absolute',
    top: 114,
    borderRadius: 10,
    alignSelf: 'center',
  },
  profilebisnis: {
    flexDirection: 'row',
  },
  bio: {
    backgroundColor: colors.white,
    width: responsiveWidth(374),
    // height: responsiveHeight(278),
    position: 'absolute',
    top: 400,
    borderRadius: 10,
    alignSelf: 'center',
  },
  menus: {
    backgroundColor: colors.white,
    top: 750,
    position: 'absolute',
    width: '100%',
    paddingTop: 36,
    paddingBottom: 59,
    paddingHorizontal: 19,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textmenu: {
    marginLeft: 27,
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    alignSelf: 'center',
  },
  gambar: {
    width: responsiveWidth(112),
    height: responsiveHeight(154),
    marginLeft: 20,
    resizeMode: 'contain',
    marginTop: 23,
  },
  bussines: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.grey,
    marginBottom: 4,
  },
  texts: {
    marginLeft: 26,
    marginTop: 23,
  },
  tit: {
    fontSize: 12,
    color: colors.bisnis,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    marginBottom: 7,
  },
  some: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    marginBottom: 10,
  },
  biodara: {
    fontSize: 12,
    color: colors.bisnis,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 5,
  },
  viewmaps: {
    fontStyle: 'italic',
    fontSize: 12,
    color: colors.bisnis,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 5,
  },
  descs: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    textAlign: 'center',
  },
});
