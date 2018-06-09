import React from 'react';
import  { View, 
          Text, 
          StyleSheet, 
          ScrollView,
        } from 'react-native';

export default class Calendar extends React.Component {
    renderCalendar() {
        let date = new Date()
        let daysPerMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        let currentDay = date.getUTCDate()
        let dayOfWeek = date.getDay()
    
        let allDays = new Array()
        let days = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'];
    
        for(i = currentDay; i <= daysPerMonth; i++) {
            allDays.push([days[(dayOfWeek)%7], i])
            dayOfWeek++
        }
    
        const dayStructure = allDays.map(day => {
          let today = (day[1] == currentDay)
          
          return (
            <View key={day[1]} style = {[style.calendarShapeView, (today)?style.borderColor:{}]}>
              <View style={style.calendarDay}>
                <Text style={[style.textCalendarName, today?style.textRedColor:{}]}>{day[0]}</Text>
              </View>
              <View style={[style.calendarMiddleLine, today?style.backgroundLineColor:{}]}></View>
              <View style={style.calendarNumber}>
                <Text style={[style.textCalendarNumber, today?style.textRedColor:{}]}>{day[1]}</Text>
              </View>
            </View>
          )
        })
  
        return dayStructure     
    }

    render() {
      return(
        <View style = {style.container}>
            <View style = {style.containerScroll}>
              <ScrollView contentContainerStyle={style.scrollView} horizontal>
                {this.renderCalendar()}
              </ScrollView>
            </View>
        </View>
      )}
}

const style = StyleSheet.create({
  scrollView: {
    paddingVertical: 25,
  },
  containerScroll: {
    marginLeft: '10%',
  },
  calendarShapeView: {
    width: 88,
    height: 99,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    marginRight: 8,
    marginBottom: 8, 
    paddingTop:4,
    paddingBottom:4,
    elevation: 8,
    flex: 1,
  },
  textCalendarName: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textCalendarNumber: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    //fontWeight: '100'
  },
  calendarMiddleLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
  calendarNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDay: {
    height: '30%'
  },
  borderColor: {
    borderColor: '#A30000'
  },
  textRedColor: {
    color: '#A30000'
  },
  backgroundLineColor: {
    backgroundColor: '#A30000'
  },
})


