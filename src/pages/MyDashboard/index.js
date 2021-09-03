import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import {connect} from 'react-redux';
import {getManajemenProfileId} from '../../actions/MarketPlace';
import {Heads, LogoHeader} from '../../assets';
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

    return (
      <View style={styles.pages}>
        <StatusBars />
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
            style={{marginTop: 60, position: 'absolute', flexDirection: 'row'}}>
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
          <View style={styles.bio}>
            <Text>Bio</Text>
            <Text>{getManajementResult.desc}</Text>
            <Text>Alamat</Text>
            <Text>{getManajementResult.address}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getManajementResult: state.MarketPlaceReducer.getManajementResult,
});

export default connect(mapStatetoProps, null)(MyDashboard);

const styles = StyleSheet.create({
  dashboard: {
    fontFamily: fonts.primary.bold,
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
  profilebisnis: {
    backgroundColor: colors.white,
    width: responsiveWidth(374),
    height: responsiveHeight(251),
    position: 'absolute',
    top: 114,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  bio: {
    backgroundColor: colors.white,
    width: responsiveWidth(374),
    height: responsiveHeight(251),
    position: 'absolute',
    top: 330,
    borderRadius: 10,
    alignSelf: 'center',
  },
  gambar: {
    width: responsiveWidth(112),
    height: responsiveHeight(154),
    marginLeft: 20,
    resizeMode: 'contain',
    marginTop: 23,
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
});
