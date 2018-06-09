import {
    StackNavigator,
} from 'react-navigation'

//import Login from 'screens/login/login'
import TabRouter from './tab-router'

const MainNavigator = StackNavigator(
    {
        /*login: {
            screen: Login
        },*/
        tab: {
            screen: TabRouter
        },
    },
    {
        headerMode: 'none',
    },
);
export default MainNavigator