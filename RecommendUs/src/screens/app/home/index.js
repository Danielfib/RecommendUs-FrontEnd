import React from 'react'

import {
    View,
    Text,
    Image,
    TouchableOpacity,
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
            }
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
                            <View>
                                <Text style={[styles.text, {fontSize: em (5),}]}>
                                    {
                                        meeting.month
                                    }
                                </Text>
                            </View>
                            <View style={styles.line}/>
                            <View>
                                <Text style={[styles.text, {fontSize: em (15),}]}>
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
                <View style={styles.subContainer}>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity onPress={() => this.props.screenProps.navigate('preferences')}>
                            <Image source = {require('../../../assets/buttonGroup.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    subContainer: {},
    buttonGroup: {},
    cards: {},
    card: {},
    image: {
        width: em (26),
        height: em (28),
        borderRadius: em (4.5),
    },
    calendar: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        width: em (26),
        height: em (28),
        borderRadius: em (4.5),
    },
    text: {
        color: '#FFFFFF',
    },
    line: {
        backgroundColor: '#FFFFFF',
        width: em (26),
        height: em (0.2),
    },
})