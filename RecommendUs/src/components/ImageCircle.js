import React from 'react'

import {
    View,
    Image,
    StyleSheet,
} from 'react-native'

import em from '../properties/responsive'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class ImageCircle extends React.Component {
    
    render() {

        const confirmed = this.props.confirmed
        const image = this.props.imag
        const size = this.props.size
        const id = this.props.id

        return (
            <View key={id} style={styles.circle}>
                <Image 
                    style={
                        [{
                            height: em (size),
                            width: em (size),
                            borderRadius: em (size/2),
                        }
                        ]} source={{uri: image}} />
                    {
                        confirmed &&
                        <View style={
                            [styles.photoView, {
                                height: em (size),
                                width: em (size),
                                borderRadius: em (size/2),
                                }
                            ]}>
                            <FontAwesome
                                name={'check'}
                                size={20}
                                color={'#E3E3E3'}
                            />
                        </View>
                    }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circle: {
        marginLeft: em (-4),
    },
    photoView: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(111, 207, 151, .5)',
    },
})