import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getManajemenProfileById} from '../../actions/MarketPlace';
import {ButtonBack} from '../../assets';
import {Jarak, StatusBars} from '../../components';
import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class DetailPortopolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      market: this.props.route.params.market,
      mbar: this.props.route.params.mbar,
      porto: this.props.route.params.porto.video,
    };
  }

  componentDidMount() {
    const {market} = this.state;
    this.props.dispatch(getManajemenProfileById(market.business_id));
  }

  render() {
    const {mbar, porto, market} = this.state;
    console.log(market.id);
    return (
      <View style={styles.pages}>
        <StatusBars />
        <View style={styles.header}>
          <View style={styles.buttonback}>
            <ButtonBack />
          </View>
          <View style={styles.title}>
            <Text style={styles.titletext}>Portopolio</Text>
          </View>
        </View>
        <Jarak height={2} />
        <View style={styles.bodys}>
          <Text style={styles.showcase}>Showcase</Text>
          <Image
            style={styles.images}
            source={{
              uri: API_URL + market.img + '&w=500&h=500&fit=crop',
            }}
          />
          <Text>{market.id}</Text>
        </View>
      </View>
    );
  }
}

export default connect()(DetailPortopolio);
const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  header: {
    height: responsiveHeight(120),
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 44,
    paddingBottom: 34,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
  },
  titletext: {
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: RFValue(18, heightMobileUi),
  },
  bodys: {
    backgroundColor: colors.white,
  },
  showcase: {
    marginTop: 33,
    textAlign: 'center',
    fontSize: RFValue(18, heightMobileUi),
    fontFamily: fonts.primary.bold,
  },
  images: {
    width: responsiveWidth(142),
    height: responsiveHeight(142),
    alignSelf: 'center',
    marginTop: 35,
  },
});
