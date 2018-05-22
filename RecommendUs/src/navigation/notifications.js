import {
    StackNavigator,
} from 'react-navigation'

import Preference2 from '../screens/app/home/preference2'

const NotificationNavigator = StackNavigator(
    {
        prefereces2: {
            screen: Preference2
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