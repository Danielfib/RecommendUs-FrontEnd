import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'

import em from '../../../properties/responsive'

class Preference2 extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {}
    }

    static navigatinoOptions = {
        header: null
    }
    
    render() {
        return (
            <View style={styles.container}>
                <BarStatus/>
                <Header>
                    <Text style={styles.titleHeader}>
                        {"Preferências"}
                    </Text>
                </Header>
                <View style={styles.subContainer}>
                    <View style={styles.friendsView}>
                        <Text style={styles.friendsText}>
                            {"Esperando Confirmação"}
                        </Text>
                    </View>
                    <View style={styles.choices}>
                        <View style={styles.choice}>
                            <Text style={styles.title}>
                                {"Qual é o clima?"}
                            </Text>
                            <View style={styles.restaurantView}></View>
                        </View>
                        <View style={[styles.choice, {flex: 2,}]}>
                            <Text style={styles.title}>
                                {"O que você quer comer?"}
                            </Text>
                            <View style={styles.foodView}>
                                <CardChoose selected={false} image={'http://i.imgur.com/IGlBYaC.jpg'} name={'Amigos'}/>
                                <CardChoose selected={false} image={'http://i.imgur.com/IGlBYaC.jpg'} name={'Amigos'}/>
                                <CardChoose selected={false} image={'http://i.imgur.com/IGlBYaC.jpg'} name={'Amigos'}/>
                                <CardChoose selected={false} image={'http://i.imgur.com/IGlBYaC.jpg'} name={'Amigos'}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Preference2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 24,
    },
    subContainer: {
        flex: 1,
    },
    friendsView: {
        alignItems: 'center',
        marginVertical: 15,
    },
    friendsText: {
        color: '#A30000',
        fontSize: 12,
        fontWeight: '500',
    },
    choices: {
        flex: 1,
        marginLeft: em (4.5),
    },
    choice: {
        marginVertical: 20,
    },
    restaurantView: {},
    foodView: {
        flex: 2,
        width: em (91),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
})