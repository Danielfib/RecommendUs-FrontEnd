import React, { Component } from 'react';
import { Button, 
         View, 
         Text, 
         Animated, 
         StyleSheet, 
         PanResponder } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import CreateGroup from './screens/createGroup';

export default class daggable extends Component {
  constructor(){
    super();

    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  //called when react renders a component (before render method)
  componentWillMount(){
    //listener for the delta value change
    this._val = {x:0, y:0}
    this.state.pan.addListener((value) => this._val = value);

    //initialize panResponder with move handling
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: this.state.pan.x, dy: this.state.pan.y}
      ]),
      //animates the return when user releases the circle
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan, {
          toValue: {x:0, y:0},
          friction: 5
        }).start();
      }
      //adjusting delta value
      //this.state.pan.setValue({x:0, y:0})
    });
  }

  render(){
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={[panStyle, styles.circle]}
      >
        <Text style = {styles.dragabble_Text}>Oi!</Text>
      </Animated.View>
    );
  }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  dragabble_Text: {
    textAlign : 'center',
    marginTop : 25,
    color     : '#f;ff'
  }
});