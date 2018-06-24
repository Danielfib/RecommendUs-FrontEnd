import {
    StackNavigator,
} from 'react-navigation'

//import Login from 'screens/login/login'
import TabRouter from './tab-router'
import TabHome from '../screens/app/tabHome'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'
import ListRestaurant from '../screens/app/home/restaurantes'
import Info from '../screens/app/home/info'

const MainNavigator = StackNavigator(
    {
        /*login: {
            screen: Login
        },*/
        info: {
            screen: Info
        },
        tabHome: {
            screen: TabHome
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