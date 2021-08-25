import {Dimensions} from 'react-native';
import {heightMobileUi, widthMobileUi} from '../constant';

export const responsiveWidth = width => {
  return (Dimensions.get('window').width * width) / widthMobileUi;
};

export const responsiveHeight = height => {
  return (Dimensions.get('window').height * height) / heightMobileUi;
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
