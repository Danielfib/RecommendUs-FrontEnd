import React from 'react'

import {
    View,
    Image,
    StyleSheet,
} from 'react-native'

import em from '../properties/responsive'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NextButton extends React.Component {
    
    render() {

        const confirmed = this.props.confirmed
        const image = this.props.image

        return (
            <View style={styles.button}>
                <Ionicons
                    style={styles.icon}
                    name={'md-arrow-round-forward'}
                    size={35}
                    color={'#FFFFFF'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: em (20),
        height: em (20),
        borderRadius: em (10),
        backgroundColor: '#A30000',
        alignSelf: 'flex-end',
        margin: em (4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {},
})