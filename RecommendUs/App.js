import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

//home (atualmente vazia)
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen abaiudbwe</Text>
        
        {/*botao pra trocar de tela*/}
        <Button
          title="criar grupo!"
          onPress={() => this.props.navigation.navigate('CriarGrupo')}
        />        
      </View>
    );
  }
}

//tela de criar grupo
class CreateGroup extends React.Component {
  render() {
    return (
      <View style ={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
        <Text>
          Tela de criar grupo
        </Text>
      </View>
    );
  }
}

const RootStack = StackNavigator({
  //essa é´a pilha de telas, a ordem de apresentacao aqui importa
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