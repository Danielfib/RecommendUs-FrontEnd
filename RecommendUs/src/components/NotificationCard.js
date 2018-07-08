import React from 'react'
import axios from 'axios'

import {
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
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
            user: requests.getUser()
        }
    }

    accept(group) {

        let data = {
            userId: this.state.user.id,
            groupId: group.groupid
        }

        axios.put(`${requests.getUrl()}/api_acceptGroup`, data)
        .then(res => {
            console.log("Suc Accept: ", res)
            this.props.navigation.navigate('preferences', {amigosSaida: this.props.friends, groupId: group.groupid, skipCalendar: true})
        })
        .catch(err => {
            console.log("Err Accept: ", err)
        })
    }

    reject(groupid) {

        axios.delete(`${requests.getUrl()}/api_RejectGroup`, {
            data: {
                userId: this.state.user.id,
                groupId: groupid
            }
        })
        .then(res => {
            console.log("Suc Reject: ", res)
        })
        .catch(err => {
            console.log("Err Reject: ", err)
        })
    }
    
    render() {

        const day = this.props.day
        const date = this.props.date
        const friends = this.props.friends
        const group = this.props.group

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
                    <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                        {listPhotos.renderFriends(friends, 14)}
                    </ScrollView>
                </View>
                <TouchableOpacity
                    style={styles.notButton}
                    onPress={() => this.reject(group.groupid)}
                >
                    <Text style={styles.textButton}>
                        {"Hoje não"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.yeahButton}
                    onPress={() => this.accept(group)}
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
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: em (5),
        width: em (94),
        borderRadius: em (3),
        shadowOffset: {width:0, height:0},
        shadowColor: '#DDD',
        shadowOpacity: 0.8,
        elevation: 6,
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
        width: em (27),
        paddingTop: em (2),
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    scrollView: {
    },
    notButton: {
        backgroundColor: '#EB5757',
        marginLeft: em (2),
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