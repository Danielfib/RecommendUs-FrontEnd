import React from 'react'
import axios from 'axios'
import StartRating from 'react-native-star-rating'

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native'

import em from '../../../properties/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Btn from 'react-native-micro-animated-button'

export default class Info extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    renderTags() {
        tags = ['Junk food', 'Oriental', 'Pizza', 'Bar', 'Game', 'Açai']
        let jsxTags = tags.map(tagName => {
            return(
                <View   style={[style.tagStyle, 
                                (tags[0] == tagName)?{marginLeft:em(5)}:{},(tagName == 'Oriental' || tagName == 'Junk food')?{backgroundColor:"#A30000"}:{}]} 
                        key={tagName}
                > 
                    <Text   style={[style.tagNameStyle, (tagName == 'Oriental' || tagName == 'Junk food')?{color:"#FFF"}:{}]}>
                        {tagName}
                    </Text>
                </View>
            )
        })

        return jsxTags
    }
    
    render() {
        
        return(
            <View style={style.container}>
                <Image source={require('../../../assets/taverna.png')} style={style.backgroundImage}/>
                <View style={style.detailsView}>
                    <Text style={style.restaurantName}>Taverna Burgbeer</Text>
                    <View style={style.subcontainer}>
                        <View style={style.discontAndStars}>
                            <View style={style.starContainer}>
                                <StartRating 
                                    disabled={true} 
                                    maxStars={5} 
                                    rating={4} 
                                    starSize={em(4)}
                                    iconSet={'Ionicons'}
                                    emptyStar={'ios-star-outline'}
                                    halfStar={'ios-star-half'}
                                    fullStar={'ios-star'}
                                >
                            
                                </StartRating>
                            </View>
                            <Image source={require('../../../assets/Discont.png')} style={style.discontStyle}/>
                        </View>
                        <Btn 
                            onPress={() => { 
                                this.state.pressed = true   
                                //console.warn(this.state.pressed)
                                return this.btn.success()
                            }}
                            onSecondaryPress={() => {
                                this.state.pressed = false 
                                //console.warn(this.state.pressed)
                                return this.btn.reset()
                            }}
                            ref={ref => (this.btn = ref)}
                            successIcon="check"
                            backgroundColor="#27AE60"
                            noBorder= {true}
                            maxWidth={em(20)}
                            renderLabel ={<Text style={style.labelButton}>Votar</Text>}
                            successForegroundColor= '#FFF'
                        />
                    </View>
                    <View style={style.ScrollViewStyle}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {this.renderTags()} 
                        </ScrollView>
                    </View>
                    <View style={style.infoContainer}>
                        <Text>Informações</Text>
                        <View style={style.infoStyle}>
                            <Text>$$$</Text>
                            <Text>12h~18h</Text>
                            <Text>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                            </Text>
                        </View>
                    </View>

                    <View style={style.pratosStyle}>
                        <Text>Pratos</Text>
                    </View>
                </View>
            </View>   
        )
    }
}
    
const style = StyleSheet.create({
    container: {
        width: em(100),
        height: '100%',
    },
    backgroundImage: {
        width: em(100),
        height: '70%',
        marginTop: em(5),
        resizeMode:'stretch'
    },
    detailsView: {
        backgroundColor: '#FFF',
        width: em(100),
        height: '60%',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: em(12),
        borderTopRightRadius: em(12) 
    },
    restaurantName: {
        fontSize: em(8),
        fontWeight: 'bold',
        marginTop: em(3),
        marginLeft: em(4)
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: em(-4.5),
        width: em(95)
    },
    discontAndStars: {
        flexDirection: 'row',
        alignItems: 'center',
    },    
    starContainer: {
        width: em(20),
        marginLeft: em(4)
    },
    discontStyle: {
        width: em(6.5),
        height: em(6.5),
        marginLeft: em(2.5)
    },
    labelButton: {
        fontSize: em(3.5),
        color: '#FFF',
        fontWeight: 'bold'
    },
    tagStyle: {
        borderRadius: em(10),
        borderWidth: em(0.35),
        width: em(18),
        height: em(8),
        marginLeft: em(3),
        borderColor: '#A30000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagNameStyle: {
        fontWeight: 'bold',
        fontSize: em(3),
        padding: em(0.5),
        color: '#A30000'
    },
    ScrollViewStyle: {
        marginTop: em(3),
    },

    infoContainer: {

    }
})
  