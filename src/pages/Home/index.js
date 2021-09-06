import React, {Component, useRef} from 'react';
import {Modalize} from 'react-native-modalize';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {
  getCategory,
  getMarketInfluencer,
  getMarketPlace,
} from '../../actions/MarketPlace';
import {Heads, IconFiltersa, LogoHeader, Love, Start} from '../../assets';
import {API_URL, heightMobileUi} from '../../utils/constant';
import {responsiveWidth, responsiveHeight, colors, fonts} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  BannerSlider,
  FilterProduk,
  Inputan,
  Kategory,
  StatusBars,
  Tombol,
} from '../../components';
class Home extends Component {
  constructor(props) {
    super(props);
    this.modalizeReff = React.createRef();
    this.state = {
      layanan: '138bb094-8aa2-4900-95c5-c0cd0b4fa3da',
      lokasi: 'Jabodetabek',
      kategori: 'Semua',
      subkategori: 'Semua',
    };
  }

  clickLayanan(value) {
    this.setState(
      {
        layanan: value,
      },
      () => {
        const {layanan} = this.state;
        console.log('data : ' + layanan);
        this.props.dispatch(getMarketInfluencer(layanan));
      },
    );
  }

  clickLokasi(value) {
    this.setState({
      lokasi: value,
    });
  }

  clickKategori(value) {
    this.setState({
      kategori: value,
    });
  }

  clickSubKategori(value) {
    this.setState({
      subkategori: value,
    });
  }

  componentDidMount() {
    this.props.dispatch(getCategory());
    const {layanan} = this.state;
    console.log('data : ' + layanan);
    this.props.dispatch(getMarketInfluencer(layanan));
  }

  OnOpen = () => {
    // const {modalizeReff} = this.state;
    this.modalizeReff.current?.open();
  };

