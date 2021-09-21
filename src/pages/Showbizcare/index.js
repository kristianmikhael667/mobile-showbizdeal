import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonBack, ButtonRight} from '../../assets';
import {StatusBars} from '../../components';
import {dummyShowbizcare} from '../../Data/dummyShowbizcare';
import {
  colors,
  fonts,
  heightMobileUi,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';

export default class Showbizcare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showcare: dummyShowbizcare,
    };
  }

  render() {
    const {showcare} = this.state;
    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.buttonback}>
              <ButtonBack />
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.titletext}>ShowbizCare</Text>
            </View>
          </View>
          <Text style={styles.titles}>Seputar ShowbizPartner</Text>
          <View style={styles.bodycard}>
            {showcare.map(show => {
              if (show.type === 'first') {
                return (
                  <TouchableOpacity style={styles.cards}>
                    <View
                      style={{
                        width: responsiveWidth(313),
                        height: responsiveHeight(60),
                        paddingTop: responsiveHeight(12),
                        // paddingLeft: responsiveWidth(21),
                        paddingHorizontal: responsiveWidth(20),
                      }}>
                      <Text style={styles.category}>{show.category}</Text>
                      <Text style={styles.nama}>{show.nama}</Text>
                      <Text style={styles.fields}>{show.field}</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <ButtonRight />
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <Text style={styles.titles}>Seputar ShowbizPartner</Text>
          <View style={styles.bodycard}>
            {showcare.map(show => {
              if (show.type === 'second') {
                return (
                  <TouchableOpacity style={styles.cards}>
                    <View
                      style={{
                        width: responsiveWidth(313),
                        height: responsiveHeight(60),
                        paddingTop: responsiveHeight(12),
                        // paddingLeft: responsiveWidth(21),
                        paddingHorizontal: responsiveWidth(20),
                      }}>
                      <Text style={styles.category}>{show.category}</Text>
                      <Text style={styles.nama}>{show.nama}</Text>
                      <Text style={styles.fields}>{show.field}</Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <ButtonRight />
                    </View>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.pages,
  },
  header: {
    height: responsiveHeight(120),
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingTop: 44,
    paddingBottom: 34,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
  },
  titletext: {
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: RFValue(18, heightMobileUi),
  },
  titles: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    marginTop: 15,
    marginLeft: 27,
  },
  bodycard: {
    alignItems: 'center',
    marginTop: 10,
  },
  cards: {
    width: responsiveWidth(347),
    height: responsiveHeight(90),
    backgroundColor: colors.white,
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  category: {
    fontSize: 9,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(12, heightMobileUi),
    color: colors.primary2,
  },
  fields: {
    fontSize: 8,
    marginTop: responsiveHeight(5),
  },
});
