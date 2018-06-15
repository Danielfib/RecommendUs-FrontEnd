import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import em from '../../properties/responsive'

import BarStatus from '../../components/StatusBar'
import Root from '../../navigation/tab-router'

export default class TabHeader extends React.Component {
    
    render() {

        return (
            <View style={styles.container}>
                <BarStatus />
                <Root />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})