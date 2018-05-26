import React from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import {
    Constants,
} from 'expo'

import em from '../properties/responsive'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Header extends React.Component {
    
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.arrowBox}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name={'md-arrow-back'} size={30} color={'#FFFFFF'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: em (15),
        backgroundColor: '#A30000',
    },
    arrowBox: {
        alignSelf: 'center',
        marginLeft: em (3),
    },
    content: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})