import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getCategory, getMarketPlace} from '../../actions/MarketPlace';
import {Heads, LogoHeader, Love, Start} from '../../assets';
import {API_URL, heightMobileUi} from '../../utils/constant';
import {responsiveWidth, responsiveHeight, colors, fonts} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {Inputan} from '../../components';
class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getMarketPlace());
    this.props.dispatch(getCategory());
  }
  render() {
    const {
      getdataMarketPlaceResult,
      getdataMarketPlaceLoading,
      getdataMarketPlaceError,
      getCategoryResult,
    } = this.props;
    return (
      <View style={styles.pages}>
        <ScrollView>
          <View style={styles.header}>
            <Image
              style={{resizeMode: 'stretch', width: '100%'}}
              source={Heads}
            />
            <Image
              source={LogoHeader}
              style={{position: 'absolute', marginTop: 52, marginLeft: 32}}
            />
            <View style={{position: 'absolute', left: 18, top: 35}}>
              <Inputan
                fontSize={14}
                placeholder="DJ Soda"
                width={responsiveWidth(275)}
                height={34}
                color={colors.white}
                backgroundColor={colors.white}
                fontSizes={14 * 1.1}
                textAlignVertical="top"
              />
            </View>
          </View>
          <View style={styles.body}>
            {getdataMarketPlaceResult ? (
              getdataMarketPlaceResult.map(market => {
                return (
                  <TouchableOpacity style={styles.bodysub}>
                    <Image
                      style={styles.images}
                      source={{
                        uri: API_URL + market.img + '&w=500&h=500&fit=crop',
                      }}
                    />
                    <View style={styles.love}>
                      <View style={{alignItems: 'center', marginVertical: 6}}>
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
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                    </View>
                    <Text style={styles.review}>(0 Reviews)</Text>
                  </TouchableOpacity>
                );
              })
            ) : getdataMarketPlaceLoading ? (
              <View
                style={{
                  flex: 1,
                }}>
                <ActivityIndicator size="large" color={colors.primary2} />
              </View>
            ) : getdataMarketPlaceError ? (
              <Text>Error</Text>
            ) : (
              <Text>Gak ada</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getdataMarketPlaceLoading: state.MarketPlaceReducer.getdataMarketPlaceLoading,
  getdataMarketPlaceResult: state.MarketPlaceReducer.getdataMarketPlaceResult,
  getdataMarketPlaceError: state.MarketPlaceReducer.getdataMarketPlaceError,

  getCategoryLoading: state.MarketPlaceReducer.getCategoryLoading,
  getCategoryResult: state.MarketPlaceReducer.getCategoryResult,
  getCategoryError: state.MarketPlaceReducer.getCategoryError,
});

export default connect(mapStatetoProps, null)(Home);

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#F2F2F2',
  },
  body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: colors.white,
  },
  images: {
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
    marginHorizontal: responsiveWidth(7),
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
});
