import React from 'react'
import {
    View,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native'

import em from '../properties/responsive'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export function renderFriends(friends, size) {
    let listFriends = friends.map((friend, index) => {
      return (
        <View key={index} style={styles.circle}>
                <Image 
                    style={
                        [{
                            height: em (size),
                            width: em (size),
                            borderRadius: em (size / 2),
                        }
                        ]} source={{uri: friend.foto}} />
                    {
                        friend.confirmed &&
                        <View style={
                            [styles.photoView, {
                                height: em (size),
                                width: em (size),
                                borderRadius: em (size / 2),
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
      )
    })
    return (
        <ScrollView horizontal>
            <View style={styles.friendsPhotos}>
                {listFriends}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    friendsPhotos: {
        flexDirection: 'row',
        marginHorizontal: em (8),
        marginRight: em (4),
        marginBottom: em (3),
    },
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