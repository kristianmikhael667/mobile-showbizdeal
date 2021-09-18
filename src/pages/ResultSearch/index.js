import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {HeaderSearch, StatusBars} from '../../components';

class ResultSearch extends Component {
  render() {
    const {getSearchByNameResult, navigation} = this.props;
    return (
      <View style={styles.pages}>
        <StatusBars />
        <ScrollView>
          <HeaderSearch navigation={navigation} page="ResultSearch" />
        </ScrollView>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  // name
  getSearchByNameLoading: state.SearchNameReducer.getSearchByNameLoading,
  getSearchByNameResult: state.SearchNameReducer.getSearchByNameResult,
  getSearchByNameError: state.SearchNameReducer.getSearchByNameError,
});

export default connect(mapStatetoProps, null)(ResultSearch);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
});
