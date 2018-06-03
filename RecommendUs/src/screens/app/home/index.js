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

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Home extends React.Component {
    
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
          return <FontAwesome name={'home'} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.arrowBox}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('preferences')}>
                        <FontAwesome name={'home'} size={30} color={'#FFFFFF'}/>
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
        marginRight: em (9),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})