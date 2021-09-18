import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {HeaderSearch, StatusBars} from '../../components';

class PageSearch extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView>
          <HeaderSearch navigation={navigation} page="PageSearch" />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(PageSearch);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
});
