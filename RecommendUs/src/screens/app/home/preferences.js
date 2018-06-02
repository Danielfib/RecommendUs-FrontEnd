import React from 'react';
import  {  View, Text, StyleSheet } from 'react-native';

import Calendar from '../../../components/calendar'
import MultisliderButton from '../../../components/multislider'
import PickerButton from '../../../components/pickerButton'
import NextButton from '../../../components/NextButton'

export default class Preferences extends React.Component { 
    render() {
      return (
        <View style = {style.mainContainer}>
          <View style = {style.container}>
          
          </View>
          <View style = {[style.container, {height:'20%'}]}>
            <Text style = {style.textTitle}>Quanto você quer pagar?</Text>
            <View style = {[style.containerSlider, style.container]}>  
            <MultisliderButton/>
            </View>
          </View>
          <View style = {style.container}>
            <Text style = {style.textTitle}>Quando vai ser?</Text>
            <Calendar/>
          </View>

          <View style = {style.container}>
            <Text style = {style.textTitle}>Onde vai ser?</Text>
            <PickerButton/>
            <View style = {style.buttomArrowRight}>
              <NextButton/>
            </View>
          </View>
        </View>
      );
    }
}

const style = StyleSheet.create({
  mainContainer: {
    height: '100%', 
    backgroundColor:'#F5F5F5', 
  },
  container: {
    height: '25%',
  },
  textTitle: {
    fontSize: 28,
    color: '#000',
    marginLeft: '8%',
    fontFamily: 'Roboto',
    fontWeight: '400' 
  },
  buttomArrowRight: {
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: '6%',
    paddingBottom: '3%'
  }, 
  containerSlider: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
  },
})


