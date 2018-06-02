import React from 'react'

import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import {
    Constants,
} from 'expo'

import em from '../../../properties/responsive'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Notifications extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <MaterialIcons name={'notifications'} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.header}>
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
    content: {
        flex: 1,
        marginRight: em (9),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})