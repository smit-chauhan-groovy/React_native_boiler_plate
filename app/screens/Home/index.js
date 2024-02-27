import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';

const Home = ({navigation}) => {
  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
