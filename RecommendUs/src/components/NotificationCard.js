import React from 'react'

import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import ImageCircle from './ImageCircle'

import em from '../properties/responsive'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NotificationCard extends React.Component {
    
    render() {

        const day = this.props.day
        const date = this.props.date

        return (
            <View style={styles.shape}>
                <View style={styles.calendar}>
                    <View style={styles.day}>
                        <Text>
                            {"SEX"}
                        </Text>
                    </View>
                    <View style={styles.date}>
                        <Text>
                            {"18"}
                        </Text>
                    </View>
                </View>
                <View style={styles.friendsView}>
                    <ImageCircle confirmed={true} image={'https://memegenerator.net/img/images/17056620.jpg'} />
                </View>
                <TouchableOpacity style={styles.notButton}>
                    <Text>
                        {"Hoje nao"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.yeahButton}>
                    <Text>
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
        width: em (90),
        height: em (50),
        backgroundColor: 'gray',
        flexDirection: 'row',
    },
    calendar: {
        width: em (20),
        height: em (25),
        borderRadius: em (5),
        margin: em (3),
        backgroundColor: 'red',
    },
    day: {},
    date: {},
    friendsView: {
        marginLeft: em (5),
    },
    notButton: {
        marginLeft: em (8),
        backgroundColor: 'red'
    },
    yeahButton: {
        marginLeft: em (6),
        backgroundColor: 'green',
    },
})