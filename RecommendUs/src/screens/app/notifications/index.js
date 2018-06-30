import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native'

import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'
import NotificationCard from '../../../components/NotificationCard'

import em from '../../../properties/responsive'

import * as requests from '../../../actions/requests'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Notifications extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialIcons name={'notifications'} size={30} color={tintColor} />;
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            notifications: [],
        }
    }
    
    renderCardsNotification() {

        let months = {
            '01': 'JAN',
            '02': 'FEB',
            '03': 'MAR',
            '04': 'APR',
            '05': 'MAY',
            '06': 'JUN',
            '07': 'JUL',
            '08': 'AUG',
            '09': 'SEP',
            '10': 'OCT',
            '11': 'NOV',
            '12': 'DEC'
        };

        let cards = this.state.notifications.map((notification, index) => {
            
            let DAY = notification.groupdate.substring(8, 10);
            let month = months[notification.groupdate.substring(5, 7)];

            let friends = [
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: true,
                },
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: true,
                },
                {
                    image: 'https://memegenerator.net/img/images/17056620.jpg',
                    confirmed: false,
                },
            ]

            return (
                <NotificationCard
                    key = {index}
                    group = {notification}
                    day = {DAY}
                    date = {month}
                    navigation = {this.props.screenProps}
                    friends = {friends}
                />
            )
        })
        return cards
    }

    componentDidMount() {
        axios.get(`${requests.getUrl()}/groups/invites`)
        .then(res => {
            this.setState({
                notifications: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    render() {
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <View style={styles.viewTitle}>
                            <Text style={styles.title}>
                                {"Ei! Olha quem te chamou:"}
                            </Text>
                        </View>
                        {this.renderCardsNotification()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        marginTop: em (4),
        marginBottom: em (5),
    },
    viewTitle: {
        marginLeft: em (3),
    },
    title: {},
    choices: {
        flex: 1,
        marginLeft: em (4.5),
    },
    choice: {
        marginVertical: em (4),
    },
    restaurantView: {
        flexDirection: 'row',
    },
    foodView: {
        flex: 2,
        width: em (91),
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