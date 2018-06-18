import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import em from '../properties/responsive'

export default class Calendar extends React.Component {
    
  constructor(props) {
      super(props)
      this.state = { pressed: false, day : -1}
    }

    onPress(selectedDay) {
      let condition = true 

      if(selectedDay == this.state.day) {
        condition = !this.state.pressed
      }
      
      this.setState({
        pressed: condition,
        day: selectedDay
      })

      //Return value to parent 
      if(condition) {
        this.props.callback(selectedDay)
      } else {
        this.props.callback(-1)
      }
    }

    renderCalendar() {
        let date = new Date()
        let daysPerMonth = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate()
        let currentDay = date.getUTCDate()
        let dayOfWeek = date.getDay()
    
        let allDays = new Array()
        let days = ['DOM','SEG','TER','QUA','QUI','SEX','SÁB'];
    
        for(i = currentDay; i <= daysPerMonth; i++) {
          allDays.push([days[(dayOfWeek)%7], i, false])
          dayOfWeek++
        }
    
        const dayStructure = allDays.map(day => {
          let today = (day[1] == currentDay)
          
          let pressed = (this.state.pressed && (this.state.day == day[1]))

          return (
            <TouchableOpacity key={day[1]} style = {[style.calendarShapeView, 
              (today)?[style.borderColor, {marginLeft:em(10)}]:{}, (pressed)?{backgroundColor:'#A30000', borderColor:'#A30000'}:{}]}
              onPress={()=>this.onPress(day[1])}
              >              
                <View style={[style.calendarDay]}>
                  <Text style={[style.textCalendarName, today?style.textRedColor:{}, (pressed)?{color:'#FFF'}:{}]}>{day[0]}</Text>
                </View>
                <View style={[style.calendarMiddleLine, today?style.backgroundLineColor:{}, (pressed)?{backgroundColor:'#FFF'}:{}]}></View>
                <View style={style.calendarNumber}>
                  <Text style={[style.textCalendarNumber, today?style.textRedColor:{}, (pressed)?{color:'#FFF'}:{}]}>{day[1]}</Text>
                </View>
            </TouchableOpacity>
          );
        })
  
        return dayStructure     
    }

    render() {
      return(
        <View style = {style.container}>
          <ScrollView contentContainerStyle={style.scrollView} horizontal showsHorizontalScrollIndicator={false}>
            {this.renderCalendar()}
          </ScrollView>
        </View>
      )}
}

const style = StyleSheet.create({
  scrollView: {
    paddingTop: em(3),
  },
  containerScroll: {
    marginLeft: em(6),
  },
  calendarShapeView: {
    width: em(18),
    height: em(21),
    backgroundColor: '#FFF',
    borderWidth: em(1/5),
    borderRadius: em(1.8),
    borderColor: '#000',
    marginRight: 8,
    marginBottom: 8, 
    paddingTop:4,
    paddingBottom:4,
    elevation: 4,
    flex: 1,
  },
  textCalendarName: {
    fontSize: em(3.5),
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textCalendarNumber: {
    fontSize: em(9),
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  calendarMiddleLine: {
    width: '100%',
    height: em(0.22),
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
  calendarSelected: {
    backgroundColor: '#A30000'
  },
})


