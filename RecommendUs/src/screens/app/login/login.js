import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'

import * as requests from '../../../actions/requests'

import * as Icons from 'react-native-vector-icons'

import em from '../../../properties/responsive'

class Login extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
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
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <BarStatus />
                <Image
                    style={styles.imagemFundo}
                    source={require('../../../assets/login-fundo.jpg')}
                />
                <View style={styles.telafundo} />
                <View style={styles.subContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/Group.png')}
                    />
                    <Text style={styles.title}>
                        {
                            "RecomendUs"
                        }
                    </Text>
                    <View style={styles.fields}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                            placeholder={'Email'}
                            underlineColorAndroid={'transparent'}
                        />
                        <Icons.MaterialCommunityIcons
                            style={styles.icon}
                            name={'email-outline'}
                            size={35}
                            color={'#BEBEBE'}
                        />
                    </View>
                    <View style={styles.fields}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            placeholder={'Senha'}
                            underlineColorAndroid={'transparent'}
                            secureTextEntry={true}
                        />
                        <Icons.MaterialIcons
                            style={styles.icon}
                            name={'lock-outline'}
                            size={35}
                            color={'#BEBEBE'}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        position: 'absolute',
        backgroundColor: '#A30000',
        opacity: 0.75,
        width: em (100),
        height: em (178),
    },
    subContainer: {
        position: 'absolute',
        alignSelf: 'center',
    },
    logo: {
        marginTop: em (30),
        width: em (62),
        height: em (62),
        alignSelf: 'center',
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: em (8),
        marginTop: em (4),
        marginBottom: em (4),
    },
    fields: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: em (5),
    },
    icon: {
        position: 'absolute',
        right: em (0.7),
    },
    textInput: {
        paddingLeft: em (3),
        backgroundColor: '#FFFFFF',
        width: em (78),
        height: em (12.5),
        fontSize: em (6),
        color: '#BEBEBE',
    },
})