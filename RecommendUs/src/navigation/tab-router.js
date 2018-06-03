import {
    TabNavigator,
} from 'react-navigation'

import HomeNavigator from './home'
import NotificationNavigator from './notifications'

// Showcase de telas
const root = TabNavigator (
  {
    
    notifications: {
      screen: NotificationNavigator
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
  }
)

export default root