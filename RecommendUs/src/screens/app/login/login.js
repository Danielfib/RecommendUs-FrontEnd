import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'

import * as requests from '../../../actions/requests'

import em from '../../../properties/responsive'

class Login extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        let data = {
            username: 'cicrano@gmail.com',
            password: 'secret',
        }

        axios.post(`${requests.getUrl()}/login`, data)
        .then(res => {
            console.log("Suc Log In: ", res.data)
            requests.setUser(res.data)
        })
        .catch(err => {
            console.log("Err Log In: ", err)
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <BarStatus />
                <Image
                    style={styles.imagemFundo}
                    source={require('../../../assets/login-fundo.jpg')}
                />
                <View style={styles.telafundo}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Group.png')}
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('tabHome')}>
                    <Text>
                        {
                            "Login"
                        }
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagemFundo: {
        flex: 1,
        width: em (100),
    },
    telafundo: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#A30000',
        opacity: 0.75,
        width: em (100),
        alignItems: 'center',
    },
    logo: {},
})