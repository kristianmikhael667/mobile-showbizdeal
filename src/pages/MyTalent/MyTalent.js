import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {getMyTalent} from '../../actions/MyTalentAction';
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

class MyTalent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getidmanajemen: this.props.route.params.getidmanajemen,
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    const {getidmanajemen} = this.state;
    this.props.dispatch(getMyTalent(getidmanajemen));
    this.setState({refreshing: false});
  };

  componentDidMount() {
    const {getidmanajemen} = this.state;
    this.props.dispatch(getMyTalent(getidmanajemen));
  }

  render() {
    const {getManajementResult} = this.state;
    const {getMyTalentResult} = this.props;

    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <View style={styles.headers}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.buttonback}>
              <ButtonBack />
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.titletext}>My Talent</Text>
            </View>
          </View>
          <Jarak height={6} />
          <View style={styles.body}>
            <View style={styles.subbody}>
              {getMyTalentResult
                ? getMyTalentResult.map(talent => {
                    return (
                      <View style={styles.card}>
                        <Image
                          style={styles.images}
                          source={{uri: API_URL + talent.img}}
                        />
                        <Text style={styles.names}>{talent.name}</Text>
                        <Text style={styles.citys}>{talent.city}</Text>
                        <TouchableOpacity style={styles.tombol}>
                          <Text style={styles.updates}>Update</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })
                : []}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getMyTalentLoading: state.MyTalentReducer.getMyTalentLoading,
  getMyTalentResult: state.MyTalentReducer.getMyTalentResult,
  getMyTalentError: state.MyTalentReducer.getMyTalentError,
});

export default connect(mapStatetoProps, null)(MyTalent);
const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  headers: {
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
  body: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 21,
    flexWrap: 'wrap',
  },
  images: {
    width: responsiveWidth(181),
    height: responsiveHeight(182),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    marginBottom: 10,
    // marginRight: responsiveWidth(12),
    width: responsiveWidth(181),
    height: responsiveHeight(270),
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

    elevation: 1,
  },
  names: {
    fontFamily: fonts.primary.bold,
    textAlign: 'center',
    marginTop: 9,
    fontSize: RFValue(16, heightMobileUi),
  },
  citys: {
    fontSize: 7,
    textAlign: 'center',
    marginTop: 6,
  },

  tombol: {
    backgroundColor: '#34126C',
    width: responsiveWidth(181),
    height: responsiveHeight(27),
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  updates: {
    color: colors.white,
    fontSize: 10,
    textAlign: 'center',
  },
});
