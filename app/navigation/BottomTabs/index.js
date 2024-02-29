import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import BaseColor from '../../Config/colors';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DashboardBottomTabs = () => {
  useEffect(() => {
    changeNavigationBarColor(BaseColor.primary, true);
  }, []);

  return (
    <View
      style={{
        backgroundColor: BaseColor.primary,
        height: 40,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <FontAwesome name="home" size={25} style={{color: BaseColor.white}} />
      <Feather
        name="shopping-cart"
        size={25}
        style={{color: BaseColor.white}}
      />
      <Entypo name="chat" size={25} style={{color: BaseColor.white}} />
      <AntDesign name="profile" size={25} style={{color: BaseColor.white}} />
    </View>
  );
};

export default DashboardBottomTabs;
