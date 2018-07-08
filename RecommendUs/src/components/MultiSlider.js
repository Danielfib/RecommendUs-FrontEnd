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
        sliderOneValue: this.props.value,
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
        this.props.callback(this.state.sliderOneValue)
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
                    max={150}
                    sliderLength={em (80)}
                    step={5}
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
      height: em (6),
      width: em (6),
      borderRadius: em (4), 
      backgroundColor:'#27AE60', 
    },
    textMultSlider: {
      marginTop: em (-8),
      fontFamily: 'Roboto',
      fontSize: em (7),
      color: '#27AE60',
      textAlign: 'center'
    },
})
  
  
  