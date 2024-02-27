import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';

const Profile = ({navigation}) => {
  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text>Profile </Text>
    </View>
  );
};

export default Profile;
