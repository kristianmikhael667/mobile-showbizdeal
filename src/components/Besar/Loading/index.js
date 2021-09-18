import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Banner1, Love} from '../../../assets';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

const Loading = () => {
  return (
    <SkeletonPlaceholder>
      <View
        style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <View style={styles.bodysub}>
          <Image style={styles.images} source={Banner1} />
          <View style={styles.love}>
            <View style={{alignItems: 'center', marginVertical: 6}}>
              <>
                <Love />
              </>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 50,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 90,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 40,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
        </View>
        <View style={styles.bodysub}>
          <Image style={styles.images} source={Banner1} />
          <View style={styles.love}>
            <View style={{alignItems: 'center', marginVertical: 6}}>
              <>
                <Love />
              </>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 50,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 90,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 40,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
        </View>
        <View style={styles.bodysub}>
          <Image style={styles.images} source={Banner1} />
          <View style={styles.love}>
            <View style={{alignItems: 'center', marginVertical: 6}}>
              <>
                <Love />
              </>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 50,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 90,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 40,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
        </View>

        <View style={styles.bodysub}>
          <Image style={styles.images} source={Banner1} />
          <View style={styles.love}>
            <View style={{alignItems: 'center', marginVertical: 6}}>
              <>
                <Love />
              </>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 50,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 90,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 40,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
        </View>

        <View style={styles.bodysub}>
          <Image style={styles.images} source={Banner1} />
          <View style={styles.love}>
            <View style={{alignItems: 'center', marginVertical: 6}}>
              <>
                <Love />
              </>
            </View>
          </View>
          <View
            style={{
              width: 100,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 50,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 90,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
          <View
            style={{
              width: 40,
              height: 10,
              borderRadius: 2,
              alignSelf: 'center',
              marginTop: 9,
            }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Loading;

const styles = StyleSheet.create({
  bodysub: {
    width: responsiveWidth(168),
    height: responsiveHeight(290),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    marginBottom: 16,
    marginHorizontal: responsiveWidth(7),
  },
  images: {
    width: '100%',
    height: responsiveHeight(182),
    marginRight: responsiveWidth(4),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
  },
  love: {
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 24,
    top: 7,
    right: 7,
  },
});
