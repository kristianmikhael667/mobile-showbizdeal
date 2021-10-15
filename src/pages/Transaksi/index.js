import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {getTransactions} from '../../actions/TransactionAction';
import {HeaderMessage} from '../../assets';
import {
  Inputan,
  Jarak,
  StatusBars,
  TabTransactionOrder,
  Tombol,
} from '../../components';
import {colors, getData, responsiveHeight, responsiveWidth} from '../../utils';

class Transaksi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: false,
      transaksiku: 'sayang ku neta',
      orderku: 'open bo netta',
    };
  }

  componentDidMount() {
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
        this.setState(
          {
            token: data.data.token,
          },
          () => {
            const {token} = this.state;
            this.props.dispatch(getTransactions(token));
          },
        );
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {transaksiku, orderku} = this.state;
    return (
      <View style={styles.container}>
        <StatusBars />
        <View style={styles.header}>
          <Image style={styles.images} source={HeaderMessage} />
          <View style={styles.backgroundheader}>
            <Inputan
              fontSize={14}
              placeholder="Cari Transaksi"
              width={responsiveWidth(325)}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              textAlignVertical="top"
              marginLeft={responsiveWidth(5)}
              marginRight={responsiveHeight(10)}
            />
            <Tombol
              onPress={() => this.OnOpen()}
              marginTop={30}
              height={34}
              icon="filter"
              padding={10}
            />
          </View>
        </View>
        <Jarak height={responsiveHeight(23)} />
        <TabTransactionOrder transaksiku={transaksiku} orderku={orderku} />
      </View>
    );
  }
}

export default connect()(Transaksi);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundheader: {
    position: 'absolute',
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    height: responsiveHeight(181),
    width: '100%',
    resizeMode: 'contain',
    marginTop: responsiveHeight(-24),
  },
});
