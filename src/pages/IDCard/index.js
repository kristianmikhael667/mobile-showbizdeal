import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getManajemenProfileId} from '../../actions/MarketPlace';
import {ButtonBack, IDCards, LogoIg} from '../../assets';
import {Jarak, StatusBars, Tombol} from '../../components';
import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class IDCard extends Component {
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
    const {profiles} = this.state;
    const {getManajementResult} = this.props;
    return (
      <View style={styles.pages}>
        <StatusBars />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.buttonback}>
            <ButtonBack />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titletext}>ID Card</Text>
            <Text style={styles.titlepart}>ID Card Partner</Text>
            <Text style={styles.subpart}>
              Ini adalah ID Card kamu sebagai Partner ShowbizDeal
            </Text>
          </View>
        </View>
        <Jarak height={2} />
        <View style={styles.bodys}>
          <Image style={styles.idcard} source={IDCards} />
          <Image
            style={styles.imagetriangle}
            source={{uri: API_URL + profiles.avatar_url}}
          />
          <Text style={styles.fullname}>{profiles.full_name}</Text>
          <Text style={styles.nik}>{profiles.nik}</Text>
          <Text style={styles.jobs}>{getManajementResult.manajemenType}</Text>
          <View style={styles.logoig}>
            <LogoIg />
            <Text style={styles.igs}>@{getManajementResult.instagram}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Tombol
            type="text"
            title="Unduh ID Card"
            fontSize={RFValue(20, heightMobileUi)}
            borderColor={colors.white}
            borderWidth={1}
            paddingVertical={8}
            paddingHorizontal={28}
            color={colors.white}
            width={responsiveWidth(358)}
            height={responsiveHeight(47)}
            borderRadius={5}
            //   onPress={() => this.props.navigation.replace('Register')}
            backgroundColor={colors.primary2}
          />
        </View>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getManajementResult: state.MarketPlaceReducer.getManajementResult,
});
export default connect(mapStatetoProps, null)(IDCard);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  header: {
    // flex: 1,
    height: responsiveHeight(180),
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 44,
    paddingBottom: 34,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
  },
  titlepart: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(20, heightMobileUi),
    color: colors.primary2,
    textAlign: 'center',
    marginTop: 28,
  },
  titletext: {
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: RFValue(18, heightMobileUi),
  },
  subpart: {
    fontSize: 12,
    marginTop: 6,
    marginBottom: 20,
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
  bodys: {
    flex: 1,
  },
  idcard: {
    width: responsiveWidth(366),
    height: responsiveHeight(460),
    resizeMode: 'contain',
    marginHorizontal: 24,
    marginTop: 75,
  },
  fullname: {
    position: 'absolute',
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(25, heightMobileUi),
    color: colors.white,
    top: responsiveHeight(420),
    marginLeft: responsiveWidth(74),
  },
  nik: {
    position: 'absolute',
    fontSize: RFValue(25, heightMobileUi),
    color: colors.white,
    top: responsiveHeight(465),
    marginLeft: responsiveWidth(74),
  },
  imagetriangle: {
    width: 202,
    height: 207,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18,

    borderBottomWidth: 140,
    borderStyle: 'solid',
    transform: [{scaleX: 1}],
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#f50057',
    position: 'absolute',
    top: 86,
    left: 65,
  },
  logoig: {
    position: 'absolute',
    top: 420,
    left: 65,
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobs: {
    textTransform: 'capitalize',
    position: 'absolute',
    top: 397,
    left: 65,
    color: colors.white,
  },
  igs: {
    marginLeft: 4,
    fontSize: RFValue(12, heightMobileUi),
    color: colors.white,
  },
  footer: {
    // borderTopRightRadius: 10,
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
