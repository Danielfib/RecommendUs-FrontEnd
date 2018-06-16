import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

import em from '../../properties/responsive'

import BarStatus from '../../components/StatusBar'
import Header from '../../components/Header'
import MyTab from '../../navigation/tab-router'

export default class TabHome extends React.Component {
  
    render() {

        return (
            <View style={styles.container}>
                <BarStatus/>
                <View style = {styles.header}>
                    <View style = {styles.leftHeader}>
                        <Image style = {styles.logo} source = {require('../../assets/logo.png')} />
                        <Text style = {styles.name} >
                            {
                                "RecomendUs"
                            }
                        </Text>
                    </View>
                    <View style = {styles.rightHeader}>
                        <Image style = {styles.logo} source = {require('../../assets/bolinha.png')} />
                    </View>
                </View>
                <MyTab
                    screenProps = {{
                        navigate: this.props.navigation.navigate
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#A30000',
        alignItems: 'center',
        paddingRight: em (1.5),
        paddingBottom: em (4),
    },
    leftHeader: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: em (4),
        marginLeft: em (3),
    },
    rightHeader: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingTop: em (4),
        marginRight: em (2),
    },
    logo: {},
    name: {
        color: '#FFFFFF',
        fontSize: em (6),
        fontWeight: '500',
        marginLeft: em (3),
    },
})