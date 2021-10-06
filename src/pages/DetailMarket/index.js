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
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import {connect} from 'react-redux';
import {
  getManajemenProfileById,
  getPortofolio,
  getRating,
} from '../../actions/MarketPlace';
import {
  Backst,
  Facebook,
  FillStart,
  Instagram,
  Love,
  Start,
  TimeBomb,
  Youtube,
} from '../../assets';
import {Jarak, Loading, StatusBars, Tombol} from '../../components';
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
      markets: this.props.route.params.market,
      getCategoryResult: this.props.route.params.getCategoryResult,
    };
  }

  componentDidMount() {
    const {markets} = this.state;
    this.props.dispatch(getManajemenProfileById(markets.business_id));
    this.props.dispatch(getPortofolio(markets.id));
    this.props.dispatch(getRating(markets.id));
  }

  render() {
    const {markets, getCategoryResult} = this.state;
    const ig = markets.instagram;
    const fb = markets.facebook;
    const ig_link = ig.length > 25 ? ig.substring(26, ig.length - 1) : ig;
    const fb_link = fb.substring(25, fb.length - 1);
    const {
      getManajementProfileResult,
      getPortofolioResult,
      getRatingResult,
      getInfluencerResult,
      getInfluencerLoading,
      getInfluencerError,
    } = this.props;
    return (
      <View style={styles.page}>
        <StatusBars />
        <ScrollView>
          <Image
            style={styles.images}
            source={{
              uri: API_URL + markets.img + '&w=500&h=500&fit=crop',
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              position: 'absolute',
              top: responsiveHeight(44),
              left: responsiveWidth(19),
            }}>
            <Backst />
          </TouchableOpacity>
          <View style={{backgroundColor: colors.white}}>
            <Text style={styles.name}>{markets.name}</Text>
            {getCategoryResult ? (
              getCategoryResult.map(category => {
                {
                  if (
                    category.id === markets.vendor_category[0].sub_category_id
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
                    {getRatingResult ? (
                      getRatingResult.map(rate => {
                        return (
                          <Text style={styles.rating}>
                            {rate.rating === '' ? 0 : rate.rating} Rata-rata
                            Ulasan
                          </Text>
                        );
                      })
                    ) : (
                      <Text style={styles.rating}>0 Rata-rata Ulasan</Text>
                    )}
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
            {getPortofolioResult == false ? (
              []
            ) : (
              <>
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
                                          markets,
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
              </>
            )}
          </View>
          <Jarak height={7} />
          <View style={styles.cardportofolio}>
            {getRatingResult == false ? (
              []
            ) : (
              <>
                <View style={styles.board}>
                  <Text style={styles.portofoliotitle}>Ulasan</Text>
                  <Text style={styles.seeall}>Lihat Semua</Text>
                </View>
                <View style={styles.ratings}>
                  {getRatingResult ? (
                    getRatingResult.map(ratings => {
                      return (
                        <>
                          <View style={{flexDirection: 'row', width: '100%'}}>
                            <View>
                              <FillStart />
                            </View>
                            <View>
                              <Text style={styles.textratings}>
                                {ratings.rating} Rata-rata ulasan
                              </Text>
                            </View>
                          </View>
                          <View style={{flexDirection: 'row', marginTop: 14}}>
                            <Image
                              style={{
                                width: responsiveWidth(142),
                                height: responsiveHeight(142),
                              }}
                              source={{
                                uri: 'https://pbs.twimg.com/profile_images/1415573131251486725/Or3H-UjP_400x400.jpg',
                              }}
                            />
                            <View>
                              <View style={{flexDirection: 'row'}}>
                                <View style={{marginRight: 3}}>
                                  <FillStart />
                                </View>
                                <View style={{marginRight: 3}}>
                                  <FillStart />
                                </View>
                                <View style={{marginRight: 3}}>
                                  <FillStart />
                                </View>
                                <View style={{marginRight: 3}}>
                                  <FillStart />
                                </View>
                                <View style={{marginRight: 3}}>
                                  <FillStart />
                                </View>
                              </View>
                              <View style={{marginVertical: 10}}>
                                <Text style={{fontSize: 10}}>
                                  oleh{' '}
                                  <Text
                                    style={{fontWeight: 'bold', fontSize: 10}}>
                                    {ratings.user_name}
                                  </Text>
                                </Text>
                              </View>

                              <Text style={{fontSize: 10}}>
                                {ratings.review}
                              </Text>
                            </View>
                          </View>
                        </>
                      );
                    })
                  ) : (
                    <Text>Tidak Ada Ratings</Text>
                  )}
                </View>
              </>
            )}
          </View>
          <View style={styles.cardportofolio}>
            <View style={styles.board}>
              <Text style={styles.portofoliotitle}>Produk Lainnya</Text>
              <Text style={styles.seeall}>Lihat Semua</Text>
            </View>
            <View style={styles.portopolio}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {getInfluencerResult ? (
                  getInfluencerResult.slice(0, 4).map((market, index) => {
                    {
                      if (markets.business_id !== market.business_id) {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              this.props.navigation.replace('DetailMarket', {
                                market,
                                getCategoryResult,
                              })
                            }
                            style={styles.bodysub}>
                            <Image
                              style={styles.imagess}
                              source={{
                                uri:
                                  API_URL +
                                  market.img +
                                  '&w=500&h=500&fit=crop',
                              }}
                            />
                            <View style={styles.love}>
                              <View
                                style={{
                                  alignItems: 'center',
                                  marginVertical: 6,
                                }}>
                                <>
                                  <Love />
                                </>
                              </View>
                            </View>
                            <Text style={styles.nama}>{market.name}</Text>
                            {getCategoryResult ? (
                              getCategoryResult.map(category => {
                                {
                                  if (
                                    category.id ===
                                    market.vendor_category[0].sub_category_id
                                  ) {
                                    return (
                                      <Text style={styles.category}>
                                        {category.name}
                                      </Text>
                                    );
                                  } else {
                                    <Text>No</Text>;
                                  }
                                }
                              })
                            ) : (
                              <Text>kosong</Text>
                            )}
                            <View style={styles.start}>
                              {/* {this.props.dispatch(getRatings([market.id]))} */}

                              <Start />
                              <Start />
                              <Start />
                              <Start />
                              <Start />
                            </View>
                            <Text style={styles.review}>(0 Reviews)</Text>
                          </TouchableOpacity>
                        );
                      } else {
                        [];
                      }
                    }
                  })
                ) : getInfluencerLoading ? (
                  <Loading />
                ) : getInfluencerError ? (
                  <View
                    style={{
                      alignItems: 'center',
                      marginHorizontal: 18,
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontFamily: fonts.primary.bold,
                        marginBottom: 6,
                        color: colors.primary2,
                      }}>
                      500
                    </Text>
                    <Text
                      style={{
                        fontSize: 25,
                        fontFamily: fonts.primary.normal,
                        marginBottom: 6,
                      }}>
                      Something is wrong
                    </Text>
                    <Text style={{textAlign: 'center', marginBottom: 10}}>
                      We're having an issue, please try one of these option to
                      get you back on track
                    </Text>
                    <Image
                      style={{
                        width: responsiveWidth(150),
                        height: responsiveHeight(165),
                      }}
                      source={Disconnect}
                    />
                  </View>
                ) : (
                  <Text>Gak ada</Text>
                )}
              </ScrollView>
            </View>
          </View>
          <Jarak height={responsiveHeight(91)} />
        </ScrollView>

        <View style={styles.footer}>
          <Tombol
            marginLeft={18}
            marginRight={16}
            icon="message"
            paddingHorizontal={16}
            paddingVertical={10}
            width={responsiveWidth(67)}
            borderWidth={1}
            alignSelf="center"
            height={responsiveHeight(47)}
            borderColor={colors.primaryLive2}
          />
          <Tombol
            type="text"
            title="Booking"
            fontSize={RFValue(20, heightMobileUi)}
            borderColor={colors.white}
            borderWidth={1}
            paddingVertical={8}
            color={colors.white}
            width={responsiveWidth(295)}
            height={responsiveHeight(47)}
            borderRadius={5}
            textAlign="center"
            fontWeight="bold"
            onPress={() =>
              this.props.navigation.navigate('ProdukAll', {
                markets,
              })
            }
            backgroundColor={colors.primary2}
          />
        </View>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // Marketplace
  getInfluencerLoading: state.MarketPlaceReducer.getInfluencerLoading,
  getInfluencerResult: state.MarketPlaceReducer.getInfluencerResult,
  getInfluencerError: state.MarketPlaceReducer.getInfluencerError,

  // Category
  getCategoryLoading: state.MarketPlaceReducer.getCategoryLoading,
  getCategoryResult: state.MarketPlaceReducer.getCategoryResult,
  getCategoryError: state.MarketPlaceReducer.getCategoryError,

  // Get Manajement
  getManajementProfileResult:
    state.MarketPlaceReducer.getManajementProfileResult,
  getPortofolioResult: state.MarketPlaceReducer.getPortofolioResult,

  // Get Rating
  getRatingLoading: state.MarketPlaceReducer.getRatingLoading,
  getRatingResult: state.MarketPlaceReducer.getRatingResult,
  getRatingError: state.MarketPlaceReducer.getRatingError,
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

  ratings: {
    marginTop: 11,
    marginLeft: 18,
  },
  textratings: {
    fontSize: RFValue(13, heightMobileUi),
    justifyContent: 'center',
    marginLeft: 3,
  },

  bodysub: {
    width: responsiveWidth(168),
    height: responsiveHeight(290),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    marginBottom: 16,
    marginHorizontal: responsiveWidth(6),
  },
  imagess: {
    width: '100%',
    height: responsiveHeight(182),
    marginRight: responsiveWidth(4),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
  },
  love: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 24,
    top: 7,
    right: 7,
  },
  nama: {
    textAlign: 'center',
    marginTop: 9,
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, heightMobileUi),
  },
  category: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    marginBottom: 9,
  },
  start: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  review: {
    fontSize: 7,
    marginTop: 7,
    textAlign: 'center',
    marginBottom: 8,
  },
  footer: {
    // borderTopRightRadius: 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(80),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
});
