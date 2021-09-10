import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getLeaderBoard} from '../../actions/Showbizlive';
import {JuaraDua, JuaraSatu, JuaraTiga} from '../../assets';
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
        colors={[colors.primary1, colors.primary2]}
        style={styles.container}>
        <View style={styles.juara}>
          <Image style={styles.juaraimg} source={JuaraSatu} />

          <Image style={styles.juaraimg} source={JuaraDua} />

          <Image style={styles.juaraimg} source={JuaraTiga} />
        </View>
        <View style={styles.juaras}>
          {getshowLeaderBoardResult
            ? getshowLeaderBoardResult.slice(0, 1).map(leaderboard => {
                return (
                  <>
                    <Text style={styles.namajuara}>{leaderboard.name}</Text>
                  </>
                );
              })
            : []}
          {getshowLeaderBoardResult
            ? getshowLeaderBoardResult.slice(1, 2).map(leaderboard => {
                return (
                  <>
                    <Text style={styles.namajuara2}>{leaderboard.name}</Text>
                  </>
                );
              })
            : []}
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
  juara: {
    flexDirection: 'row',
    // marginHorizontal: responsiveWidth(18),
    marginTop: 104,
    position: 'absolute',
    marginRight: 3,
    alignSelf: 'center',
  },
  juaras: {
    flexDirection: 'row',
    marginTop: 104,
    position: 'absolute',
    justifyContent: 'space-between',
  },
  juaraimg: {
    width: responsiveWidth(120),
    height: responsiveHeight(40),
  },
  namajuara: {
    fontSize: RFValue(12, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    textAlign: 'center',
    marginTop: 12,
    marginLeft: 65,
  },
  namajuara2: {
    fontSize: RFValue(12, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    textAlign: 'center',
    marginTop: 12,
    marginLeft: 62,
  },
  namajuara3: {
    fontSize: RFValue(12, heightMobileUi),
    fontFamily: fonts.primary.bold,
    color: colors.white,
    // textAlign: 'center',
    marginTop: 12,
    marginLeft: 45,
  },
});
