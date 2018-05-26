import React from 'react'

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'
import CardChoose from '../../../components/CardChoose'
import ImageCircle from '../../../components/ImageCircle'

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
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        return (
            <View style={styles.container}>
                <BarStatus/>
                <Header>
                    <Text style={styles.titleHeader}>
                        {"Preferências"}
                    </Text>
                </Header>
                <ScrollView>
                    <View style={styles.subContainer}>
                        <View style={styles.friendsView}>
                            <View style={styles.friendsPhotos}></View>
                            <Text style={styles.friendsText}>
                                {"Esperando Confirmação"}
                            </Text>
                        </View>
                        <View style={styles.choices}>
                            <View style={styles.choice}>
                                <Text style={styles.title}>
                                    {"Qual é o clima?"}
                                </Text>
                                <ScrollView>
                                    <View style={styles.restaurantView}></View>
                                </ScrollView>
                            </View>
                            <View style={[styles.choice, {flex: 2,}]}>
                                <Text style={styles.title}>
                                    {"O que você quer comer?"}
                                </Text>
                                <View style={styles.foodView}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
})