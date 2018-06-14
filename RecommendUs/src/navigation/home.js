import {
    StackNavigator,
} from 'react-navigation'

import Home from '../screens/app/home'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'
import ListRestaurant from '../screens/app/home/restaurantes'

const HomeNavigator = StackNavigator(
    {
        // home: {
        //     screen: Home
        // },
        // preferences: {
        //     screen: Preferences
        // },
        // preferences2: {
        //     screen: Preference2
        // },
        restaurant: {
            screen: ListRestaurant
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