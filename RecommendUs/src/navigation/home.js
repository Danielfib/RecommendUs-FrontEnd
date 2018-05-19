import {
    StackNavigator,
} from 'react-navigation'

const HomeNavigator = StackNavigator(
    {},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

export default HomeNavigator