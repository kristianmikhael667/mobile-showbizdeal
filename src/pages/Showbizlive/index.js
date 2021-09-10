import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {getListShowLive} from '../../actions/Showbizlive';
import {EyesIcon, Heads, LogoHeader} from '../../assets';
import {BannerSlider, Inputan, StatusBars, Tombol} from '../../components';
import {
  API_URL,
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  getData,
} from '../../utils';

class Showbizlive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getListShowLive());
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('users').then(res => {
      const data = res;
      if (data) {
        this.setState({
          token: data.data.token,
        });
      }
    });
  };

  render() {
    const {
      getlistShowLiveResult,
      getlistShowLiveLoading,
      getlistShowLiveError,
    } = this.props;
    const {token} = this.state;
    // console.log(getlistShowLiveResult);
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
            <View
              style={{
                position: 'absolute',
                marginHorizontal: 20,
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Inputan
                fontSize={14}
                placeholder="DJ Soda"
                width={responsiveWidth(240)}
                height={34}
                color={colors.white}
                backgroundColor={colors.white}
                fontSizes={14 * 1.1}
                textAlignVertical="top"
                marginLeft={responsiveWidth(7)}
                marginRight={responsiveHeight(16)}
              />
              <Tombol
                marginTop={30}
                marginRight={16}
                icon="notifikasi"
                padding={10}
              />
              <Tombol
                onPress={() => this.OnOpen()}
                marginTop={30}
                icon="filter"
                padding={10}
              />
            </View>
          </View>
          <BannerSlider />
          <Text style={styles.populer}>Showbizlive Populer</Text>
          <View style={styles.body}>
            {getlistShowLiveResult ? (
              getlistShowLiveResult.map(showlive => {
                {
                  if (showlive.is_live == true) {
                    if (showlive.is_private != true) {
                      return <Text>Blm Live asu sabarrr</Text>;
                    } else if (token != null) {
                      <Text>msk</Text>;
                    } else {
                      this.props.navigation.replace('Login');
                    }
                  } else {
                    return (
                      <TouchableOpacity style={styles.bodysub}>
                        <Image
                          style={styles.images}
                          source={{uri: API_URL + showlive.thumbnail_url}}
                        />
                        <View style={styles.iconmata}></View>
                        <View
                          style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 7,
                            left: 8,
                          }}>
                          <EyesIcon />
                          <Text style={styles.views}>{showlive.views}</Text>
                        </View>
                        <View style={styles.see}></View>
                        <View style={styles.foot}></View>
                        <View style={{position: 'absolute', bottom: -5}}>
                          <Text style={styles.content}>{showlive.content}</Text>
                          <Text style={styles.title}>{showlive.title}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }
                }
              })
            ) : getlistShowLiveLoading ? (
              <View style={{flex: 1}}>
                <ActivityIndicator size="large" color={colors.primary2} />
              </View>
            ) : getlistShowLiveError ? (
              <Text>Error</Text>
            ) : (
              <Text>Gak Ada bro</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // Get
  getlistShowLiveLoading: state.ShowbizliveReducer.getlistShowLiveLoading,
  getlistShowLiveResult: state.ShowbizliveReducer.getlistShowLiveResult,
  getlistShowLiveError: state.ShowbizliveReducer.getlistShowLiveError,
});

export default connect(mapStatetoProps, null)(Showbizlive);

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  populer: {
    color: colors.primary2,
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    marginLeft: responsiveWidth(18),
    marginTop: 18,
    marginBottom: 15,
  },
  body: {
    flexDirection: 'row',
    marginHorizontal: responsiveWidth(18),
    marginBottom: 25,
    flex: 1,
    flexWrap: 'wrap',
  },
  bodysub: {
    width: responsiveWidth(175),
    height: responsiveWidth(237),
    borderRadius: 10,
    marginRight: responsiveWidth(13),
  },
  images: {
    width: responsiveWidth(175),
    height: responsiveWidth(237),
    borderRadius: 10,
  },
  see: {
    width: 54,
    height: 17,
    backgroundColor: colors.trans,
    opacity: 0.2,
    position: 'absolute',
    top: 7,
    left: 7,
  },
  iconmata: {
    position: 'absolute',
    flexDirection: 'row',
    top: 11,
    left: 15,
  },
  views: {
    fontSize: 8,
    fontStyle: 'normal',
    color: colors.white,
    marginLeft: 4,
    fontWeight: '900',
  },
  foot: {
    width: responsiveWidth(175),
    height: responsiveHeight(50),
    backgroundColor: colors.trans,
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  content: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    marginTop: 8,
    marginLeft: 7,
    marginBottom: 5,
    color: colors.white,
  },
  title: {
    fontSize: 11,
    marginLeft: 7,
    marginBottom: 7,
    color: colors.bisnis,
  },
});
