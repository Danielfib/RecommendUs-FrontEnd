import React from 'react'

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

export default class Home extends React.Component {

    state = {
        meetings: [
            {
                id: '',
                restaurant: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png',
                month: 'MAR',
                day: '15',
            },{
                id: '',
                restaurant: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png',
                month: 'MAR',
                day: '15',
            },{
                id: '',
                restaurant: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png',
                month: 'MAR',
                day: '15',
            },{
                id: '',
                restaurant: 'https://pbs.twimg.com/profile_images/446735594077429760/SUUAPAsP_400x400.png',
                month: 'MAR',
                day: '15',
            },
        ],
    }
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <FontAwesome name={'home'} size={30} color={tintColor} />;
        }
    }

    renderMeetings() {
        let list = this.state.meetings.map((meeting) => {
            return (
                <View key={meeting.id} style={styles.card}>
                    <TouchableOpacity>
                        <Image style={styles.image} source={{uri: meeting.restaurant}}/>
                        <View style={styles.calendar}>
                            <View style={[styles.dateView, {marginTop: em (2),}]}>
                                <Text style={[styles.text, {fontSize: em (5),}]}>
                                    {
                                        meeting.month
                                    }
                                </Text>
                            </View>
                            <View style={styles.line}/>
                            <View style={styles.dateView}>
                                <Text style={[styles.text, {fontSize: em (13),}]}>
                                    {
                                        meeting.day
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

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity onPress={() => this.props.screenProps.navigate('preferences')}>
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