import {
    StackNavigator,
} from 'react-navigation'

import Home from '../screens/app/home'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'
import ListRestaurant from '../screens/app/home/restaurantes'
import CreateGroup from '../screens/app/home/createGroup'

const HomeNavigator = StackNavigator(
    {
        createGroup: {
            screen: CreateGroup
        },
        home: {
            screen: Home
        },
        preferences: {
            screen: Preferences
        },
        preferences2: {
            screen: Preference2
        },
        restaurants: {
            screen: ListRestaurant
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