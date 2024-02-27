import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import StartingNav from './app/navigation';
import {ThemeProvider} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from './app/Redux/store/configStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
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
