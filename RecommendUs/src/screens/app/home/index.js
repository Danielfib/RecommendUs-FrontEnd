import React from 'react'
import axios from 'axios'
import cron from 'node-cron'

import {
    Permissions,
    Notifications,
} from 'expo'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from 'react-native'

import em from '../../../properties/responsive'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import * as requests from '../../../actions/requests'

async function register() {

    // Check for existing permissions...
    const { status } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
    );
    let finalStatus = status;

    // If no existing permission, ask user for permission...
    if (status !== 'granted') {
        const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
        );
        finalStatus = status;
    }
    
    // If no permission, exit the function...
    if(status !== 'granted') {
        alert("You need to enable permissions in settings.");
        return;
    }
    
    // Get push notification token...
    const userToken = await Notifications.getExpoPushTokenAsync();
    console.log(status, userToken)

    // Add token to Server
    axios.put(`${requests.getUrl()}/token`, {
        userId: requests.getUser().id,
        token: userToken,
    })
    .then(res => {
        console.log("Token suc: ", res)
    })
    .catch(err => {
        console.log("Token err: ", err)
    })
}

export default class Home extends React.Component {

    state = {
        meetings: [],
    }
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <FontAwesome name={'home'} size={30} color={tintColor} />;
        }
    }

    componentWillUnmount() {
        this._notificationSubscription
            && 
        //Notifications.removeListener(this.listener)
        this._notificationSubscription.remove()
    }

    listener = ({ origin, data }) => {
        console.log("cool data", origin, data)
        this.props.screenProps.navigate('restaurants', {restaurants: data.restaurants})
    }

    componentDidMount() {
        
        register();
        this._notificationSubscription = Notifications.addListener(this.listener)
        
        axios.get(`${requests.getUrl()}/eventoPessoa/2`)
        .then(res => {
            console.log(res.data)
            this.setState({
                meetings: res.data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    backgroundJob = cron.schedule('*/30 * * * * *', () => {
        axios.get(`${requests.getUrl()}/eventoPessoa/2`)
        .then(res => {
            //console.log(res.data)
            this.setState({
                meetings: res.data,
            })
        })
        .catch(err => {
            console.log(err)
        })
    });

    renderMeetings() {

        let image = 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png'
        
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

        let list = this.state.meetings.map((meeting, index) => {

            let month = months[meeting.groupdate.substring(5, 7)];
            let day = meeting.groupdate.substring(8, 10);

            return (
                <View key={index} style={styles.card}>
                    <TouchableOpacity>
                        <Image style={styles.image} source={{uri: image}}/>
                        <View style={styles.calendar}>
                            <View style={[styles.dateView, {marginTop: em (2),}]}>
                                <Text style={[styles.text, {fontSize: em (5),}]}>
                                    {
                                        month
                                    }
                                </Text>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.dateView}>
                                <Text style={[styles.text, {fontSize: em (13),}]}>
                                    {
                                        day
                                    }
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })

        return list
    }

    render() {

        this.backgroundJob.start();

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity onPress={() => this.props.screenProps.navigate('createGroup')}>
                                <Image source = {require('../../../assets/buttonGroup.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardsView}>
                            <Text style={styles.title}>
                                {
                                    "Suas próximas saídas:"
                                }
                            </Text>
                            <View style={styles.cards}>
                                {
                                    this.renderMeetings()
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    subContainer: {
        flex: 2,
    },
    buttonGroup: {
        marginTop: em (5),
        alignSelf: 'center',
    },
    cardsView: {
        marginTop: em (6),
        marginLeft: em (6),
    },
    title: {
        fontSize: em (5),
        fontWeight: '500',
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: em (2),
        marginLeft: em (3),
    },
    card: {
        marginBottom: em (5),
        marginRight: em (3),
    },
    image: {
        width: em (26),
        height: em (28),
        borderRadius: em (4.5),
    },
    calendar: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        width: em (26),
        height: em (28),
        borderRadius: em (4.5),
    },
    text: {
        color: '#FFFFFF',
    },
    dateView: {
        alignSelf: 'center',
    },
    line: {
        backgroundColor: '#FFFFFF',
        width: em (26),
        height: em (0.2),
    },
})