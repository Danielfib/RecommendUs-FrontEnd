import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'
import Header from '../../../components/Header'

class Preference2 extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {}
    }

    static navigatinoOptions = {
        header: null
    }
    
    render() {
        return (
            <View style={styles.container}>
                <BarStatus/>
                <Header>
                    <Text style={styles.titleHeader}>
                        {
                            "Preferências"
                        }
                    </Text>
                </Header>
                <Text>
                    {
                        "Oi!"
                    }
                </Text>
            </View>
        );
    }
}

export default Preference2

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleHeader: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 24,
    },
})