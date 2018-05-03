import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet, PanResponder, Animated, Dimensions
} from 'react-native';

//import Viewport from '../components/Viewport'
//React.AppRegistry.registerComponent('DragAndDrop', () => Viewport);

//tela de criar grupo
export default class CreateGroup extends Component {
  constructor(props){
    super(props);

    this.state = {
      //this component will take care of interpolating X and Y
      //these values will be set to the style of the element to animate.
      pan: new Animated.ValueXY()
    };

    //responsible for the dragging
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder  : () => true,
      onPanResponderMove            : Animated.event([null,{
        //drag coordinates when moving
        dx  : this.state.pan.x,
        dy  : this.state.pan.y
      }]),
      
      //when released, return circle to a fixed position
      onPanResponderRelease       : (e, gesture) => {
        Animated.spring(
          this.state.pan,
          {toValue:{x:0,y:0}, //comes back to center
          friction: 6,        //default is 7
          tension: 50}       //default is 40
        ).start();
      }
    });
  }

  render(){
    return(
        <View style = {styles.mainContainer}>
            <View style = {styles.dropZone}>
                <Text style = {styles.text}>Drop me here!</Text>
            </View>

            {this.renderDraggable()}
        </View>
    );
  }

  renderDraggable(){
    return(
        <View style = {styles.draggableContainer}>
            <Animated.View
              {...this.panResponder.panHandlers}    //assigns the handlers to the Animated.View
              style = {[this.state.pan.getLayout(), styles.circle]}>
              <Text style = {styles.text}>Drag me!</Text>
            </Animated.View>
        </View>
    );
  }
}

//style:
let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});