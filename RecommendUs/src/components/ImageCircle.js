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
        const image = this.props.image

        return (
            <View style={styles.circle}>
                <Image style={styles.photo} source={{uri: image}} />
                    {
                        confirmed &&
                        <View style={styles.photoView}>
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
        marginLeft: em (-4.5),
    },
    photo: {
        width: em (22),
        height: em (22),
        borderRadius: em (11),
    },
    photoView: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: em (22),
        height: em (22),
        borderRadius: em (11),
        backgroundColor: 'rgba(111, 207, 151, .5)',
    },
})