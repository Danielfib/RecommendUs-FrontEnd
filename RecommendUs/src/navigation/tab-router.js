import {
    TabNavigator,
} from 'react-navigation'

import Home from '../screens/app/home'
import Notifications from '../screens/app/notifications'

// Showcase de telas
const MyTab = TabNavigator ({
    home: {
      screen: Home
    },
    notifications: {
      screen: Notifications
    },
  },
  {
    // Configurações do TabNavigator
    tabBarPosition: 'top',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,

      indicatorStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2,
      },
      style: {
        backgroundColor: '#A30000',
      },
    },
  },
);

export default MyTab