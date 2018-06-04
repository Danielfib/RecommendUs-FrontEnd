import React from 'react';
import axios from 'axios'
import  {  View, Text, StyleSheet, TouchableOpacity, FlatList,} from 'react-native';

import Calendar from '../../../components/calendar'
import MultisliderButton from '../../../components/multislider'
import PickerButton from '../../../components/pickerButton'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'

import * as requests from '../../../actions/requests'
import * as listPhotos from '../../../components/listPhotos'

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
      friends: [
        {
          name: 'Daniel',
          image: 'https://memegenerator.net/img/images/17056620.jpg',
          confirmed: false,
        },
        {
          name: 'Guila',
          image: 'https://memegenerator.net/img/images/17056620.jpg',
          confirmed: true,
        }
      ],
    }
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
            {
              this.state.friends &&
                <View style={style.friendsView}>
                  <View style={style.friendsPhotos}>
                    {listPhotos.renderFriends(this.state.friends, 22)}
                  </View>
                  <Text style={style.friendsText}>
                      {"Esperando Confirmação"}
                  </Text>
                </View>
            }
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
                onPress={() => this.props.navigation.navigate('preferences2', {})}
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
})


