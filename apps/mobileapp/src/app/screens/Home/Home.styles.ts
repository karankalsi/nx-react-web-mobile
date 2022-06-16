import { Colors } from '@nx-react-web-mobile/ui-res';
import { StyleSheet, Dimensions } from 'react-native';
import { PLANETS_COLUMN } from './Home.constants';

const screenWidth = Dimensions.get('screen').width;

const planetItemWidth = screenWidth / PLANETS_COLUMN;

const planetItemHWRatio = 1.5;

const planetItemHeight = planetItemWidth * planetItemHWRatio;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  contentContainer: { flexGrow: 1 },
  planetItem: {
    width: planetItemWidth,
    height: planetItemHeight,
    borderWidth: 1,
    borderColor: Colors.GREY5,
  },
  planetItemImageContainer: {
    flex: 1,
    margin: 12,
  },
  planetItemImage: {
    width: '100%',
    height: '100%',
  },
  planetItemName: {
    color: Colors.WHITE,
    alignSelf: 'center',
    padding: 8,
  },
  emptyListPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: Colors.GREY4,
  },
  spinnerFooter: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
