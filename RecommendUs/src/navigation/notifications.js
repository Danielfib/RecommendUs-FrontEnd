import {
    StackNavigator,
} from 'react-navigation'

import Notifications from '../screens/app/notifications'

const NotificationNavigator = StackNavigator(
    {
        notifications: {
            screen: Notifications
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