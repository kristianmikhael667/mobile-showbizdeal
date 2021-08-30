import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Facebook, Instagram, Youtube} from '../../assets';
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
    const {market, getCategoryResult} = this.state;
  }

  render() {
    const {market, getCategoryResult} = this.state;
    return (
      <View style={styles.page}>
        <Image
          style={styles.images}
          source={{
            uri: API_URL + market.img + '&w=500&h=500&fit=crop',
          }}
        />
        <Text style={styles.name}>{market.name}</Text>
        {getCategoryResult ? (
          getCategoryResult.map(category => {
            {
              if (category.id === market.vendor_category[0].sub_category_id) {
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
          <View style={styles.media}>
            <Facebook />
          </View>
          <View style={styles.media}>
            <Instagram />
          </View>
          <View style={styles.media}>
            <Youtube />
          </View>
        </View>
        <View style={styles.cardmanajer}></View>
      </View>
    );
  }
}

export default DetailMarket;

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
  },
  media: {
    marginRight: 8,
  },
  cardmanajer: {
    flexDirection: 'row',
  },
});
