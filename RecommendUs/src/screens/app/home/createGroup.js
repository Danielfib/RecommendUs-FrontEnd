import axios from 'axios';
import * as requests from "../../../actions/requests.js"

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, ScrollView, Button, ImageBackground, Image } from "react-native";
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
  
    this.state = {
      teste : 0,
      //se tudo estiver certo, aqui eu tenho o array de objeto
      //cada objeto com {id, nome, foto}
      //(a url da foto ta levando em consideracao que o endereco inicial é o diretorio de Draggable.js)
      amigosIniciaisBack: []
    }

    this.index = 0;
    this.amigosIniciais = [];
    
    this.renderArray = [];
  }
  
  //so that tab navigator doesnt appear
  static navigationOptions = {
    header: null,  
    tabBarVisible: false,
    swipeEnabled: false,
  }

  
  componentWillMount() {
    //receber arrays
    axios.get(`${requests.getUrl()}/profiles/info`, requests.getUser())
    .then(res => {
      this.setState({
        amigosIniciaisBack: res.data
      })
      
      this.amigosIniciais = this.state.amigosIniciaisBack.map((type)=>
        <Draggable key={type.id} id={type.id} foto={`${requests.getUrl()}${type.foto}`} addMore={this.addMore}/>
      );

      //re-renderizando
      this.setState({teste: 0});
    })
    .catch(err => {
      console.warn(err)
    });
  }
  
  addMore = (chave, foto) => {  
    this.renderArray.push(
      <View style={styles.circleContainerDZ} key={chave}>
        
        <TouchableOpacity style={styles.circle} onPress={ _ => this.addBack(chave)}>
          
          <Image style={{height: CIRCLE_RADIUS * 2, width: CIRCLE_RADIUS * 2, borderRadius: CIRCLE_RADIUS}}
          source={{uri: foto}}/> 
          
        
        </TouchableOpacity>
        
      </View>
    );

    //agora dar splice no array de baixo
    this.spliceSearch(chave, 0);

    //re-renderizando
    this.setState({teste: 1});
  }

  addBack = (chave) => {
    //tira de cima e bota embaixo dnv
    //(por enquanto, talvez) bota embaixo enfilando

    //remover de cima
    this.spliceSearch(chave, 1);

    //e adicionando sem ordem embaixo
    this.amigosIniciais.push(
      <Draggable key={chave} id={chave}
      foto={`${requests.getUrl()}${this.fotoSearchOnBack(chave)}`} addMore={this.addMore}/>
    );   

    //re-renderizando
    this.setState({teste: 1});
  }

  fotoSearchOnBack = (chave) => {
    for(var i = 0; i < this.state.amigosIniciaisBack.length; i++){
      if(this.state.amigosIniciaisBack[i].id == chave){
        return this.state.amigosIniciaisBack[i].foto;
      }
    }
  }

  spliceSearch = (chave, array) => {
    //procura no array o objeto que tem a chave correspondente
    if(array == 0){ //se o array pra remover for o de baixo
      for(var i = 0; i < this.amigosIniciais.length; i++){
        if(chave == this.amigosIniciais[i].key){
          this.amigosIniciais.splice(i, 1);
        }
      }
    } else if (array == 1){ //se o array de remover for o de cima
      for(var i = 0; i < this.renderArray.length; i++){
        if(chave == this.renderArray[i].key){
          this.renderArray.splice(i, 1);
        }
      }
    }
  }

  render() {
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
                this.renderArray
              }
              </View>
            </ScrollView>
          </View>
          
          <View style={styles.ballContainer}>
            <View style={styles.row}>
              {
                this.amigosIniciais
              }
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
  },
  debugText: {
    textAlign: "center",
    color: "#FFF",
    marginTop: 10
  }
});