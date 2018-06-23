import {
    StackNavigator,
} from 'react-navigation'

//import Login from 'screens/login/login'
import TabRouter from './tab-router'
import TabHome from '../screens/app/tabHome'
import Group from '../screens/app/home/group'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'
import ListRestaurant from '../screens/app/home/restaurantes'

const MainNavigator = StackNavigator(
    {
        /*login: {
            screen: Login
        },*/
        tabHome: {
            screen: TabHome
        },
        group: {
            screen: Group
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
    },
);
export default MainNavigator