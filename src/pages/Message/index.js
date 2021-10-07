import axios from 'axios';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {connect} from 'react-redux';
import {chatlists} from '../../actions/ChatListAction';
import {HeaderMessage} from '../../assets';
import {Inputan, Jarak, StatusBars, Tombol} from '../../components';
import {colors, fonts, getData, responsiveHeight} from '../../utils';

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: false,
      namas: false,
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
            this.props.dispatch(chatlists(token));
          },
        );
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  getName = chats => {
    // chats = 'sasuke';
    // return chats;
    // console.log(chats.sender_id);
    const {token} = this.state;
    // console.log(token);
    axios({
      method: 'GET',
      url: 'https://api.showbizdeal.com/user-service/users/' + chats,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then(res => {
      if (res.data.data.uid === chats) {
        return res.data.data.username;
      }
    });

    return chats;
  };

  render() {
    const {getListChatResult, getListChatLoading, getListChatError} =
      this.props;
    const {namas} = this.state;
    console.log(namas);
    return (
      <View style={styles.container}>
        <StatusBars />
        <View style={styles.header}>
          <Image style={styles.images} source={HeaderMessage} />
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
              width={responsiveWidth(70)}
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
        <ScrollView>
          <View style={styles.body}>
            {getListChatResult
              ? getListChatResult.map((chats, index) => {
                  return (
                    <>
                      <View key={index} style={styles.subchat}>
                        <Image
                          style={styles.foto}
                          source={{
                            uri: 'https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png',
                          }}
                        />
                        <View style={styles.chats}>
                          <Text style={styles.juduls}>
                            {this.getName(chats.sender_id)}
                          </Text>
                          <Text numberOfLines={1} style={{fontSize: 9}}>
                            {chats.message}
                          </Text>
                        </View>
                        <Text style={styles.times}>3 Jam Lalu</Text>
                      </View>
                      <Jarak height={3} />
                    </>
                  );
                })
              : []}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  getListChatLoading: state.ChatslistReducer.getListChatLoading,
  getListChatResult: state.ChatslistReducer.getListChatResult,
  getListChatError: state.ChatslistReducer.getListChatError,
});

export default connect(mapStatetoProps, null)(Message);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    height: responsiveHeight(181),
    width: '100%',
    resizeMode: 'contain',
    marginTop: responsiveHeight(-24),
  },
  subchat: {
    width: '100%',
    height: responsiveHeight(76),
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  foto: {width: 55, height: 55, marginVertical: 10},
  chats: {
    width: responsiveWidth(50),
    // backgroundColor: 'red',
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'center',
  },
  juduls: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
  },
  times: {
    fontSize: 7,
    color: colors.bisnis,
    marginTop: 13,
  },
});
