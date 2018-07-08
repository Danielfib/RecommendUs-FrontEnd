import React from "react";
import axios from "axios";
import StartRating from "react-native-star-rating";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";

import em from "../../../properties/responsive";
import Ionicons from "react-native-vector-icons/Ionicons";
import Btn from "react-native-micro-animated-button";
import SlidingUpPanel from 'rn-sliding-up-panel'

export default class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        pressedVote: false,
        discount: true,
        visible: true,
        allowDragging: true,  
    }
  }

  renderTags() { 
    strTags = this.props.navigation.state.params.expertise;
    tags = strTags.split(' ')

    let jsxTags = tags.map(tagName => {
      if(tagName.length >= 2) {
        
        return (
          <View style={[style.tagStyle, tags[0] == tagName ? { marginLeft: em(5) } : {}]} key={tagName}>
            <Text style={style.tagNameStyle}>
              {tagName.charAt(0).toUpperCase() + tagName.slice(1)}
            </Text>
          </View>
        );
      }
    });

    return jsxTags;
  }

  convertTo$(price) {
    if(price >= 50 && price <= 100){
        return '$$$'
    } else if(price < 50 && price >= 20){
        return '$$'
    } else if (price < 20){ 
        return '$'
    } else {
        return '$$$$'
    }
  }

  render() {
    const discountIcon = !!this.props.navigation.state.params.parceiro ? require("../../../assets/Discont.png"): {};

    return (
      <View style={style.container}>
        <Image
          source={require("../../../assets/rest-generic.png")} //FALTA DAR GET NA IMAGEM
          style={style.backgroundImage}
        />
        <SlidingUpPanel 
          //onDragEnd={()=>{this.setState({allowDragging:false})}} 
          allowDragging={this.state.allowDragging} 
          allowMomentum={false} 
          showBackdrop={false} 
          visible={this.state.visible} 
          draggableRange={{top:em(400), bottom:em(360)}} height= {em(400)}
          /*ref={this.child}*/>
          <View style={style.detailsView}>
            <TouchableOpacity //onPressIn={()=>{this.setState({allowDragging:true})}} 
            activeOpacity={1}>
              
              <Text style={style.restaurantName}>{this.props.navigation.state.params.name}</Text>
              <View style={style.subcontainer}>
                <View style={style.discontAndStars}>
                  <View style={style.starContainer}>
                    <StartRating
                      disabled={true}
                      maxStars={5}
                      rating={this.props.navigation.state.params.rating}
                      starSize={em(4)}
                      iconSet={"Ionicons"}
                      emptyStar={"ios-star-outline"}
                      halfStar={"ios-star-half"}
                      fullStar={"ios-star"}
                    />
                  </View>
                  <Image source={discountIcon} style={style.discontStyle} />
                </View>
                <Btn
                  onPress={() => {
                    this.state.pressedVote = true;
                    //console.warn(this.state.pressed)
                    return this.btn.success();
                  }}
                  onSecondaryPress={() => {
                    this.state.pressedVote = false;
                    //console.warn(this.state.pressed)
                    return this.btn.reset();
                  }}
                  ref={ref => (this.btn = ref)}
                  successIcon="check"
                  backgroundColor="#27AE60"
                  noBorder={true}
                  maxWidth={em(20)}
                  renderLabel={<Text style={style.labelButton}>Votar</Text>}
                  successForegroundColor="#FFF"
                />
              </View>
            </TouchableOpacity>
            <ScrollView>
              <View style={style.ScrollViewStyleTags}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {this.renderTags()}
                </ScrollView>
              </View>
              <View style={style.infoContainer}>
                <Text style={style.textTitleInfo}>Informações</Text>
                <View style={style.infoStyle}>
                  <Text style={style.priceStyle}>{this.convertTo$(this.props.navigation.state.params.price_avg)}</Text>
                    <ScrollView>
                      <Text style={style.descriptionStyle}>
                        {this.props.navigation.state.params.description}
                      </Text>
                    </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: em(100),
    height: "100%"
  },
  backgroundImage: {
    width: em(100),
    height: "70%",
    marginTop: em(5),
    resizeMode: "cover"
  },
  detailsView: {
    backgroundColor: "#FFF",
    width: em(100),
    //height: "25%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: em(12),
    borderTopRightRadius: em(12)
  },
  restaurantName: {
    fontSize: em(8),
    fontWeight: "bold",
    marginTop: em(3),
    marginLeft: em(4)
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: em(-4.5),
    width: em(95)
  },
  discontAndStars: {
    flexDirection: "row",
    alignItems: "center"
  },
  starContainer: {
    width: em(20),
    marginLeft: em(4)
  },
  discontStyle: {
    width: em(6.5),
    height: em(6.5),
    marginLeft: em(2.5)
  },
  labelButton: {
    fontSize: em(3.5),
    color: "#FFF",
    fontWeight: "bold"
  },
  tagStyle: {
    borderRadius: em(10),
    borderWidth: em(0.35),
    width: em(18),
    height: em(8),
    marginLeft: em(3),
    borderColor: "#A30000",
    alignItems: "center",
    justifyContent: "center",
  },
  tagNameStyle: {
    fontWeight: "bold",
    fontSize: em(3),
    padding: em(0.5),
    color: "#A30000"
  },
  ScrollViewStyleTags: {
    marginTop: em(4)
  },
  infoContainer: {
    marginTop: em(1.5),
    marginLeft: em(4),
    marginRight: em(4)
    //backgroundColor: 'green',
  },
  textTitleInfo: {
    fontSize: em(3.5),
    fontWeight: "600",
    marginBottom: em(1.5),
    marginTop: em(1.5)
  },
  textTitlePlates: {
    fontSize: em(3.5),
    fontWeight: "600",
    marginTop: em(1.5),
    marginLeft: em(4)
  },
  priceStyle: {
    marginBottom: em(1.5)
  },
  timeStyle: {
    marginBottom: em(1.5)
  },
  shapePlate: {
    backgroundColor: "gray",
    width: em(15),
    height: em(15),
    borderRadius: em(20),
    margin: em(3)
  },
  infoStyle: {
    marginBottom: em(10)
  }
});