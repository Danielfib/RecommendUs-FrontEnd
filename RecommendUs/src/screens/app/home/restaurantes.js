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

import em from '../../../properties/responsive'

export default class ListRestaurant extends React.Component {

    /* Checar o dados do json */
    renderRestaurantList() {
        let listResponse = [
            {
                nome: 'Pizzaria Atlântico',
                expertise: 'Churrascaria, Pizzaria, Regional',
                url_image: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png'
            },
            {
                nome: 'Brazzetus',
                expertise: 'Pizzaria, Regional, Sushi',
                url_image: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png'
            },
        ]

        // axios.get('url')
        // .then((response)=>{
        //     listResponse = response //nome expertise url_image
        // })

        //let objectRest = [{r:'Restaurante1', t:'tags', img: 'url'}, {r:'Restaurante2', t:'tags', img: 'url'}, {r:'Restaurante3', t:'tags', img: 'url'}, {r:'Restaurante4', t:'tags', img: 'url'}]   
        let listRestaurant = listResponse.map((restaurantes) => {
            return(
                <View key={restaurantes.nome} style={styles.restaurantView}> 
                    <View style={styles.textContainer}>
                        <Text style={styles.textList}>{restaurantes.nome}</Text>
                        <Text style={styles.subtextList}>{restaurantes.expertise}</Text>
                        <TouchableOpacity>
                            <Text style = {styles.votar}>Votar</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={styles.image} source={{uri: restaurantes.url_image}}/>
                    <View style = {styles.imageView}></View>
                </View>
            )
        })

        return listRestaurant
    }
    
    render() {
        return(
            <View style={styles.container}>
                <BarStatus/>
                <Header>
                    <Text style={styles.titleHeader}>
                        {"Restaurantes"}
                    </Text>
                </Header>
                <View style={styles.subContainer}>
                    <View style={styles.friendsView}>
                        <View style={styles.friendsPhotos}></View>
                        <Text style={styles.friendsText}>
                            {"Esperando Confirmação"}
                        </Text>
                    </View>
                    <View style={styles.listRestaurantView}>
                        <ScrollView>
                            {this.renderRestaurantList()}                                      
                        </ScrollView>
                    </View>
                </View>   
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
    listRestaurantView: {
        flex: 1,
        alignItems: 'center',
        marginTop: em (3),
        backgroundColor: '#F5F5F5',
    },
    restaurantView: {
        justifyContent: 'center',
        width: em (95),
        height: em (28),
        backgroundColor: '#FFFFFF',
        marginTop: em(4),
        shadowOffset: {width:0, height:0},
        shadowColor: '#DDD',
        shadowOpacity: 1.0,
        elevation: 8,
        flexDirection: 'row',
    },
    textList: {
        fontFamily: 'Roboto',
        fontSize: em(6),
        fontWeight: 'bold'
    },
    subtextList: {
        fontFamily: 'Roboto',
        fontSize: em(3),
        color: '#A6A6A6',
        fontWeight: 'bold'
    },
    votar: {
        color: '#6FCF97',
        fontWeight: 'bold',
        marginLeft: em (2),
        marginTop: em(5)
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