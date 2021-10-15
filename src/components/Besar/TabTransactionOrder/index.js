import * as React from 'react';
import {View, Text, useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

import {CardTransaction, CardOrders} from '../../Kecil';

const TabTransactionOrder = ({transaksiku, orderku}) => {
  const FirstRoute = () => {
    return (
      <View vertical style={styles.pagesatu}>
        <CardTransaction key={transaksiku} trans={transaksiku} />
      </View>
    );
  };

  const SecondRoute = () => {
    return (
      <View vertical style={styles.pagesatu}>
        <CardOrders key={orderku} order={orderku} />
      </View>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'my Transaksi'},
    {key: 'second', title: 'my Order'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: colors.primary2,
        height: 3,
        marginLeft: 18,
      }}
      indicatorContainerStyle={{
        width: '85%',
        marginTop: 13,
      }}
      style={styles.container}
      activeColor={colors.black}
      inactiveColor={colors.grey}
      labelStyle={{
        fontFamily: fonts.primary.bold,
        fontSize: RFValue(16, heightMobileUi),
        textTransform: 'capitalize',
        marginTop: 10,
      }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: responsiveWidth(360), height: 0}}
    />
  );
};

export default TabTransactionOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 0,
  },
  pagesatu: {
    backgroundColor: colors.white,
    flex: 1,
  },
  body: {
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  items: {
    flexDirection: 'row',
    width: responsiveWidth(89),
    marginRight: 125,
  },
  textTitle: {
    marginTop: responsiveHeight(17),
  },
  makanan: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
  },
  harga: {
    fontFamily: fonts.primary.regular,
    fontSize: 13,
    color: colors.grey,
  },
  content: {
    marginRight: 12,
    marginTop: 16,
  },
  start: {
    marginTop: 37,
    flexDirection: 'row',
  },
  rate: {
    marginLeft: 4,
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.grey,
  },
  pagedua: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pagetiga: {
    flex: 1,
    backgroundColor: colors.white,
  },
  images: {
    width: 60,
    height: 60,
  },
});
