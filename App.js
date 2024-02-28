import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import StartingNav from './app/navigation';
import {ThemeProvider} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './app/Redux/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';
import {firebase} from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    try {
      await firebase.messaging().registerDeviceForRemoteMessages();
      let token = await firebase.messaging().getToken();
      console.log('token======>>>>>', token);
    } catch (err) {
      console.log('err======>>>>>', err);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StartingNav />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </View>
  );
};

export default App;
