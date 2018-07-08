import {
    StackNavigator,
} from 'react-navigation'

import Login from '../screens/app/login/login'
import TabHome from '../screens/app/tabHome'
import CreateGroup from '../screens/app/home/createGroup'
import Preferences from '../screens/app/home/preferences'
import Preference2 from '../screens/app/home/preference2'
import ListRestaurant from '../screens/app/home/restaurantes'
import Details from '../screens/app/home/details'


const MainNavigator = StackNavigator(
    {
        //login: {
          //  screen: Login
        //},
        // tabHome: {
        //     screen: TabHome
        // },
        // createGroup: {
        //     screen: CreateGroup
        // },
        // preferences: {
        //     screen: Preferences
        // },
        /*
        preferences2: {
            screen: Preference2
        },*/
        restaurants: {
            screen: ListRestaurant
        },
        details: {
            screen: Details
        }
    },
    {
        headerMode: 'none',
    },
);
export default MainNavigator