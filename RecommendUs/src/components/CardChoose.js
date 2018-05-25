import React from 'react'

import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class CardChoose extends React.Component {
    
    render() {

        const name = this.props.name
        const image = this.props.image
        const selected = this.props.selected

        return (
            <View style={styles.card}>
                <Image style={styles.img} source={{uri: image}} />
                <View style={[styles.cardButton,
                    {
                        backgroundColor: selected ?
                        'rgba(111, 207, 151, .5)' :
                        'rgba(44, 35, 35, .5)',
                        }]}>
                    <FontAwesome
                        style={styles.icon}
                        name={selected ? 'check' : 'circle'}
                        size={20}
                        color={'#E3E3E3'}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.text}>
                            {name}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        width: 100,
        height: 100,
    },
    icon: {
        position: 'absolute',
        margin: 5,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    cardButton: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    textView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '500',
    },
})