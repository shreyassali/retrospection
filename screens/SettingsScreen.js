import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Banner from '../components/Banner';
import SettingsComponent from '../components/SettingsComponent';

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header:(
      <Banner headerText={'Settings'}/>
    ),
  });

  render() {
    return <SettingsComponent />;
  }
}
