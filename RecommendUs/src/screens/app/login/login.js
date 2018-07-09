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
    Dimensions,
    Button
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

    login() {
        let data = {
            username: this.state.email,
            password: this.state.password,
        }

        axios.post(`${requests.getUrl()}/login`, data)
        .then(res => {
            console.log("Suc Log In: ", res.data)
            requests.setUser(res.data)
            this.props.navigation.navigate('tabHome');
        })
        .catch(err => {
            console.log("Err Log In: ", err)
        })
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <BarStatus/>
        {/*
                <Image
                    style={styles.imagemFundo}
                    source={require('../../../assets/login-fundo.jpg')}
                />
                <View style={styles.telafundo} />                
        */}
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >
                    <Image
                        style={styles.imagemFundo}
                        source={require('../../../assets/login-fundo.jpg')}
                    />
                    <View style={styles.telafundo} />

                    <View style={styles.container}>
                        <Image source={require('../../../assets/Group.png')} style={styles.logo} />
                        <Text style = {styles.title}>
                            RecomendUs
                        </Text>
                        
                        <View>
                            <View>
                                <View style={styles.fields}>
                                    <TextInput
                                        placeholder="Email"
                                        underlineColorAndroid={'transparent'}
                                        style={styles.input}
                                        onChangeText = {(text) => this.setState({email: text})}
                                        value = {this.state.email}
                                    />
                                    <Icons.MaterialCommunityIcons
                                        style={styles.icon}
                                        name={'email-outline'}
                                        size={35}
                                        color={'#BEBEBE'}
                                    />
                                </View>
                                <View style = {styles.fields}>
                                    <TextInput
                                        placeholder="Senha"
                                        underlineColorAndroid={'transparent'}
                                        style={styles.input}
                                        onChangeText = {(text) => this.setState({password: text})}
                                        value = {this.state.password}
                                    />
                                    <Icons.MaterialIcons
                                        style={styles.icon}
                                        name={'lock-outline'}
                                        size={35}
                                        color={'#BEBEBE'}
                                    />
                                </View>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.botao} title="LogIn" onPress = {this.login}>
                                    <Text style={{fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold', color: '#A30000'}}>
                                        Log In
                                    </Text>
                                </TouchableOpacity>
                            </View>
                                
                        </View>
                        
                        <View style={{ height: 120}} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default Login

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#A30000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: "#fff",
      //width: em(30),
      height: em(12),
      borderRadius: 10,
      marginHorizontal: 40,
  },
  input: {
    paddingLeft: em(3),
    height: em(12.5),
    width: em(60),
    fontSize: em(6),
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
   // paddingVertical: 5,
    // paddingHorizontal: 15,
    width: window.width - 30,
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 10,
    padding:10,
    marginTop:20
  },
  register:{
    marginBottom:20, 
    width:window.width -100,
    alignItems:'center',
    justifyContent:'center',
    height:50,
    backgroundColor: '#ffae',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: em (8),
    marginBottom: em (4),
  },
  imagemFundo: {
    //flex: 1,
    position: 'absolute',
    width: em (100),
    height: em(178)

  },
  telafundo: {
    position: 'absolute',
    backgroundColor: '#A30000',
    opacity: 0.7,
    width: em (100),
    height: em (178),
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: em (4),
  },
});