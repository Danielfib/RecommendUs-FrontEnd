import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import BarStatus from '../../../components/StatusBar'

class Preference2 extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {}
    }

    static navigatinoOptions = {
        header: null,
    }
    
    render() {
        return (
            <View style={styles.container}>
                <BarStatus />
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
    container: {},
})