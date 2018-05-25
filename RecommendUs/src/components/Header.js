import React from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import {
    Constants,
} from 'expo'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Header extends React.Component {
    
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.arrowBox}>
                   <Ionicons name={'md-arrow-back'} size={30} color={'#FFFFFF'}/>
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
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#A30000',
    },
    arrowBox: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
})