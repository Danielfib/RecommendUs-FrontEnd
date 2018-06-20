import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Draggable from "../../../components/Draggable.js";
import BarStatus from "../../../components/StatusBar.js";
import Header from '../../../components/Header.js';
import NextButton from '../../../components/NextButton.js';
import SearchButton from '../../../components/SeachButton.js';

import em from '../../../properties/responsive';

export default class CreateGroup extends Component {
  constructor(){
    super();
    this.state = { arrayAmigosDz: []}
    this.index = 0;
  }
  
  //so that tab navigator doesnt appear
  static navigationOptions = {
    header: null,  
    tabBarVisible: false,
    swipeEnabled: false,
  }

  addMore = () => {
    console.log("opa");
    //let newlyAddedValue = { index: this.index }
    //this.setState({arrayAmigosDz: [ ...this.state.arrayAmigosDz, newlyAddedValue]});
    //this.index = this.index + 1;
  }

  render() {
    let newArray = this.state.arrayAmigosDz.map((item, key) =>{
      return(
        <Text style={{size: 60}}>oi { item.index }</Text>
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
          <View style={styles.dropZone}>
            <Text style={styles.textDz}>Arraste seus amigos para cá para reunuir sua galera!</Text>
            <View>
            {
              newArray
            }
            </View>
          </View>

          <View style={styles.ballContainer} />
          <View style={styles.row}>
            <Draggable addMore={this.addMore}/>
            <Draggable addMore={this.addMore}/>
            <Draggable addMore={this.addMore}/>
            <Draggable addMore={this.addMore}/>
            <Draggable addMore={this.addMore}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 150,
    backgroundColor: "#A6A6A6"
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
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    color: "#ddd",
    fontSize: 23
  }
});