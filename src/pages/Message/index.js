import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {HeaderMessage} from '../../assets';
import {Inputan, StatusBars, Tombol} from '../../components';
import {colors, responsiveHeight} from '../../utils';

export default class Message extends Component {
  render() {
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
              icon="filter"
              padding={10}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.body}></View>
        </ScrollView>
      </View>
    );
  }
}

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
});
