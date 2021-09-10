import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getManajemenProfileById} from '../../actions/MarketPlace';
import {ButtonBack} from '../../assets';
import {Jarak, StatusBars} from '../../components';
import YouTube from 'react-native-youtube';

import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

class DetailPortopolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      market: this.props.route.params.market,
      mbar: this.props.route.params.mbar,
      porto: this.props.route.params.porto.video,
      getManajementProfileResult:
        this.props.route.params.getManajementProfileResult,
    };
  }

  componentDidMount() {
    const {market} = this.state;
    this.props.dispatch(getManajemenProfileById(market.business_id));
  }

  render() {
    const {mbar, porto, market, getManajementProfileResult} = this.state;
    const desc = getManajementProfileResult.desc;
    const ret = desc.replace(/<(.|\n)*?>/g, '');
    const video = porto[0].videos;
    const linkgan = video.substring(32);
    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.buttonback}>
              <ButtonBack />
            </TouchableOpacity>
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
            <Text style={styles.descrip}>{ret}</Text>
            <Text style={styles.portos}>Portofolio Video</Text>
            <View style={{flex: 1}}>
              <YouTube
                apiKey={'AIzaSyDqggACMsADXec31L6Nxc_GODyjgxS8o2A'}
                videoId={linkgan} // The YouTube video ID
                play // control playback of video with true/false
                onReady={e => this.setState({isReady: true})}
                onChangeState={e => this.setState({status: e.state})}
                onChangeQuality={e => this.setState({quality: e.quality})}
                onError={e => this.setState({error: e.error})}
                style={{
                  alignSelf: 'center',
                  height: 248,
                  width: responsiveWidth(374),
                  marginBottom: 35,
                }}
              />
            </View>
            <View>
              <Text style={styles.portok}>Portofolio Photo</Text>
              <View style={{marginHorizontal: 20, marginBottom: 29}}>
                <Image
                  style={{width: 120, height: 120, resizeMode: 'contain'}}
                  source={{uri: API_URL + mbar.images}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
    color: colors.grey,
  },
  portos: {
    marginTop: 33,
    textAlign: 'center',
    fontSize: RFValue(18, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.grey,
    marginBottom: 16,
  },
  portok: {
    marginTop: 33,
    textAlign: 'center',
    fontSize: RFValue(18, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.grey,
    marginBottom: 16,
  },
  images: {
    width: responsiveWidth(142),
    height: responsiveHeight(142),
    alignSelf: 'center',
    marginTop: 35,
  },
  descrip: {
    color: colors.grey,
    fontSize: RFValue(15, heightMobileUi),
    textAlign: 'center',
    marginHorizontal: responsiveWidth(64),
    marginTop: 35,
  },
});
