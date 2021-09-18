import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {saveKeywordName} from '../../../actions/ResultSearch';
import {ButtonBack, Searching} from '../../../assets';
import {
  clearStorage,
  colors,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

class HeaderSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      results: false,
    };
  }
  componentDidMount() {
    this.textInputRef.focus();
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }
  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('historysearch').then(res => {
      const data = res;
      console.log('nah : ', data);
      if (data) {
        this.setState({
          results: data,
        });
      }
    });
  };
  selesaiCari = () => {
    const {page, navigation, dispatch} = this.props;

    const {search} = this.state;

    dispatch(saveKeywordName(search));

    if (page !== 'ResultSearch') {
      navigation.navigate('ResultSearch');
    }

    this.setState({
      search: '',
    });
  };
  render() {
    const {search} = this.state;
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.buttonback}>
          <ButtonBack />
        </TouchableOpacity>
        <View style={styles.title}>
          <TextInput
            ref={ref => (this.textInputRef = ref)}
            placeholder="Dj Soda"
            value={search}
            onChangeText={search => this.setState({search})}
            onSubmitEditing={() => this.selesaiCari()}
            style={styles.search}
          />

          <View style={{position: 'absolute', right: 11, top: 5}}>
            <Searching />
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(HeaderSearch);

const styles = StyleSheet.create({
  header: {
    height: responsiveHeight(104),
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 44,
    paddingBottom: 45,
    backgroundColor: colors.white,
  },
  title: {
    // flex: 1,
    paddingLeft: responsiveWidth(36),
  },
  search: {
    color: colors.grey,
    backgroundColor: colors.pembatas,
    width: 278,
    height: 34,
    fontSize: 14,
    marginTop: responsiveHeight(-5),
    textAlignVertical: 'top',
    paddingVertical: 8,
    paddingLeft: 18,
  },
});
