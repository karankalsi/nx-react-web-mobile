import { Colors } from '@nx-react-web-mobile/ui-token';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import SpinnerStyles from './Spinner.styles';
import { SpinnerProps } from './Spinner.types';

const Spinner: React.FC<SpinnerProps> = ({ fullScreenOverlay }) => {
  const containerStyles = [SpinnerStyles.container];
  if (fullScreenOverlay) {
    containerStyles.push(SpinnerStyles.fullScreenOverlayContainer);
  }
  return (
    <View style={containerStyles}>
      <ActivityIndicator size={'small'} color={Colors.YELLOW} />
    </View>
  );
};

Spinner.defaultProps = {
  fullScreenOverlay: false,
};

export default React.memo(Spinner);
