import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import em from '../../properties/responsive'

import Root from '../../navigation/tab-router'
import BarStatus from '../../components/StatusBar'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class TabHeader extends React.Component {
    
    render() {

        return (
            <View>
                <BarStatus />
                <Root />
            </View>
        );
    }
}

const styles = StyleSheet.create({})