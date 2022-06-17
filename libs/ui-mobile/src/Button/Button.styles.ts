import { Colors } from '@nx-react-web-mobile/ui-res';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.YELLOW,
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: Colors.GREY3,
  },
  content: {
    color: Colors.BLACK,
  },
});
