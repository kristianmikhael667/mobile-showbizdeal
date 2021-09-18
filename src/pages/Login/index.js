import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/LoginAction';
import {LogoFB, LogoGoogle, LogoTwitter} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, heightMobileUi} from '../../utils';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  login = () => {
    const {username, password} = this.state;
    if (username && password) {
      this.props.dispatch(loginUser(username, password));
    } else {
      Alert.alert('Error', 'Username dan Password wajib diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;
    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {username, password} = this.state;
    const {loginLoading} = this.props;
    return (
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={styles.container}>
        <ScrollView>
          <View style={styles.title}>
            <Text style={styles.judul}> Selamat Datang Kembali! </Text>
            <Text style={styles.subjudul}>
              Yuk masuk ke ShowbizDeal, jangan lewatkan fitur fitur menarik di
              ShowbizDeal ya!
            </Text>
          </View>
          <View style={styles.body}>
            <Inputan
              label="Username"
              fontSize={14}
              placeholder="Username"
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
              value={username}
              onChangeText={username => this.setState({username})}
            />
            <Jarak height={25} />
            <Inputan
              label="Password"
              fontSize={14}
              placeholder="******"
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
              value={password}
              onChangeText={password => this.setState({password})}
            />
            <Jarak height={52} />
            <Tombol
              type="text"
              title="Masuk"
              fontSize={18}
              loading={loginLoading}
              borderColor={colors.white}
              borderWidth={1}
              paddingVertical={11}
              paddingHorizontal={101}
              color={colors.primary2}
              width={259}
              height={48}
              onPress={() => this.login()}
              backgroundColor={colors.white}
            />
            <Text style={styles.punyakun}>Belum Punya akun?</Text>
            <Jarak height={4} />
            <Tombol
              type="text"
              title="Daftar Disini"
              fontSize={14}
              borderColor={colors.white}
              borderWidth={1}
              paddingVertical={8}
              textAlign="center"
              color={colors.white}
              width={199}
              height={36}
              onPress={() => this.props.navigation.replace('Register')}
              backgroundColor={colors.primary2}
            />
            <Text style={styles.punyakun}>
              atau Bergabung dengan media sosial
            </Text>
            <View style={styles.sosmed}>
              <View style={{marginRight: 10}}>
                <LogoFB />
              </View>
              <View style={{marginRight: 10}}>
                <LogoTwitter />
              </View>
              <View>
                <LogoGoogle />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => ({
  loginLoading: state.LoginPersonalReducer.loginLoading,
  loginResult: state.LoginPersonalReducer.loginResult,
  loginError: state.LoginPersonalReducer.loginError,
});
export default connect(mapStateToProps, null)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginHorizontal: 44,
    marginTop: 164,
    marginBottom: 52,
  },
  judul: {
    fontSize: RFValue(24, heightMobileUi),
    color: colors.white,
    fontFamily: fonts.primary.bold,
    marginBottom: 10,
    textAlign: 'center',
  },
  subjudul: {
    color: colors.white,
    textAlign: 'center',
    lineHeight: 27,
    fontSize: RFValue(14, heightMobileUi),
  },
  body: {
    alignItems: 'center',
  },
  punyakun: {
    marginTop: 25,
    color: colors.white,
    fontSize: 14,
  },
  sosmed: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 61,
  },
});
