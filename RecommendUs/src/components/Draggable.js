import React, { Component } from "react";
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native";

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      isOnDz: this.props.isOnDz ? this.props.isOnDz : false,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1)
    };
  }

  componentWillMount() {
    this._val = { x:0, y:0 }
    this.state.pan.addListener((value) => this._val = value);

    if(!this.state.isOnDz){
      this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (e, gesture) => true,
          onPanResponderGrant: (e, gesture) => {
            this.state.pan.setOffset({
              x: this._val.x,
              y:this._val.y
            })
            this.state.pan.setValue({ x:0, y:0})
          },

          onPanResponderMove: Animated.event([ 
            null, { dx: this.state.pan.x, dy: this.state.pan.y }
          ]),
          onPanResponderRelease: (e, gesture) => {
            if (this.isDropArea(gesture)) {
              Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1000
              }).start(() =>
                this.setState({
                  showDraggable: false
                })
              );

              //trying to add to DZ
              this.props.addMore();
            } else {
              Animated.spring(
                this.state.pan,
                {toValue:{x:0, y:0}}
              ).start();
            } 
          }
      });
    } else {
      this.panResponder = PanResponder.create({
        //se clicar, volta para a parte inicial
      });
    }
  }

  isDropArea(gesture) {
    return gesture.moveY < 200;
  }

  render() {
    return (
      <View style={{ width: "20%", alignItems: "center" }}>
        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (this.state.showDraggable && !this.state.isOnDz) {
      console.log("1" + this.state.isOnDz);
      return (
        <View style={{ position: "absolute" }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    } else if (this.state.isOnDz){
      console.log("2" + this.state.isOnDz);
      return (
        <View style={{marginLeft: 15}}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, {opacity:this.state.opacity}]}
          />
        </View>
      );
    }
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "#A30000",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
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