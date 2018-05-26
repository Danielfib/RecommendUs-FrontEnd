import React from 'react'

import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native'

import em from '../properties/responsive'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class CardChoose extends React.Component {
    
    render() {

        const name = this.props.name
        const image = this.props.image
        const selected = this.props.selected
        const size = this.props.size

        return (
            <View style={styles.card}>
                <Image style={[styles.img, {width: em (size), height: em (size),}]} source={{uri: image}} />
                <View style={[styles.cardButton,
                    {
                        backgroundColor: selected ?
                        'rgba(111, 207, 151, .5)' :
                        'rgba(44, 35, 35, .5)',
                        width: em (size),
                        height: em (size),
                    }
                ]}>
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
        marginTop: em (4),
        marginRight: em (4),
    },
    icon: {
        position: 'absolute',
        margin: em (1.5),
    },
    img: {
        borderRadius: em (4.5),
    },
    cardButton: {
        position: 'absolute',
        borderRadius: em (4.5),
    },
    textView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: em (2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: em (3.6),
        fontWeight: '500',
    },
})