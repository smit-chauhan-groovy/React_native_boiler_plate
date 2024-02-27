import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';

const About = ({navigation}) => {
  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text>About </Text>
    </View>
  );
};

export default About;
