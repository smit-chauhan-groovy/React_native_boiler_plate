import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../Redux/Reducers/auth/actions';
import BaseColor from '../../Config/colors';
import styles from './styles';

const CustomDrawer = props => {
  const {activeDrawerTab} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const {setActiveDrawerTab} = authActions;

  const drawerItems = [
    {id: 1, name: 'Home', nav: 'Home'},
    {id: 2, name: 'About', nav: 'About'},
  ];

  return (
    <View style={[styles.mainContainer, {flex: 1, padding: 5}]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, color: BaseColor.white}}>User name</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 10}}>
        {drawerItems.map((data, index) => {
          return (
            <View key={index}>
              <DrawerItem
                focused={data?.id === activeDrawerTab?.id}
                activeBackgroundColor={BaseColor.lightPurple}
                label={() => (
                  <View>
                    <Text style={{color: BaseColor.white}}>{data?.name}</Text>
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
                  dispatch(setActiveDrawerTab(data));
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
