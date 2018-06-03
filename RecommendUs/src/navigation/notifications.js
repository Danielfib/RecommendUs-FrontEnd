import {
    StackNavigator,
} from 'react-navigation'

import Notifications from '../screens/app/notifications'
import Preferences from '../screens/app/home/preferences'

const NotificationNavigator = StackNavigator(
    {
        notifications: {
            screen: Notifications
        },
        preferences: {
            screen: Preferences
        },
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default NotificationNavigator