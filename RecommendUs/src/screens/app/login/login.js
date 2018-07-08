import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    TouchableOpacity,
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
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        return (
            <View style={styles.container}>
                <BarStatus />
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
})