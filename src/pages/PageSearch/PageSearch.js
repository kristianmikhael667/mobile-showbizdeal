import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ButtonBack, Searching} from '../../assets';
import {StatusBars} from '../../components';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';

export default class PageSearch extends Component {
  componentDidMount() {
    this.textInputRef.focus();
  }
  render() {
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
              <TextInput
                ref={ref => (this.textInputRef = ref)}
                placeholder="Dj Soda"
                style={{
                  color: colors.white,
                  backgroundColor: colors.pembatas,
                  width: 278,
                  height: 34,
                  fontSize: 14,
                  marginTop: responsiveHeight(-5),
                  textAlignVertical: 'top',
                  paddingVertical: 8,
                  paddingLeft: 18,
                }}
              />

              <View style={{position: 'absolute', right: 11, top: 5}}>
                <Searching />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },

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
});
