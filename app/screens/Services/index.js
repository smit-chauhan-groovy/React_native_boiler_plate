import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';

const Services = ({navigation}) => {
  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text>Services</Text>
    </View>
  );
};

export default Services;
