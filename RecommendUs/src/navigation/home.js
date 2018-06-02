import {
    StackNavigator,
} from 'react-navigation'

import Home from '../screens/app/home'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'

const HomeNavigator = StackNavigator(
    {
        home: {
            screen: Home
        },
        prefereces: {
            screen: Preferences
        },
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

export default HomeNavigator