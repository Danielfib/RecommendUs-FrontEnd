import {
    StackNavigator,
} from 'react-navigation'

import Preference2 from '../screens/app/home/preference2'
import Preferences from '../screens/app/home/preferences'

const HomeNavigator = StackNavigator(
    {
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