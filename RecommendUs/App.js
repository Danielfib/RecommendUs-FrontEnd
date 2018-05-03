import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CreateGroup from './screens/createGroup';

const NAV_BAR_H = 20;

//home (atualmente vazia)
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
        {/*botao pra trocar de tela*/}
        <Button
          title="criar grupo!"
          onPress={() => this.props.navigation.navigate('CriarGrupo')}
        />        
      </View>
    );
  }
}

const RootStack = StackNavigator({
  //essa é a pilha de telas, a ordem de apresentacao aqui importa
  //ou seje, a tela que vier primeiro aqui será o index
  Home: {
    screen: HomeScreen,
  },
  CriarGrupo: {
    screen: CreateGroup,
  },  
  
  initialRouteName: 'Home',  
});

//export defaul class é o "main"
export default class App extends React.Component {
  render(){
    return <RootStack />;
  }
}