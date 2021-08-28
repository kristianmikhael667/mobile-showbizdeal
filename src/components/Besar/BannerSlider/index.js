import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Banner1, Banner2, Banner3, Banner4} from '../../../assets';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Banner1, Banner2, Banner3, Banner4],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          sliderBoxHeight={responsiveHeight(161)}
          images={this.state.images}
          autoplay
          circleLoop
          ImageComponentStyle={styles.slider}
          dotColor={colors.primary2}
          inactiveDotColor={colors.nonactive}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -100,
    marginBottom: 12,
    flex: 1,
  },
  slider: {
    borderRadius: 15,
    width: responsiveWidth(360),
  },
});
