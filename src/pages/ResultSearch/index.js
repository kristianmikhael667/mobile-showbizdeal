import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import SearchHeader from 'react-native-search-header';
import {connect} from 'react-redux';
import {
  InfluencerButtons,
  Love,
  PerformerButtons,
  ShowLiveButtons,
  Start,
  SupportButtons,
} from '../../assets';
import {StatusBars} from '../../components';
import {dummyPopular} from '../../Data/dummyPopular';

import {
  API_URL,
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const ResultSearch = ({getCategoryResult, navigation, getDataPer}) => {
  const searchHeaderRef = React.useRef(null);
  const [datas, setPostArray] = useState(false);
  const MyGetter = () => {
    // console.log('kntl');
    searchHeaderRef.current.show();
  };
  useEffect(() => {
    setTimeout(() => {
      searchHeaderRef.current.show();
    }, 0); //miliseconds
  }, []);
  return (
    <View style={styles.container}>
      <StatusBars />
      <View style={styles.status} />
      <View style={styles.header}>
        <TouchableOpacity
          color="#f5fcff"
          style={{
            width: responsiveWidth(275),
            height: responsiveHeight(34),
            backgroundColor: colors.pembatas,
            justifyContent: 'center',
          }}
          onPress={MyGetter}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <SearchHeader
        ref={searchHeaderRef}
        placeholder="Search..."
        placeholderColor="gray"
        style={{
          container: {
            marginTop: responsiveHeight(30),
          },
        }}
        // pinnedSuggestions={[
        //   `react-native-search-header`,
        //   `react-native`,
        //   `javascript`,
        // ]}

        onClear={() => {
          console.log(`Clearing input!`);
          navigation.push('ResultSearch');
        }}
        onGetAutocompletions={async text => {
          if (text) {
            const response = await fetch(
              `http://longmsg.id:2001/business-service/v1/v2/vendor?&q=${text}`,
              {
                method: `get`,
              },
            );
            const data = await response.json();

            console.log(data.data);
            // return data;
            setPostArray(data.data);
          } else {
            return [];
          }
        }}
      />

      {/* <View style={styles.button}>
        <Button
          title="Open Search"
          color="#f5fcff"
          onPress={() => searchHeaderRef.current.show()}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Clear"
          color="#f5fcff"
          onPress={() => {
            searchHeaderRef.current.clear();
          }}
        />
      </View> */}
      <ScrollView>
        <View style={styles.body}>
          {datas === false ? (
            <View>
              <Text style={styles.pencarian}>Pencarian Popular</Text>
              <View style={{marginTop: 20}}>
                {getDataPer.map(pop => {
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
              <View style={{marginTop: 16}}>
                <TouchableOpacity style={{marginBottom: 6}}>
                  <Image
                    style={{
                      width: responsiveWidth(376),
                      height: 55,
                    }}
                    source={PerformerButtons}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 6}}>
                  <Image
                    style={{
                      width: responsiveWidth(376),
                      height: 55,
                    }}
                    source={InfluencerButtons}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom: 6}}>
                  <Image
                    style={{
                      width: responsiveWidth(376),
                      height: 55,
                    }}
                    source={SupportButtons}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: responsiveWidth(376),
                      height: 55,
                    }}
                    source={ShowLiveButtons}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            []
          )}

          {datas
            ? datas.map(market => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailMarket', {
                        market,
                        getCategoryResult,
                      })
                    }
                    style={styles.bodysub}>
                    <Image
                      style={styles.images}
                      source={{
                        uri: API_URL + market.img + '&w=500&h=500&fit=crop',
                      }}
                    />
                    <View style={styles.love}>
                      <View style={{alignItems: 'center', marginVertical: 6}}>
                        <>
                          <Love />
                        </>
                      </View>
                    </View>
                    <Text style={styles.nama}>{market.name}</Text>
                    {getCategoryResult ? (
                      getCategoryResult.map(category => {
                        {
                          if (
                            category.id ===
                            market.vendor_category[0].sub_category_id
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
            : []}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStatetoProps = state => ({
  // name
  getSearchByNameLoading: state.SearchNameReducer.getSearchByNameLoading,
  getSearchByNameResult: state.SearchNameReducer.getSearchByNameResult,
  getSearchByNameError: state.SearchNameReducer.getSearchByNameError,

  // Category
  getCategoryLoading: state.MarketPlaceReducer.getCategoryLoading,
  getCategoryResult: state.MarketPlaceReducer.getCategoryResult,
  getCategoryError: state.MarketPlaceReducer.getCategoryError,

  getDataPer: dummyPopular,
});

export default connect(mapStatetoProps, null)(ResultSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  status: {
    zIndex: 10,
    elevation: 2,
    width: DEVICE_WIDTH,
    height: responsiveHeight(1),
    backgroundColor: '#0097a7',
  },
  header: {
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    height: 56,
    marginBottom: 6,
    // backgroundColor: '#00bcd4',
  },
  label: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: `600`,
    textAlign: `left`,
    marginVertical: 8,
    paddingVertical: 3,
    color: `#f5fcff`,
    backgroundColor: `transparent`,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 40,
    marginTop: 40,
    borderRadius: 2,
    backgroundColor: `#ff5722`,
  },
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
