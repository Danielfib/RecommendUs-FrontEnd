import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Draggable from "../../../components/Draggable.js";
import BarStatus from "../../../components/StatusBar.js";
import Header from '../../../components/Header.js';

import em from '../../../properties/responsive';

export default class CreateGroup extends Component {
  //so that tab navigator doesnt appear
  static navigationOptions = {
    header: null,  
    tabBarVisible: false,
    swipeEnabled: false,
  }

  render() {
    return (
      <View>
        <BarStatus/>

        <Header navigation={this.props.navigation}>
          <Text style={styles.titleHeader}>
              {"Crie seu Grupo!"}
          </Text>
        </Header>

        <View style={styles.mainContainer}>
          <View style={styles.dropZone}>
            <Text style={styles.text}>Drop your friends here!</Text>
          </View>
          <View style={styles.ballContainer} />
          <View style={styles.row}>
            <Draggable />
            <Draggable />
            <Draggable />
            <Draggable />
            <Draggable />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    height: 200,
    backgroundColor: "#A6A6A6"
  },
  titleHeader: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: em (7.6),
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});