  render() {
    const {
      getInfluencerResult,
      getInfluencerLoading,
      getInfluencerError,

      getCategoryResult,
    } = this.props;
    const {modalizeReff} = this.state;
    return (
      <View style={styles.pages}>
        <StatusBars />
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
                // left: 18,
                // top: 35,
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
                marginRight={responsiveWidth(16)}
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
          <Text style={styles.categorys}>Kategory</Text>

          <View style={styles.layanan}>
            <Kategory
              title="Performer"
              onPress={() =>
                this.clickLayanan('138bb094-8aa2-4900-95c5-c0cd0b4fa3da')
              }
              active={
                this.state.layanan === '138bb094-8aa2-4900-95c5-c0cd0b4fa3da'
                  ? true
                  : false
              }
            />
            <Kategory
              title="Influencer"
              onPress={() =>
                this.clickLayanan('2e60785a-6022-46c9-bee0-db37ed166535')
              }
              active={
                this.state.layanan === '2e60785a-6022-46c9-bee0-db37ed166535'
                  ? true
                  : false
              }
            />
            <Kategory
              title="Support"
              onPress={() =>
                this.clickLayanan('389a3ac3-3a26-4bf8-b691-3c8a7b5011da')
              }
              active={
                this.state.layanan === '389a3ac3-3a26-4bf8-b691-3c8a7b5011da'
                  ? true
                  : false
              }
            />
          </View>
          <View style={styles.body}>
            {getInfluencerResult ? (
              getInfluencerResult.map(market => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('DetailMarket', {
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
            ) : getInfluencerLoading ? (
              <View
                style={{
                  flex: 1,
                }}>
                <ActivityIndicator size="large" color={colors.primary2} />
              </View>
            ) : getInfluencerError ? (
              <Text>Error</Text>
            ) : (
              <Text>Gak ada</Text>
            )}
          </View>
        </ScrollView>
        <Modalize ref={this.modalizeReff} snapPoint={responsiveHeight(568)}>
          <View style={styles.modalizes}>
            <View style={styles.headermodal}>
              <IconFiltersa />
              <Text style={styles.filterproduk}>Filter Produk</Text>
              <Text style={styles.reset}>Reset</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveWidth(30),
                alignItems: 'center',
                paddingTop: 15,
              }}>
              <Text style={styles.juduls}>Lokasi</Text>
              <Text style={styles.lihatall}>Lihat Semua</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                marginTop: 10,
                paddingHorizontal: responsiveWidth(30),
              }}>
              <View>
                <FilterProduk
                  title="Jabodetabek"
                  onPress={() => this.clickLokasi('Jabodetabek')}
                  active={this.state.lokasi === 'Jabodetabek' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="DKI Jakarta"
                  onPress={() => this.clickLokasi('DKI Jakarta')}
                  active={this.state.lokasi === 'DKI Jakarta' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Bekasi"
                  onPress={() => this.clickLokasi('Bekasi')}
                  active={this.state.lokasi === 'Bekasi' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Karawang"
                  onPress={() => this.clickLokasi('Karawang')}
                  active={this.state.lokasi === 'Karawang' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Bogor"
                  onPress={() => this.clickLokasi('Bogor')}
                  active={this.state.lokasi === 'Bogor' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Depok"
                  onPress={() => this.clickLokasi('Depok')}
                  active={this.state.lokasi === 'Depok' ? true : false}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveWidth(30),
                alignItems: 'center',
                paddingTop: 15,
              }}>
              <Text style={styles.juduls}>Kategori</Text>
              <Text style={styles.lihatall}>Lihat Semua</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                marginTop: 10,
                paddingHorizontal: responsiveWidth(30),
              }}>
              <View>
                <FilterProduk
                  title="Semua"
                  onPress={() => this.clickKategori('Semua')}
                  active={this.state.kategori === 'Semua' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="DJ"
                  onPress={() => this.clickKategori('DJ')}
                  active={this.state.kategori === 'DJ' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Musisi"
                  onPress={() => this.clickKategori('Musisi')}
                  active={this.state.kategori === 'Musisi' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Badut"
                  onPress={() => this.clickKategori('Badut')}
                  active={this.state.kategori === 'Badut' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="MC"
                  onPress={() => this.clickKategori('MC')}
                  active={this.state.kategori === 'MC' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Pesulap"
                  onPress={() => this.clickKategori('Pesulap')}
                  active={this.state.kategori === 'Pesulap' ? true : false}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: responsiveWidth(30),
                alignItems: 'center',
                paddingTop: 15,
              }}>
              <Text style={styles.juduls}>Sub Kategori</Text>
              <Text style={styles.lihatall}>Lihat Semua</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                marginTop: 10,
                paddingHorizontal: responsiveWidth(30),
              }}>
              <View>
                <FilterProduk
                  title="Semua"
                  onPress={() => this.clickSubKategori('Semua')}
                  active={this.state.subkategori === 'Semua' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Pop"
                  onPress={() => this.clickSubKategori('Pop')}
                  active={this.state.subkategori === 'Pop' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Rock"
                  onPress={() => this.clickSubKategori('Rock')}
                  active={this.state.subkategori === 'Rock' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="Dangdut"
                  onPress={() => this.clickSubKategori('Dangdut')}
                  active={this.state.subkategori === 'Dangdut' ? true : false}
                />
              </View>
              <View>
                <FilterProduk
                  title="MC Kondangan"
                  onPress={() => this.clickSubKategori('MC Kondangan')}
                  active={
                    this.state.subkategori === 'MC Kondangan' ? true : false
                  }
                />
              </View>
              <View>
                <FilterProduk
                  title="MC Acara"
                  onPress={() => this.clickSubKategori('MC Acara')}
                  active={this.state.subkategori === 'MC Acara' ? true : false}
                />
              </View>
            </View>
          </View>
        </Modalize>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // Marketplace
  getInfluencerLoading: state.MarketPlaceReducer.getInfluencerLoading,
  getInfluencerResult: state.MarketPlaceReducer.getInfluencerResult,
  getInfluencerError: state.MarketPlaceReducer.getInfluencerError,

  // Category
  getCategoryLoading: state.MarketPlaceReducer.getCategoryLoading,
  getCategoryResult: state.MarketPlaceReducer.getCategoryResult,
  getCategoryError: state.MarketPlaceReducer.getCategoryError,
});

export default connect(mapStatetoProps, null)(Home);

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  body: {
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 18,
    paddingTop: 18,
    backgroundColor: colors.white,
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
  categorys: {
    color: colors.primary2,
    fontFamily: fonts.primary.bold,
    fontSize: 18,
    marginLeft: responsiveWidth(26),
    marginBottom: 9,
  },
  layanan: {
    flexDirection: 'row',
    marginBottom: 14,
    marginHorizontal: responsiveWidth(18),
  },
  modalizes: {
    height: responsiveHeight(568),
    paddingHorizontal: 20,
    paddingTop: 46,
  },
  headermodal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterproduk: {
    fontFamily: fonts.primary.bold,
    fontSize: 18,
  },
  reset: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  juduls: {
    fontFamily: fonts.primary.bold,
    fontSize: 14,
  },
  lihatall: {
    fontSize: 10,
    fontStyle: 'italic',
  },
});
