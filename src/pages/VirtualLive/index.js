import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getLeaderBoard} from '../../actions/Showbizlive';
import {
  Close,
  EyesIcon,
  IconWidthScreen,
  JuaraDua,
  JuaraSatu,
  JuaraTiga,
  LogoHeader,
  NamaLive,
  Showbizlive,
  ViewLive,
} from '../../assets';
import {
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class VirtualLive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showlive: this.props.route.params.showlive,
    };
  }

  componentDidMount() {
    const {showlive} = this.state;
    // console.log(showlive);
    this.props.dispatch(
      getLeaderBoard(
        showlive.live_url,
        showlive.nyawer_id,
        showlive.is_private,
      ),
    );
  }

  render() {
    const {showlive} = this.state;

    const {getshowLeaderBoardResult} = this.props;
    return (
      <LinearGradient
        colors={[colors.primaryLive, colors.primaryLive2]}
        style={styles.container}>
        <Image style={styles.logohead} source={LogoHeader} />

        <View style={{position: 'absolute'}}>
          <View style={styles.viewlive}>
            <ViewLive />
          </View>
          <View style={styles.namalive}>
            <NamaLive />
            <Text numberOfLines={1} style={styles.judullive}>
              {showlive.title}
            </Text>
          </View>
          <View
            style={{position: 'absolute', top: responsiveHeight(95), left: 19}}>
            <EyesIcon />
            <Text style={styles.viewer}>{showlive.views}</Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            right: 20,
            top: 26,
          }}>
          <TouchableOpacity style={{marginRight: responsiveWidth(22)}}>
            <Showbizlive />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: responsiveWidth(13)}}>
            <IconWidthScreen />
          </TouchableOpacity>
          <TouchableOpacity>
            <Close />
          </TouchableOpacity>
        </View>

        <View style={styles.juara}>
          <Image style={styles.juaraimg} source={JuaraSatu} />
          {getshowLeaderBoardResult
            ? getshowLeaderBoardResult.slice(0, 1).map(leaderboard => {
                return (
                  <>
                    <Text style={styles.namajuara}>{leaderboard.name}</Text>
                  </>
                );
              })
            : []}
          <Image style={styles.juaraimg} source={JuaraDua} />
          {getshowLeaderBoardResult
            ? getshowLeaderBoardResult.slice(1, 2).map(leaderboard => {
                return (
                  <>
                    <Text style={styles.namajuara2}>{leaderboard.name}</Text>
                  </>
                );
              })
            : []}
          <Image style={styles.juaraimg} source={JuaraTiga} />
          {getshowLeaderBoardResult
            ? getshowLeaderBoardResult.slice(2, 3).map(leaderboard => {
                return (
                  <>
                    <Text style={styles.namajuara3}>{leaderboard.name}</Text>
                  </>
                );
              })
            : []}
        </View>
      </LinearGradient>
    );
  }
}

const mapStatetoProps = state => ({
  // Get
  getshowLeaderBoardLoading: state.ShowbizliveReducer.getshowLeaderBoardLoading,
  getshowLeaderBoardResult: state.ShowbizliveReducer.getshowLeaderBoardResult,
  getshowLeaderBoardError: state.ShowbizliveReducer.getshowLeaderBoardError,
});

export default connect(mapStatetoProps, null)(VirtualLive);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logohead: {
    marginTop: 18,
    width: 238,
    height: 238,
    marginLeft: -34,
  },
  viewer: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: responsiveWidth(25),
    top: responsiveHeight(-17),
  },
  juara: {
    flexDirection: 'row',
    marginTop: 125,
    marginRight: 3,
    alignSelf: 'center',
    position: 'absolute',
  },
  viewlive: {
    position: 'absolute',
    top: 60,
  },
  namalive: {
    top: 26,
    position: 'absolute',
    flex: 1,
  },
  judullive: {
    fontSize: RFValue(18),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    position: 'absolute',
    flex: 1,
    top: 8,
    marginHorizontal: 19,
  },
  juaraimg: {
    width: responsiveWidth(120),
    height: responsiveHeight(40),
  },
  namajuara: {
    fontSize: RFValue(13, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    textAlign: 'center',
    marginTop: 12,
    position: 'absolute',
    marginLeft: responsiveWidth(50),
  },
  namajuara2: {
    fontSize: RFValue(12, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.juara2,
    textAlign: 'center',
    marginTop: 14,
    textAlign: 'center',

    marginLeft: responsiveWidth(150),
    position: 'absolute',
  },
  namajuara3: {
    fontSize: RFValue(12, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    position: 'absolute',

    marginTop: 12,
    marginLeft: responsiveWidth(280),
  },
});
