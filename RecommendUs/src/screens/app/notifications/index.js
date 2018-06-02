import React from 'react'

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'
import NextButton from '../../../components/NextButton'
import NotificationCard from '../../../components/NotificationCard'

import em from '../../../properties/responsive'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class Notifications extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialIcons name={'notifications'} size={30} color={tintColor} />;
        }
    }

    constructor(props) {
        super(props)

        this.state = {}
    }
    
    render() {
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        return (
            <View style={styles.container}>
                <BarStatus/>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <Text style={styles.title}>
                            {"Ei! Olha quem te chamou:"}
                        </Text>
                        <NotificationCard />
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
    },
    title: {
        color: '#000000',
        fontSize: em (7),
        fontWeight: '500',
    },
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