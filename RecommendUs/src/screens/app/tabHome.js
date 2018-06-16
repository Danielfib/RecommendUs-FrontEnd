import React from 'react'

import {
    View,
    Text,
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
                <Text>Header</Text>
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
})