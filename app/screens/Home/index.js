import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import BaseColor from '../../Config/colors';

const Home = ({navigation}) => {
  const callback = res => {
    console.log('res======>>>>>', res);
  };

  const setWallpaper = () => {
    ManageWallpaper.setWallpaper(
      {
        uri: 'https://i.pinimg.com/236x/bd/35/ca/bd35caa1d66da3a15ed952b4ac1010f7.jpg',
      },
      callback,
      TYPE.HOME,
    );
  };

  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      <Image
        style={{height: Dimensions.get('screen').height * 0.7}}
        source={{
          uri: 'https://i.pinimg.com/236x/bd/35/ca/bd35caa1d66da3a15ed952b4ac1010f7.jpg',
        }}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
        <TouchableOpacity
          onPress={setWallpaper}
          activeOpacity={0.7}
          style={{
            backgroundColor: BaseColor.primary,
            height: 30,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: BaseColor.white, fontSize: 20}}>
            Set as wallpaper
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
