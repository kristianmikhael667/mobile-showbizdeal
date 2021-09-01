import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts} from '../../utils';
import CheckBox from '@react-native-community/checkbox';
import {LogoFB, LogoGoogle, LogoTwitter} from '../../assets';
import {registerUser} from '../../actions/RegisterPersonal';
import {connect} from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: '',
      check: false,
    };
  }

  checkBoxToast() {
    this.setState({
      check: !this.state.check,
    });
  }

  onContinue = () => {
    const {username, email, password, confirm, check} = this.state;
    if (username && email && password && confirm && check) {
      const data = {
        username: username,
        email: email,
        password: password,
        confirm: confirm,
        role: 'common.user',
      };
      console.log(data);
      this.props.dispatch(registerUser(data));
      // this.props.navigation.navigate('RegisterSuccess');
    } else {
      Alert.alert('Error', 'Iis ');
    }
  };

  componentDidUpdate(prevProps) {
    const {postRegistPersonealResult} = this.props;
    if (
      postRegistPersonealResult &&
      prevProps.postRegistPersonealResult !== postRegistPersonealResult
    ) {
      this.props.navigation.replace('RegisterSuccess');
    }
  }

  render() {
    const {username, email, password, confirm, check} = this.state;
    const {postRegistPersonealLoading} = this.props;
    return (
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={styles.container}>
        <ScrollView>
          <Text style={styles.hi}>Hi!</Text>
          <View style={styles.header}>
            <Text style={styles.field}>
              Daftarkan diri kamu di ShowbizDeal, Saatnya untuk memasuki era
              baru di dunia Entertainment!
            </Text>
          </View>
          <View style={styles.body}>
            <Inputan
              label="Username"
              fontSize={14}
              placeholder="Username"
              value={username}
              onChangeText={username => this.setState({username})}
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
            />
            <Jarak height={10} />
            <Inputan
              label="Email"
              fontSize={14}
              placeholder="email@domain.com"
              value={email}
              onChangeText={email => this.setState({email})}
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
            />
            <Jarak height={10} />
            <Inputan
              label="Password"
              fontSize={14}
              placeholder="******"
              value={password}
              onChangeText={password => this.setState({password})}
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              secureTextEntry
              textAlignVertical="top"
            />
            <Jarak height={10} />
            <Inputan
              label="Confirm Password"
              fontSize={14}
              placeholder="******"
              value={confirm}
              onChangeText={confirm => this.setState({confirm})}
              secureTextEntry
              width={278}
              height={34}
              color={colors.white}
              backgroundColor={colors.white}
              fontSizes={14 * 1.1}
              suptext="*"
              textAlignVertical="top"
            />
            <View style={styles.checkbox}>
              <CheckBox
                onCheckColor={colors.white}
                value={this.state.check}
                tintColors={{true: '#F15927', false: 'white'}}
                onChange={() => this.checkBoxToast()}
                style={{marginRight: 14}}
              />
              <Text style={styles.pendaftaran}>
                Dengan mengisi seluruh formulir pendaftaran ini, saya akan
                mengikuti semua peraturan yang ada di ShowbizDeal.
              </Text>
            </View>
            <Jarak height={10} />
            <Tombol
              type="text"
              title="Daftar Sekarang"
              fontSize={18}
              paddingVertical={10}
              paddingHorizontal={60}
              color={colors.primary2}
              width={259}
              height={48}
              loading={postRegistPersonealLoading}
              onPress={() => this.onContinue()}
              backgroundColor={colors.white}
            />
            <Text style={styles.punyakun}>Sudah punya akun?</Text>
            <Tombol
              type="text"
              title="Masuk"
              fontSize={14}
              borderColor={colors.white}
              borderWidth={1}
              paddingVertical={8}
              paddingHorizontal={28}
              color={colors.white}
              width={199}
              height={36}
              onPress={() => this.props.navigation.replace('Login')}
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
  postRegistPersonealLoading:
    state.RegisterPersonalReducer.postRegistPersonealLoading,
  postRegistPersonealResult:
    state.RegisterPersonalReducer.postRegistPersonealResult,
  postRegistPersonealError:
    state.RegisterPersonalReducer.postRegistPersonealError,
});

export default connect(mapStateToProps, null)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hi: {
    marginTop: 90,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
    fontSize: 26,
  },
  header: {
    width: 332,
    height: 81,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 25,
  },
  field: {
    lineHeight: 27,
    textAlign: 'center',
    color: colors.white,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  body: {
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 72,
    marginRight: 72,
    marginTop: 20,
    marginBottom: 20,
  },
  pendaftaran: {
    fontSize: 10,
    color: colors.white,
    lineHeight: 17,
  },
  punyakun: {
    marginTop: 9,
    color: colors.white,
    fontSize: 14,
    marginBottom: 6,
  },
  sosmed: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 61,
  },
});
