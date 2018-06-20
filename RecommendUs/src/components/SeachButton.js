import React from 'react'

import {
    View,
    Image,
    StyleSheet,
} from 'react-native'

import em from '../properties/responsive'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class SearchButton extends React.Component {
    
    render() {

        const confirmed = this.props.confirmed
        const image = this.props.image

        return (
            <View style={styles.button}>
                <Ionicons
                    style={styles.icon}
                    name={'ios-search'}
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
        backgroundColor: '#C4C4C4',
        alignSelf: 'flex-end',
        margin: em (4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {},
})