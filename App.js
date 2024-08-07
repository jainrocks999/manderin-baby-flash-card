import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import IAPProvider from './src/Context';
import {Provider} from 'react-redux';
import myStore from './src/reduxToolkit/MyStore';
import Root from './src';

const App = () => {
  return (
    <IAPProvider>
      <Provider store={myStore}>
        <StatusBar backgroundColor="#73cbea" />
        <Root />
      </Provider>
    </IAPProvider>
  );
};

export default App;
//   spec.source = { :http => 'https://sourceforge.net/projects/boost/files/boost/1.76.0/boost_1_76_0.tar.bz2'}
