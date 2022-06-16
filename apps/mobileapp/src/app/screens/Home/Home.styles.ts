import { StyleSheet, Dimensions } from 'react-native';
import { PLANETS_COLUMN } from './Home.constants';

const screenWidth = Dimensions.get('screen').width;

const planetItemWidth = screenWidth / PLANETS_COLUMN;

const planetItemHWRatio = 1.5;

const planetItemHeight = planetItemWidth * planetItemHWRatio;

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'red'
  },
  planetItem: {
    width: planetItemWidth,
    height: planetItemHeight,
    borderWidth: 1,
  },
});
