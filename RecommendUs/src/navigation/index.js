import {
    StackNavigator,
} from 'react-navigation'

//import Login from 'screens/login/login'
import TabRouter from './tab-router'
import TabHeader from '../screens/app/tabHeader'

const MainNavigator = StackNavigator(
    {
        /*login: {
            screen: Login
        },*/
        tabHeader: {
            screen: TabHeader
        },
    },
    {
        headerMode: 'none',
    },
);
export default MainNavigator