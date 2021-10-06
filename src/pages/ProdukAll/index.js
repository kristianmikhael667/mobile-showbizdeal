import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {getProductAll} from '../../actions/MarketPlace';
import {ButtonBack, Disconnect} from '../../assets';
import {API_URL, heightMobileUi} from '../../utils/constant';
import {responsiveWidth, responsiveHeight, colors, fonts} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

import {Jarak, Loading, StatusBars} from '../../components';
class ProdukAll extends Component {
  constructor(props) {
    super(props);
    this.modalizeReff = React.createRef();
    this.state = {
      markets: this.props.route.params.markets,
    };
  }

  componentDidMount() {
    const {markets} = this.state;

    this.props.dispatch(getProductAll(markets.id));
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    const {markets} = this.state;
    this.props.dispatch(getProductAll(markets.id));
    this.setState({refreshing: false});
  };

  render() {
    const {getProductResult, getProductLoading, getProductError} = this.props;
    return (
      <View style={styles.pages}>
        <StatusBars />
        <View
          style={{
            backgroundColor: colors.white,
            width: '100%',
            paddingTop: Platform.OS === 'ios' ? 5 : 0,
            flexDirection: 'row',
            paddingHorizontal: responsiveWidth(26),
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{marginTop: 30}}>
            <ButtonBack />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text
              style={{
                marginTop: 30,
                alignSelf: 'center',
                fontFamily: fonts.primary.bold,
                fontSize: RFValue(18, heightMobileUi),
              }}>
              Product
            </Text>
          </View>
        </View>
        <Jarak height={7} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.body}>
            {getProductResult ? (
              getProductResult.map((product, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('DetailMarket', {
                        product,
                        getCategoryResult,
                      })
                    }
                    style={styles.bodysub}>
                    {product.images.map(img => {
                      return (
                        <Image
                          style={styles.images}
                          source={{
                            uri: API_URL + img.images,
                          }}
                        />
                      );
                    })}

                    <Text numberOfLines={1} style={styles.nama}>
                      {product.name}
                    </Text>

                    <Text style={styles.review}>{product.price}</Text>
                  </TouchableOpacity>
                );
              })
            ) : getProductLoading ? (
              <Loading />
            ) : getProductError ? (
              <View
                style={{alignItems: 'center', marginHorizontal: 18, flex: 1}}>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'Montserrat-Bold'
                        : fonts.primary.bold,
                    marginBottom: 6,
                    color: colors.primary2,
                  }}>
                  500
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'Montserrat-Medium'
                        : fonts.primary.normal,
                    marginBottom: 6,
                  }}>
                  Something is wrong
                </Text>
                <Text style={{textAlign: 'center', marginBottom: 10}}>
                  We're having an issue, please try one of these option to get
                  you back on track
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // Produk
  getProductLoading: state.MarketPlaceReducer.getProductLoading,
  getProductResult: state.MarketPlaceReducer.getProductResult,
  getProductError: state.MarketPlaceReducer.getProductError,
});

export default connect(mapStatetoProps, null)(ProdukAll);

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: colors.white,
  },
  images: {
    width: '100%',
    height: responsiveHeight(187),
    marginRight: responsiveWidth(4),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
    resizeMode: 'contain',
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
    paddingHorizontal: 10,
    marginTop: 9,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : fonts.primary.bold,
    fontSize: RFValue(16, heightMobileUi),
  },

  review: {
    fontSize: 7,
    marginTop: 7,
    textAlign: 'center',
    marginBottom: 8,
  },
});
