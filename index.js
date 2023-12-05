/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import App from './src';
import store from './src/redux/store';
import TrackPlayer from 'react-native-track-player';

const RNRoot = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

TrackPlayer.registerPlaybackService(() => require('./src/Service'));
AppRegistry.registerComponent(appName, () => RNRoot);
