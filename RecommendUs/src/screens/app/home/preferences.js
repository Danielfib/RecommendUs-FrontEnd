import React from 'react';
import  {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Calendar from '../../../components/calendar'
import MultisliderButton from '../../../components/multislider'
import PickerButton from '../../../components/pickerButton'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'

import em from '../../../properties/responsive'

export default class Preferences extends React.Component {

  static navigationOptions = {
    header: null,
    
    tabBarVisible: false,
    swipeEnabled: false,
  }

  constructor(props) {
    super(props)

    this.state = {}
  }

  static navigatinoOptions = {
      header: null,
      
      tabBarVisible: false,
      swipeEnabled: false,
  }

    render() {
      return (
        <View style = {style.mainContainer}>
          <BarStatus/>
          <Header navigation={this.props.navigation}>
              <Text style={style.titleHeader}>
                  {"Preferências"}
              </Text>
          </Header>
          <View style = {style.container}>
            <View style={style.friendsView}>
                <View style={style.friendsPhotos}></View>
                <Text style={style.friendsText}>
                    {"Esperando Confirmação"}
                </Text>
            </View>
            <View style = {[{marginTop: em (5)}]}>
              <Text style = {style.textTitle}>Quanto você quer pagar?</Text>
              <View style = {[style.containerSlider]}>  
                <MultisliderButton/>
              </View>
            </View>
            <View style = {style.container}>
              <Text style = {style.textTitle}>Quando vai ser?</Text>
              <Calendar/>
            </View>

            <View style = {[style.container, {marginTop: em (10)}]}>
              <Text style = {style.textTitle}>Onde vai ser?</Text>
              <PickerButton/>
              <TouchableOpacity
                style={style.nextButton}
                onPress={() => this.props.navigation.navigate('prefereces2')}
              >
                  <NextButton />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1, 
  },
  titleHeader: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: em (7.6),
  },
  container: {
    flex: 1,
  },
  friendsView: {
    alignItems: 'center',
    marginTop: em (3),
  },
  friendsPhotos: {
      flexDirection: 'row',
      marginBottom: em (3),
  },
  friendsText: {
      color: '#A30000',
      fontSize: em (4),
      fontWeight: '500',
  },
  textTitle: {
    fontSize: em(8),
    color: '#000000',
    marginLeft: em (8),
    fontFamily: 'Roboto',
    fontWeight: '500' 
  },
  containerSlider: {
    marginTop: em (10),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
  },
})


