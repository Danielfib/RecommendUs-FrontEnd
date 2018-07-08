import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

import axios from 'axios'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'

import * as requests from '../../../actions/requests'
import * as listPhotos from '../../../components/listPhotos'

import * as Progress from 'react-native-progress'

import em from '../../../properties/responsive'

export default class ListRestaurant extends React.Component {

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
                    confirmed: true,
                },
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: false,
                },
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: true,
                },
            ],
            listResponse: this.props.navigation.state.params.restaurants
            /*[{    
                "_id": {
                    "$oid": "5b20853076b611082cafa922"
                },
                "name": "Apolo Beer Cafe",
                "category": "Bares",
                "expertise": "Cervejarias e choperias",
                "address/state": "PE",
                "address/street/0": "Rua do Apolo 164",
                "address/neighborhood": "Recife Antigo",
                "address/city": "Recife",
                "address/phone": "3088-8091",
                "price_avg": "94",
                "location/lat": "-8.061377",
                "location/lng": "-34.8744353",
                "rating": "4.01",
                "vote_count": "21"
            },{
                "_id": {
                    "$oid": "5b20853076b611082cafa922"
                },
                "name": "Apolo Beer Cafe",
                "category": "Bares",
                "expertise": "Cervejarias e choperias",
                "address/state": "PE",
                "address/street/0": "Rua do Apolo 164",
                "address/neighborhood": "Recife Antigo",
                "address/city": "Recife",
                "address/phone": "3088-8091",
                "price_avg": "94",
                "location/lat": "-8.061377",
                "location/lng": "-34.8744353",
                "rating": "4.01",
                "vote_count": "21"
            },{
                "_id": {
                    "$oid": "5b20853076b611082cafa922"
                },
                "name": "Apolo Beer Cafe",
                "category": "Bares",
                "expertise": "Cervejarias e choperias",
                "address/state": "PE",
                "address/street/0": "Rua do Apolo 164",
                "address/neighborhood": "Recife Antigo",
                "address/city": "Recife",
                "address/phone": "3088-8091",
                "price_avg": "94",
                "location/lat": "-8.061377",
                "location/lng": "-34.8744353",
                "rating": "4.01",
                "vote_count": "21"
            }]*/
        }
    }

    vote(restaurante) {
        console.warn(restaurante)
    }

    /* Checar o dados do json */
    renderRestaurantList() {

        let url_image = 'https://radiant-depths-66237.herokuapp.com/uploads/usuarios/mufasa.png'

        let listRestaurant = this.state.listResponse.map((restaurant) => {
            if(/*!restaurant.parther*/true)
                return (
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate('details', restaurant)}}
                    >
                        <View key={restaurant._id} style={styles.restaurantView}> 
                            <View style={styles.textContainer}>
                                <Text style={styles.textList}>{restaurant.name}</Text>
                                <Text style={styles.subtextList}>{restaurant.expertise}</Text>
                                <TouchableOpacity onPress={() => this.vote(restaurant)}>
                                    <Text style = {styles.votar}>Votar</Text>
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.image} source={{uri: url_image}}/>
                            <View style = {styles.imageView}></View>
                        </View>
                    </TouchableOpacity>
                )
                /*
            else
                return (
                    <View key={restaurant._id} style={[styles.restaurantView, {flexDirection: 'column', height: em (38)}]}> 
                        <View style={{flexDirection: 'column',}}>
                            <View style={{padding: em (3), height: em (25), backgroundColor: '#A30000'}}>
                                <Text style={[styles.textList, {color: '#FFFFFF'}]}>{restaurant.name}</Text>
                                <Text style={styles.subtextList}>{restaurant.expertise}</Text>
                                <Text style={styles.subtextList}>
                                    {
                                        `${restaurant["address/street/0"]}, ${restaurant["address/neighborhood"]}, ${restaurant["address/city"]}`
                                    }
                                </Text>
                            </View>
                            <Image style={[styles.image, {height: em (25),}]} source={{uri: url_image}}/>
                            <View style = {[styles.imageView, {height: em (25),}]}></View>
                        </View>
                        <View style={{flex: 1,}}>
                            <TouchableOpacity onPress={() => this.vote(restaurant)} style={styles.partherButton}>
                                <Text style={styles.partherButtonText}>
                                    Votar
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.viewDiscount}>
                                <Text style={styles.valueDiscount}>
                                    {"20"}
                                </Text>
                                <Image style={styles.imagePercent} source={require('../../../assets/Discont.png')} />
                                <Text style={styles.daysDicount} >
                                    {"QUA~SEX"}
                                </Text>
                            </View>
                        </View>
                    </View>
                )*/
        })

        return listRestaurant
    }
    
    render() {
        return(
            <View style={styles.container}>
                <BarStatus/>
                <Header navigation={this.props.navigation}>
                    <Text style={styles.titleHeader}>
                        {"Restaurantes"}
                    </Text>
                </Header>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <View style={styles.friendsView}>
                            {listPhotos.renderFriends(this.state.friends, 22)}
                            <Text style={styles.friendsText}>
                                {"Esperando Confirmação"}
                            </Text>
                            <View style={{marginTop: em (5),}}>
                                <Progress.Bar
                                progress={0.9}
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
                        <View style={styles.listRestaurantView}>
                            {this.renderRestaurantList()}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5'
    },
    titleHeader: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: em (7.6),
    },
    subContainer: {
        flex: 1,
        marginBottom: em (5),
    },
    friendsView: {
        alignItems: 'center',
        marginTop: em (3),
    },
    friendsText: {
        color: '#A30000',
        fontSize: em (4),
        fontWeight: '500',
    },
    listRestaurantView: {
        flex: 1,
        alignItems: 'center',
        marginTop: em (3),
        paddingVertical: em (2),
        backgroundColor: '#F5F5F5',
    },
    restaurantView: {
        justifyContent: 'center',
        width: em (95),
        height: em (28),
        backgroundColor: '#FFFFFF',
        marginVertical: em(2),
        shadowOffset: {width:0, height:0},
        shadowColor: '#DDD',
        shadowOpacity: 1.0,
        elevation: 8,
        flexDirection: 'row',
    },
    textList: {
        width: em (70),
        fontSize: em(5),
        fontWeight: 'bold'
    },
    subtextList: {
        width: em (65),
        fontSize: em(3),
        color: '#A6A6A6',
        fontWeight: 'bold'
    },
    votar: {
        color: '#6FCF97',
        fontWeight: 'bold',
        marginLeft: em (2),
        marginTop: em(5),
    },
    partherButton: {
        flex: 1,
        backgroundColor: '#27AE60',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: em (2),
        marginLeft: em (10),
        width: em (20),
        paddingVertical: em (2),
        borderRadius: em (5),
    },
    partherButtonText: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontSize: em (5),
        fontWeight: '500',
    },
    viewDiscount: {
        flexDirection: 'row',
        position: 'absolute',
        right: em (5),
        top: em (1),
    },
    valueDiscount: {
        color: '#A30000',
        fontSize: em (7),
        fontStyle: 'italic',
    },
    imagePercent: {
        width: em (6.5),
        height: em (6.5),
        marginLeft: em (1),
        marginTop: em (2),
    },
    daysDicount: {
        color: '#8B8A8A',
        fontWeight: '500',
        fontSize: em (4),
        marginLeft: em (2),
        marginTop: em (2),
    },
    textContainer: {
        position: 'absolute',
        left: em (4),
        top: em (3),
    },
    imageView: {
        position: 'absolute',
        width: em (23),
        height: em (28),
        right: 0,
        backgroundColor: 'rgba(44, 35, 35, .5)',
    },
    image: {
        position: 'absolute',
        width: em (23),
        height: em (28),
        right: 0,
    },
})