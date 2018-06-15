import React from 'react';
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
                  <MultisliderButton/>
                </View>
              </View>
              <View style = {style.container}>
                <Text style = {style.textTitle}>Quando vai ser?</Text>
                <Calendar/>
              </View>
              <View style = {[style.container, {marginBottom: em (28),}]}>
                <Text style = {style.textTitle}>De onde você vai sair?</Text>
                <View style = {style.pickerContainer}>
                  <PickerButton defaultOption='Estado' data = {["Pernambuco", 'Rondonia', 'Maranhão']}/>
                  <PickerButton defaultOption='Cidade' data = {["Recife", 'Jaboatão', 'Olinda']}/>
                  <PickerButton defaultOption='Bairro' data = {["Piedade", 'Candeias', 'Boa Viagem']}/>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
                style={style.nextButton}
                onPress={() => this.props.navigation.navigate('preferences2', {})}
              >
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
    marginLeft: em(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: em(2),
    marginRight: em(1),
  }
})


