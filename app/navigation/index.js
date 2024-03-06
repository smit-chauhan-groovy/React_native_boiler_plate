import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import CustomDrawer from './CustomDrawer';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardBottomTabs from './BottomTabs';
import About from '../screens/About';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Services from '../screens/Services';
import Profile from '../screens/Profile';
import SplashScreen from '../screens/SplashScreen';
import WalkThrough from '../screens/WalkThrough';

const StartingNav = () => {
  const [bool, setBool] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBool(false);
    }, 2000);
  }, []);

  const SplashNavigator = () => {
    const Home = createStackNavigator();
    return (
      <Home.Navigator>
        <Home.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
      </Home.Navigator>
    );
  };

  const Drawer = createDrawerNavigator();

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          drawerType: 'front',
          drawerPosition: 'left',
          drawerStyle: {
            width: Dimensions.get('screen').width * 0.7,
            backgroundColor: 'transparent',
          },
          overlayColor: 'transparent',
        }}
        drawerContent={props => {
          return <CustomDrawer {...props} />;
        }}>
        <Drawer.Screen
          name="Drawer"
          component={BottomTabs}
          options={{
            headerShown: false,
            swipeEnabled: true,
          }}
        />
      </Drawer.Navigator>
    );
  };

  const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
      <>
        {/* Blurred View comes when Drawer is opened */}
        <Tab.Navigator
          tabBar={props => (
            <View
              style={{
                bottom: 0,
                right: 0,
                left: 0,
              }}>
              <DashboardBottomTabs {...props} />
            </View>
          )}
          initialRouteName={'Home'}
          backBehavior={'initialRoute'}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          />
        </Tab.Navigator>
      </>
    );
  };

  const HomeNavigator = () => {
    const Home = createStackNavigator();
    return (
      <Home.Navigator initialRouteName="Walkthrough">
        <Home.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Home.Screen
          name="Services"
          component={Services}
          options={{
            headerShown: false,
          }}
        />
        <Home.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Home.Screen
          name="Walkthrough"
          component={WalkThrough}
          options={{
            headerShown: false,
          }}
        />
        <Home.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
      </Home.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {bool ? <SplashNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
};

export default StartingNav;
