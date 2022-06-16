import { Colors } from '@nx-react-web-mobile/ui-token';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: Colors.GREY4,
    justifyContent: 'center',
  },
  loginForm: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: 'center',
    backgroundColor: Colors.GREY5,
  },
  userAvatar: {
    width: 200,
    height: 200,
  },
  formField: {
    width: '100%',
    marginTop: 24,
  },
  formFieldInput: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.WHITE,
    padding: 12,
  },
  label: {
    color: Colors.WHITE,
    fontWeight: '600',
    marginBottom: 8,
  },
  loginButton: {
    width: '100%',
    marginTop: 24,
  },
});
