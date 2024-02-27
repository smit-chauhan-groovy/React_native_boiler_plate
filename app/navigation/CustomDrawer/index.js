import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';

const CustomDrawer = props => {
  const drawerItems = [
    {id: 1, name: 'Home', nav: 'Home'},
    {id: 2, name: 'About', nav: 'About'},
    {id: 3, name: 'Services', nav: 'Services'},
  ];

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>User name</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 0}}>
        {drawerItems.map((data, index) => {
          return (
            <View key={index}>
              <DrawerItem
                label={() => (
                  <View>
                    <Text>{data?.name}</Text>
                  </View>
                )}
                onPress={() => {
                  if (data?.nav) {
                    props?.navigation?.closeDrawer();
                    if (data?.nav === 'Home') {
                      props?.navigation?.navigate('Home');
                    } else if (data?.nav === 'About') {
                      props?.navigation?.navigate('About');
                    } else if (data?.nav === 'Profile') {
                      props?.navigation?.navigate('Profile');
                    } else if (data?.nav === 'Services') {
                      props?.navigation?.navigate('Services');
                    }
                  }
                }}
              />
            </View>
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
