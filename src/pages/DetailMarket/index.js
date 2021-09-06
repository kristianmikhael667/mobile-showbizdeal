import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {
  getManajemenProfileById,
  getPortofolio,
} from '../../actions/MarketPlace';
import {Facebook, FillStart, Instagram, TimeBomb, Youtube} from '../../assets';
import {Jarak, StatusBars, Tombol} from '../../components';
import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class DetailMarket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      market: this.props.route.params.market,
      getCategoryResult: this.props.route.params.getCategoryResult,
    };
  }

  componentDidMount() {
    const {market} = this.state;
    this.props.dispatch(getManajemenProfileById(market.business_id));
    this.props.dispatch(getPortofolio(market.id));
  }

  render() {
    const {market, getCategoryResult} = this.state;
    const ig = market.instagram;
    const fb = market.facebook;
    const ig_link = ig.length > 25 ? ig.substring(26, ig.length - 1) : ig;
    const fb_link = fb.substring(25, fb.length - 1);
    console.log(ig_link);
    const {getManajementProfileResult, getPortofolioResult} = this.props;
    return (
      <View style={styles.page}>
        <StatusBars />
        <ScrollView>
          <Image
            style={styles.images}
            source={{
              uri: API_URL + market.img + '&w=500&h=500&fit=crop',
            }}
          />
          <View style={{backgroundColor: colors.white}}>
            <Text style={styles.name}>{market.name}</Text>
            {getCategoryResult ? (
              getCategoryResult.map(category => {
                {
                  if (
                    category.id === market.vendor_category[0].sub_category_id
                  ) {
                    return <Text style={styles.category}>{category.name}</Text>;
                  } else {
                    <Text>No</Text>;
                  }
                }
              })
            ) : (
              <Text>kosong</Text>
            )}
            <View style={styles.sosmed}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`fb://profile/` + fb_link);
                }}
                style={styles.media}>
                <Facebook />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`instagram://user?username=` + ig_link);
                }}
                style={styles.media}>
                <Instagram />
              </TouchableOpacity>
              <TouchableOpacity style={styles.media}>
                <Youtube />
              </TouchableOpacity>
            </View>
          </View>

          <Jarak height={10} />
          <View style={styles.cardmanajer}>
            <View style={styles.cardmanajers}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={styles.imagesmanajemen}
                    source={{
                      uri:
                        API_URL +
                        getManajementProfileResult.img +
                        '&w=500&h=500&fit=crop',
                    }}
                  />
                </View>

                <View>
                  <Text style={styles.manajemen}>Manajemen</Text>
                  <Text style={styles.names}>
                    {getManajementProfileResult.name}
                  </Text>
                  <View style={{marginTop: 4, flexDirection: 'row'}}>
                    <FillStart />
                    <Text style={styles.rating}>4.9 Rata-rata Ulasan</Text>
                  </View>
                  <View style={{marginTop: 4, flexDirection: 'row'}}>
                    <TimeBomb />
                    <Text style={styles.times}>Waktu proses cepat</Text>
                  </View>
                </View>
              </View>

              <View>
                <Tombol
                  type="text"
                  title="Ikuti Management"
                  fontSize={8}
                  borderColor={colors.primary2}
                  borderWidth={1}
                  borderRadius={3}
                  paddingVertical={5}
                  paddingHorizontal={21}
                  color={colors.primary2}
                  width={110}
                  height={responsiveHeight(30)}
                  // onPress={() => this.props.navigation.navigate('Login')}
                  backgroundColor={colors.white}
                />
              </View>
            </View>
          </View>
          <Jarak height={10} />
          <View style={styles.cardportofolio}>
            <View style={styles.board}>
              <Text style={styles.portofoliotitle}>Portofolio</Text>
              <Text style={styles.seeall}>Lihat Semua</Text>
            </View>
            <View style={styles.portopolio}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {getPortofolioResult ? (
                  getPortofolioResult.map(porto => {
                    return (
                      <>
                        {porto.images.map(mbar => {
                          return (
                            <>
                              <TouchableOpacity
                                onPress={() =>
                                  this.props.navigation.navigate(
                                    'DetailPortopolio',
                                    {
                                      mbar,
                                      porto,
                                      market,
                                      getManajementProfileResult,
                                    },
                                  )
                                }>
                                <Image
                                  style={styles.imageporto}
                                  source={{uri: API_URL + mbar.images}}
                                />
                              </TouchableOpacity>
                            </>
                          );
                        })}
                      </>
                    );
                  })
                ) : (
                  <Text>Tidak Ada Portofolio</Text>
                )}
              </ScrollView>
            </View>
          </View>
          <Jarak height={10} />
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // Get Manajement

  getManajementProfileResult:
    state.MarketPlaceReducer.getManajementProfileResult,

  getPortofolioResult: state.MarketPlaceReducer.getPortofolioResult,
});
export default connect(mapStatetoProps, null)(DetailMarket);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.pembatas,
  },
  images: {
    width: '100%',
    height: responsiveHeight(423),
    marginRight: responsiveWidth(4),
    resizeMode: 'cover',
  },
  name: {
    textAlign: 'center',
    fontSize: RFValue(30, heightMobileUi),
    fontFamily: fonts.primary.bold,
    marginTop: 17,
  },
  category: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: RFValue(18, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.grey,
  },
  sosmed: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 18,
  },
  media: {
    marginRight: 8,
  },
  cardmanajer: {
    backgroundColor: colors.white,
  },
  cardmanajers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  cardportofolio: {
    backgroundColor: colors.white,
  },
  imagesmanajemen: {
    width: 75,
    height: 75,
    borderRadius: 75,
    marginRight: 17,
  },
  manajemen: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, heightMobileUi),
  },
  names: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(13, heightMobileUi),
    color: colors.grey,
    marginTop: 4,
  },
  rating: {
    color: colors.grey,
    marginLeft: 5,
    fontSize: 10,
  },
  times: {
    color: colors.grey,
    marginLeft: 5,
    fontSize: 10,
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 11,
  },
  portofoliotitle: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, heightMobileUi),
  },
  seeall: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  imageporto: {
    width: responsiveWidth(144),
    height: responsiveHeight(144),
    marginRight: 10,
    marginBottom: 18,
  },
  portopolio: {
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 18,
  },
});
