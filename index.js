/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HostCountry from './components/HostCountry';
import ProviderComponent from './components/ProviderComponent';

AppRegistry.registerComponent(appName, () => ProviderComponent);
