import React from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

import {
    Constants,
} from 'expo'

export default class CardChoose extends React.Component {
    
    render() {

        const name = this.props.name
        const image = this.props.image

        return (
            <View style={styles.card}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: 'blue',
    },
})