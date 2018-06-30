import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'

import * as requests from '../../../actions/requests'
import * as listPhotos from '../../../components/listPhotos'

import * as Progress from 'react-native-progress'

import em from '../../../properties/responsive'

class Preference2 extends React.Component {
    
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
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: false,
                },
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: true,
                }
            ],
            tags: [{
                    name: 'Açaí',
                    image: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sOHSbMAO/5820cf6de4b0c8177ff320fc.jpg&w=620&h=400',
                },
                {
                    name: 'Contemporânea',
                    image: 'http://saopauloparainiciantes.com.br/wp-content/uploads/images//DSC03161-575x431.jpg',
                },
                {
                    name: 'Brasileira',
                    image: 'http://159.203.100.140/wp-content/uploads/2017/05/image7-1024x682.jpg',
                },
                {
                    name: 'Café',
                    image: 'https://images.pexels.com/photos/296888/pexels-photo-296888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
            ],
            choices: [],
        }
    }

    sendInfo() {
        //this.props.navigation.navigate('restaurants'/*, {restaurants: res.data}*/)
        //this.props.navigation.state.params.place

        let data = {
            users: [
                {
                    lat: '-8.055668',
                    lon: '-34.951578',
                    tags: this.state.choices,
                    price: this.props.navigation.state.params.price,
                },
            ],
            groupId: '1',
        }

        axios.post(`${requests.getUrl()}/preferencia`, data)
        .then(res => {
            console.log(res.data)
            this.props.navigation.navigate('restaurants', {restaurants: res.data})
        })
        .catch(err => {
            console.warn(err)
        })
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

      selectOption = (name) => {
        let idx = this.state.choices.indexOf(name)
        if(idx > -1)
            this.state.choices.splice(idx, 1)
        else
            this.state.choices.push(name)
      }
    
    render() {
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        
        let confirmed = false
        
        return (
            <View style={styles.container}>
                <BarStatus/>
                <Header navigation={this.props.navigation}>
                    <Text style={styles.titleHeader}>
                        {"Preferências"}
                    </Text>
                </Header>
                <ScrollView>
                    <View style={styles.subContainer}>
                        {
                            this.state.friends &&
                                <View style={styles.friendsView}>
                                    {listPhotos.renderFriends(this.state.friends, 22)}
                                    <Text style={styles.friendsText}>
                                        {"Esperando Confirmação"}
                                    </Text>
                                    <View style={{marginTop: em (5),}}>
                                        <Progress.Bar
                                        progress={0.6}
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
                        <View style={styles.choices}>
                            <View style={[styles.choice, {flex: 2,}]}>
                                <Text style={styles.title}>
                                    {"O que você quer comer?"}
                                </Text>
                                <View style={styles.foodView}>
                                    <FlatList
                                        numColumns={3}
                                        data = {this.state.tags}
                                        keyExtractor = {(item, i) => item.id}
                                        renderItem = {
                                            ({item}) =>
                                                <CardChoose
                                                    function={this.selectOption}
                                                    name={item.name}
                                                    image={item.image}
                                                    size={30}
                                                />
                                        }
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.nextButton} onPress={() => this.sendInfo()}>
                    <NextButton />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Preference2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: em (7.6),
    },
    subContainer: {
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
    choices: {
        flex: 1,
        marginLeft: em (3.5),
    },
    choice: {
        marginTop: em (4),
        marginBottom: em (26),
    },
    restaurantView: {
        flexDirection: 'row',
    },
    foodView: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: em (7.6),
        fontWeight: '500',
    },
    nextButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
})