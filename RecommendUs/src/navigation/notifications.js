import {
    StackNavigator,
} from 'react-navigation'

const NotificationNavigator = StackNavigator(
    {},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default NotificationNavigator