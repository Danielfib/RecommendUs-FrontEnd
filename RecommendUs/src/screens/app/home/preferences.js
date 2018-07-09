import React from 'react';
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image
} from 'react-native'

import Calendar from '../../../components/Calendar'
import MultisliderButton from '../../../components/MultiSlider'
import PickerButton from '../../../components/PickerButton'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'

import * as requests from '../../../actions/requests'
import * as listPhotos from '../../../components/listPhotos'

import * as Progress from 'react-native-progress'

import em from '../../../properties/responsive'

export default class Preferences extends React.Component {

  static navigationOptions = {
    header: null,
    
    tabBarVisible: false,
    swipeEnabled: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      friends: this.props.navigation.state.params.amigosSaida,

      pressed: false,           //  To know if the sugeridos is setted 
      multisliderValue: [15],   //  To capture the multislider return
      calendarValue: -1,        //  To capture the calendar return
      pickerValue: 'Seu Local'  //  To capture the picker value return
    }
  }

  pressedBestDaysButton(){
    this.setState({
      pressed: !(this.state.pressed)
    }) 
  }

  getMultisliderReponse(multisliderValue) {
    this.setState({multisliderValue})
  }

  getCalendarReponse(calendarValue) {
    this.setState({calendarValue})
  }

  getPickerButtonResponse(pickerValue) {
    this.setState({pickerValue})
  }

  componentDidMount() {
    // axios.get(`${requests.getUrl()}/juntagrupo/1&2&3`)
    // .then(res => {
    //   this.setState({
    //     friends: res.data.groupmembers,
    //   })
    // })
    // .catch(err => {
    //   console.warn(err)
    // })
    console.log(this.state.friends);
  }

  static navigatinoOptions = {
      header: null,
      
      tabBarVisible: false,
      swipeEnabled: false,
  }

  createGroup() {

    if(this.props.navigation.state.params.skipCalendar) {
      this.props.navigation.navigate('preferences2', {
        sugestions: this.state.pressed,
        price: this.state.multisliderValue[0],
        day: this.state.calendarValue,
        place: this.state.pickerValue,
        groupId: this.props.navigation.state.params.groupId,
        friends: this.state.friends
      })
    } else {
      let d = new Date()
      let date = this.state.pressed ? '' : new Date(d.getUTCFullYear(), d.getUTCMonth(), this.state.calendarValue)

      let members = this.state.friends.map((friend) => {
        return friend.id;
      });

      let data = {
          groupname: 'Copa do Mundo, é Hexa meu irmão!',
          groupdate: date,
          userId: requests.getUser().id,
          groupmembers: members,
      }

      axios.post(`${requests.getUrl()}/create-group`, data)
      .then(res => {
        console.warn("Suc create group: ", res)
        
        this.props.navigation.navigate('preferences2', {
          sugestions: this.state.pressed,
          price: this.state.multisliderValue[0],
          day: this.state.calendarValue,
          place: this.state.pickerValue,
          groupId: res.data.GroupID,
          friends: this.state.friends,
          lat: '-8.055668',
          lon: '-34.951578',
        })
      })
      .catch(err => {
          console.warn("Err create group: ", err)
      })
  }
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
          <ScrollView>
            {
              this.state.friends &&
                <View style={style.friendsView}>
                  {listPhotos.renderFriends(this.state.friends, 22)}
                  <Text style={style.friendsText}>
                      {"Esperando Confirmação"}
                  </Text>                 
                  <View style={{marginTop: em (5),}}>
                    <Progress.Bar
                      progress={0.3}
                      color={'#A30000'}
                      unfilledColor={'#CCCCCC'}
                      borderColor={'transparent'}
                      borderWidth={0}
                      width={em (94)}
                      height={em (0.5)}
                      borderRadius={0}
                    />
                  </View>
                </View>
            }
            <View style = {[{marginTop: em (4)}]}>
              <Text style = {style.textTitle}>Quanto você quer pagar?</Text>
              <View style = {[style.containerSlider]}>  
                <MultisliderButton value = {this.state.multisliderValue} callback={this.getMultisliderReponse.bind(this)}/>
                {console.warn(this.state.multisliderValue)}
              </View>
            </View>
            {
              !this.props.navigation.state.params.skipCalendar &&
                <View style = {style.container}>
                  <View style={style.titleAndButton}>
                    <Text style = {style.textTitle}>Quando vai ser?</Text>
                    <TouchableOpacity style={[style.buttonBestDays, (this.state.pressed)?{backgroundColor: '#A30000'}:{}]}
                      onPress={()=>this.pressedBestDaysButton()}  
                    >
                      <Text style={[style.textButton, (this.state.pressed)?{color: '#FFF'}:{}]}> Sugeridos </Text>
                    </TouchableOpacity>
                  </View>
                  <Calendar callback={this.getCalendarReponse.bind(this)}/>
                </View>
            }
            <View style = {[style.container, {marginBottom: em (28),}]}>
              <Text style = {style.textTitle}>Onde você vai estar?</Text>
              <View style = {style.pickerContainer}>
                <PickerButton gpsButton={true} dimensions = {{height: em(6.5), width: em(80)}} defaultOption={this.state.pickerValue} data = {["Recife", 'Olinda', 'Jaboatão']}
                  callback = {this.getPickerButtonResponse.bind(this)}
                />
                
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={style.nextButton}
            onPress={() => this.createGroup()}>
              <NextButton />
          </TouchableOpacity>
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
    marginLeft: em (6),
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
  pickerContainer: {
    marginLeft: em(0),
    flexDirection: 'row',
    marginTop: em(2),
    marginRight: em(0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleAndButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: em(8),
    alignItems: 'center',
  },
  buttonBestDays: {
    width: em(22),
    height: em(6),
    borderColor: '#A30000',
    borderWidth: em(0.35),
    borderRadius: em(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: em(1)
  },
  textButton: {
    color: '#A30000',
    fontWeight: 'bold',
    fontSize: em(2.8)
  }
})


