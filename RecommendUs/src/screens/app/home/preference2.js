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
            friends: [],
            ambiente: [
            ],
            tags: [{
                    name: 'Açaí',
                    image: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000sOHSbMAO/5820cf6de4b0c8177ff320fc.jpg&w=620&h=400',
                },
                {
                    name: 'Contemporanea',
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
            ]
        }
    }

    componentDidMount() {
        axios.get(`${requests.getUrl()}/evento/1`)
        .then(res => {
          this.setState({
            friends: res.data.groupmembers,
          })
        })
        .catch(err => {
          console.warn(err)
        })
      }
    
    render() {
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
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
                        <View style={styles.friendsView}>
                            <View style={styles.friendsPhotos}>
                            </View>
                            <Text style={styles.friendsText}>
                                {"Esperando Confirmação"}
                            </Text>
                        </View>
                        <View style={styles.choices}>
                            <View style={styles.choice}>
                                <Text style={styles.title}>
                                    {"Qual é a ocasião?"}
                                </Text>
                                <ScrollView>
                                    <View style={styles.restaurantView}>
                                        <FlatList
                                            numColumns={3}
                                            data = {this.state.ambiente}
                                            keyExtractor = {(item, i) => item.id}
                                            renderItem = {
                                                ({item}) =>
                                                    <CardChoose 
                                                        name={item.name}
                                                        image={item.image}
                                                        size={21}
                                                    />
                                            }
                                        />
                                    </View>
                                </ScrollView>
                            </View>
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
                <TouchableOpacity style={styles.nextButton}>
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
        marginVertical: em (4),
    },
    restaurantView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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