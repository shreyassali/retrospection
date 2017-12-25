import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MusicScreen from '../screens/MusicScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Music: {
      screen: MusicScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios' ? `home` : 'home';
            break;
          case 'Music':
            iconName = Platform.OS === 'ios' ? 'music' : 'music';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? 'cogs' : 'cogs';
        }
        return (
          <FontAwesome
            name={iconName}
            size={26}
            style={{ marginBottom: 1 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
