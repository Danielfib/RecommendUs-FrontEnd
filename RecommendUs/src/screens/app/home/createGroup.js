import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Draggable from "../../../components/Draggable.js";
import BarStatus from "../../../components/StatusBar.js";
import Header from '../../../components/Header.js';
import NextButton from '../../../components/NextButton.js';
import SearchButton from '../../../components/SeachButton.js';

import em from '../../../properties/responsive';
import { format } from "url";

export default class CreateGroup extends Component {
  constructor(){
    super();
    //this.state = { arrayAmigosDz: []}
    this.index = 0;
    this.state = { amigosCompDz: []} //array de newlyAddesValues emcima, é mapeado pra ser renderizado
    this.amigosIniciaisData = ['1', '2', '3', '4', '5'];
    this.amigosIniciais = this.amigosIniciaisData.map((type)=><Draggable key={type} id={type} addMore={this.addMore}/>);
  }
  
  //so that tab navigator doesnt appear
  static navigationOptions = {
    header: null,  
    tabBarVisible: false,
    swipeEnabled: false,
  }

  addMore = (chave) => {
    //nao esta adicionando ao array arrayAmigosDz
    console.log("chave:" + chave);
    //console.log("opa");
    //let newlyAddedValue = { index: chave }
    //this.setState({arrayAmigosDz: [ ...this.state.arrayAmigosDz, newlyAddedValue]});
    //this.index = this.index + 1;

    //this.amigosCompDz = this.state.arrayAmigosDz.map((type) => <TouchableOpacity key={chave}/>);
    let newlyAddedValue = { index: chave }
    this.setState({amigosCompDz: [ ...this.state.amigosCompDz, newlyAddedValue]});

    /*
    this.state.amigosCompDz.push(
      newlyAddedValue      
    );
    */
    //console.log("------------------------------------");
    //console.log(this.state.arrayAmigosDz);
    console.log("---------------------------------1");
    console.log(this.state.amigosCompDz);
    /*
    console.log(this.state.arrayAmigosDz);
    console.log("---------------------------------1");
    console.log(this.amigosCompDz);
    console.log("---------------------------------2");
    console.log(this.amigosIniciaisData);
    console.log("---------------------------------3");
    console.log(this.amigosIniciais);
    console.log("---------------------------------4");
    */
  }

  removeFromDz = () => {
    //clicou na bolinha emcima e ela volta para baixo
    //adicionar de volta em amigosIniciais
    //remover de amigosCompDz
  }

  render() {
    //arrayAmigosDz    
/*
    let newArray = this.state.arrayAmigosDz.map((item, key) =>{
      return(
        <View style={styles.circleContainerDZ}>
          <TouchableOpacity onPress={this.removeFromDz()} style={styles.circle}>

          </TouchableOpacity>
        </View>
      );
    });
*/
    let renderArray = this.state.amigosCompDz.map((item, map) =>{
      return(
        <View style={styles.circleContainerDZ}>
          <TouchableOpacity style={styles.circle} key={item.index} onPress={this.removeFromDz()}/>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <BarStatus/>

        <Header navigation={this.props.navigation}>
          <Text style={styles.titleHeader}>
              {"Crie seu Grupo"}
          </Text>
        </Header>


        <View style={styles.mainContainer}>
          <View style={styles.dzContainer}>
            <View style={styles.dZTextContainer}>
              <Text style={styles.textDz}>Arraste seus amigos para cá para reunuir sua galera!</Text>
            </View>
            <ScrollView horizontal style={styles.dropZone}>
              <View style={styles.row}>
              {
                //ERRO ATUAL:
                //por algum motivo, esse array n esta sendo renderizado
                renderArray
              }
              </View>
            </ScrollView>
          </View>

          <View style={styles.ballContainer}>
            <View style={styles.row}>
              {this.amigosIniciais}
            </View>
          </View>
        </View>
      
        <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('preferences')}>
          <NextButton />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <SearchButton />
        </TouchableOpacity>
      </View>
    );    
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1
  },
  dzContainer: {
    flex: 1,
    backgroundColor: "#A6A6A6",
  },
  ballContainer: {
    flex:3
  },
  dZTextContainer: {
    position: 'absolute',
    opacity: 0.7
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    //backgroundColor: 'black'
  },  
  dropZone: {
    //position: 'absolute',
    flex: 1,
    //opacity:0.9
  },
  titleHeader: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: em (7.6),
  },
  searchButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  nextButton: {    
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  text: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  textDz: {
    marginTop: 35,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    color: "#fff",
    fontSize: 23
  },
  circle: {
    backgroundColor: "#A30000",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  circleContainerDZ: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flex: 1
  }
});