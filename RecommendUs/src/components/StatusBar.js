import React from 'react'

import {
    View,
    StyleSheet,
} from 'react-native'

import {
    Constants,
} from 'expo'

export default class BarStatus extends React.Component {
    
    render() {
        return (
            <View style={styles.statusBar} />
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "#900000",
        height: Constants.statusBarHeight,
    },
})