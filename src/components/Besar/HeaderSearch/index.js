import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import SearchHeader from 'react-native-search-header';
import {connect} from 'react-redux';
import {saveKeywordName} from '../../../actions/ResultSearch';
import {ButtonBack, Notifikasi, Searching} from '../../../assets';
import {
  clearStorage,
  colors,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

const HeaderSearch = ({navigation}) => {
  // const {navigation} = this.props;
  const searchHeaderRef = React.useRef(null);
  // clearstore = () => {
  //   AsyncStorage.removeItem('historysearch');
  //   AsyncStorage.removeItem('historydata');
  // };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.status} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem('historysearch');
            AsyncStorage.removeItem('historydata');
            navigation.goBack();
          }}
          style={{
            marginLeft: responsiveWidth(19),
            marginRight: responsiveWidth(36),
          }}>
          <ButtonBack />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchs}
          onPress={() => searchHeaderRef.current.show()}>
          <Text style={styles.label}>DJ Soda</Text>
        </TouchableOpacity>
        <View style={{position: 'absolute', right: 78, top: 21}}>
          <Searching />
        </View>
        <View style={{position: 'absolute', right: 10, top: 21}}>
          <Notifikasi />
        </View>
      </View>
      <SearchHeader
        autoFocus
        headerHeight={100}
        ref={searchHeaderRef}
        placeholder="DJ Soda"
        placeholderColor="gray"
        onClear={() => {
          console.log(`Clearing input!`);
        }}
        onShow={async text => {
          if (text) {
            dispatch(saveKeywordName(text));
            this.props.navigation.push('ResultSearch');
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
    </View>
  );
};

export default connect()(HeaderSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  status: {
    zIndex: 10,
    elevation: 2,
    width: DEVICE_WIDTH,
    height: 21,
    backgroundColor: '#0097a7',
  },
  header: {
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: DEVICE_WIDTH,
    height: 56,
    marginBottom: 6,
    backgroundColor: colors.white,
  },
  searchs: {
    width: responsiveWidth(275),
    height: responsiveHeight(36),
    backgroundColor: colors.pembatas,
    paddingLeft: 18,
    // marginHorizontal: 70,
    paddingVertical: 7,
  },
  label: {
    fontSize: 12,
    fontWeight: `600`,

    color: colors.grey,
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
});
