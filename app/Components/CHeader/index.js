import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const CHeader = props => {
  const {onDrawerPress = () => {}} = props;

  return (
    <View
      style={[
        {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          height: 50,
        },
        styles.mainContainer,
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          onDrawerPress();
        }}>
        <FontAwesome name="align-justify" size={22} style={{color: 'black'}} />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: 700}}>Header</Text>
      <Feather name="bell" size={24} style={{color: 'black'}} />
    </View>
  );
};

export default CHeader;
