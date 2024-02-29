import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {Files} from '../../Config/Files';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.Image
        source={Files.images.splashLogo}
        style={[{height: 150, width: 150}]}
      />
    </View>
  );
};

export default SplashScreen;
