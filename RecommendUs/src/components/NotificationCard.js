import React from 'react'

import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import ImageCircle from './ImageCircle'

import * as requests from '../actions/requests'
import * as listPhotos from './listPhotos'

import em from '../properties/responsive'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class NotificationCard extends React.Component {

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
        }
    }
    
    render() {

        const day = this.props.day
        const date = this.props.date
        const image = 'https://memegenerator.net/img/images/17056620.jpg'

        return (
            <View style={styles.shape}>
                <View style={styles.calendar}>
                    <View style={styles.data}>
                        <Text style={styles.text}>
                            {day}
                        </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.data}>
                        <Text style={styles.text}>
                            {date}
                        </Text>
                    </View>
                </View>
                <View style={styles.friendsView}>
                    {listPhotos.renderFriends(this.state.friends, 12)}
                </View>
                <TouchableOpacity style={styles.notButton}>
                    <Text style={styles.textButton}>
                        {"Hoje não"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.yeahButton}
                    onPress={() => this.props.navigation.navigate('preferences')}
                >
                    <Text style={[styles.textButton, {fontSize: em (6)}]}>
                        {"Bora!"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shape: {
        alignSelf: 'center',
        backgroundColor: '#E7E7E7',
        flexDirection: 'row',
        marginTop: em (5),
        width: em (90),
        borderRadius: em (3),
    },
    calendar: {
        width: em (16),
        height: em (23),
        borderRadius: em (4),
        marginVertical: em (4),
        marginLeft: em (2),
        backgroundColor: '#A30000',
    },
    text: {
        color: '#FFFFFF',
        fontSize: em (6),
    },
    data: {
        alignSelf: 'center',
        marginTop: em (2),
    },
    line: {
        backgroundColor: '#FFFFFF',
        width: em (20),
        height: em (0.3),
    },
    friendsView: {
        marginLeft: em (4),
        width: em (20),
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    notButton: {
        backgroundColor: '#EB5757',
        marginLeft: em (1),
        paddingHorizontal: em (2),
        height: em (11),
        borderRadius: em (2),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    yeahButton: {
        backgroundColor: '#27AE60',
        height: em (15),
        marginLeft: em (3),
        paddingHorizontal: em (4),
        borderRadius: em (2),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textButton: {
        fontSize: em (3.6),
        color: '#FFFFFF',
        fontWeight: '500',
        justifyContent: 'center',
        alignSelf: 'center',
    },
})