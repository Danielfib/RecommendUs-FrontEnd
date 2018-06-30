import React from 'react'
import axios from 'axios'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import NextButton from '../../../components/NextButton'

import * as requests from '../../../actions/requests'

import em from '../../../properties/responsive'

class Group extends React.Component {
    
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {}
    }
    
    render() {
        // Tamanho dos cards: 21 para o clima e 30 para os tipos de comida
        return (
            <View style={styles.container}>
                <BarStatus />
                <Text>
                    {
                        "Nois"
                    }
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('preferences')}>
                    <NextButton />
                </TouchableOpacity>
            </View>
        );
    }
}

export default Group

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})