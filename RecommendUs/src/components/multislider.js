import React from 'react';
import  {  View, 
          Text, 
          Button, 
          StyleSheet, 
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider'

import em from '../properties/responsive'

export default class MultiSliderButton extends React.Component {
    state = {
        sliderOneChanging: false,
        sliderOneValue: [30],
    };
    
    sliderOneValuesChangeStart = () => {
        this.setState({
            sliderOneChanging: true,
        });
    }

    sliderOneValuesChange = (values) => {
        let newValues = [0];
        newValues[0] = values[0];
        this.setState({
            sliderOneValue: newValues,
        });
    }

    sliderOneValuesChangeFinish = () => {
        this.setState({
            sliderOneChanging: false,
        });
    }

    render() {
        return(
            <View>  
                <MultiSlider 
                    selectedStyle = {{backgroundColor: '#27AE60'}}
                    unselectedStyle = {{backgroundColor: '#6FCF97'}}
                    markerStyle = {style.multSlider}
                    values={this.state.sliderOneValue}
                    min={10}
                    max={200}
                    sliderLength={em (80)}
                    onValuesChangeStart={this.sliderOneValuesChangeStart}
                    onValuesChange={this.sliderOneValuesChange}
                    onValuesChangeFinish={this.sliderOneValuesChangeFinish}
                />
                <Text style={style.textMultSlider}>{'R$ ' + this.state.sliderOneValue}</Text>
            </View>
        )
    }
} 

const style = StyleSheet.create({
    multSlider: {
      height: em (8),
      width: em (8),
      borderRadius: em (4), 
      backgroundColor:'#27AE60', 
    },
    textMultSlider: {
      marginTop: em (-10),
      fontFamily: 'Roboto',
      fontSize: em (9),
      color: '#27AE60',
      textAlign: 'center'
    },
})
  
  
  