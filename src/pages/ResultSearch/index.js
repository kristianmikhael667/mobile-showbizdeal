import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {
  InfluencerButton,
  Love,
  PerformerButton,
  ShowLiveButton,
  Start,
  SupportButton,
} from '../../assets';
import {HeaderSearch, Jarak, Loading, StatusBars} from '../../components';
import {dummyPopular} from '../../Data/dummyPopular';
import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

class ResultSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: dummyPopular,
    };
  }

  render() {
    const {
      getSearchByNameResult,
      getSearchByNameLoading,
      getSearchByNameError,
      getCategoryResult,
      navigation,
    } = this.props;
    const {popular} = this.state;
    console.log(popular);
    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView>
          <HeaderSearch navigation={navigation} page="ResultSearch" />
          <Jarak height={7} />
          <View style={styles.body}>
            {getSearchByNameResult === false ? (
              <View>
                <Text style={styles.pencarian}>Pencarian Popular</Text>
                <View style={{marginTop: 20}}>
                  {popular.map(pop => {
                    return (
                      <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <Image
                          style={{
                            width: 46,
                            height: 46,
                            marginRight: 18,
                          }}
                          source={pop.image}
                        />
                        <View style={{alignSelf: 'center'}}>
                          <Text style={{fontSize: 12}}>{pop.nama}</Text>
                          <Text style={{fontSize: 10}}>{pop.genre}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
                <Text style={styles.pencarian}>Kategori Pilihan</Text>
                <View style={{marginHorizontal: 18}}>
                  <TouchableOpacity style={{width: 30}}>
                    <PerformerButton />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <InfluencerButton />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <SupportButton />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ShowLiveButton />
                  </TouchableOpacity>
                </View>
              </View>
            ) : getSearchByNameResult ? (
              getSearchByNameResult.map(search => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailMarket', {
                        search,
                        getCategoryResult,
                      })
                    }
                    style={styles.bodysub}>
                    <Image
                      style={styles.images}
                      source={{
                        uri: API_URL + search.img + '&w=500&h=500&fit=crop',
                      }}
                    />
                    <View style={styles.love}>
                      <View style={{alignItems: 'center', marginVertical: 6}}>
                        <>
                          <Love />
                        </>
                      </View>
                    </View>
                    <Text style={styles.nama}>{search.name}</Text>
                    {getCategoryResult ? (
                      getCategoryResult.map(category => {
                        {
                          if (
                            category.id ===
                            search.vendor_category[0].sub_category_id
                          ) {
                            return (
                              <Text style={styles.category}>
                                {category.name}
                              </Text>
                            );
                          } else {
                            <Text>No</Text>;
                          }
                        }
                      })
                    ) : (
                      <Text>kosong</Text>
                    )}
                    <View style={styles.start}>
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                    </View>
                    <Text style={styles.review}>(0 Reviews)</Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              []
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // name
  getSearchByNameLoading: state.SearchNameReducer.getSearchByNameLoading,
  getSearchByNameResult: state.SearchNameReducer.getSearchByNameResult,
  getSearchByNameError: state.SearchNameReducer.getSearchByNameError,

  // Category
  getCategoryLoading: state.MarketPlaceReducer.getCategoryLoading,
  getCategoryResult: state.MarketPlaceReducer.getCategoryResult,
  getCategoryError: state.MarketPlaceReducer.getCategoryError,
});

export default connect(mapStatetoProps, null)(ResultSearch);

const styles = StyleSheet.create({
  pages: {
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
  pencarian: {
    fontSize: 16,
    color: colors.primaryLive2,
    fontFamily: fonts.primary.normal,
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
  images: {
    width: '100%',
    height: responsiveHeight(182),
    marginRight: responsiveWidth(4),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
  },
  love: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 24,
    top: 7,
    right: 7,
  },
  nama: {
    textAlign: 'center',
    marginTop: 9,
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(16, heightMobileUi),
  },
  category: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    marginBottom: 9,
  },
  start: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  review: {
    fontSize: 7,
    marginTop: 7,
    textAlign: 'center',
    marginBottom: 8,
  },
});
