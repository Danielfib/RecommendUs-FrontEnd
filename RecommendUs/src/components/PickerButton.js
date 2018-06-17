import React from 'react';
import  {  View, 
          Text,  
          StyleSheet, 
          Picker,
          Image,
          TouchableOpacity
} from 'react-native';

import em from '../properties/responsive'

export default class PickerButton extends React.Component { 
    state = {
        defaultOption: this.props.defaultOption,
        options: this.props.defaultOption, 
        data: this.props.data,
        gpsButton: true
    };

    pressedGpsButton() {
      this.setState({
        gpsActive: !(this.state.gpsActive)
      })
    }

    renderPickerItem() {
      let items = new Array()
      let pickerItems

      for(i = 0; i < this.state.data.length; i++) {
        items.push(this.state.data[i])
      }

      pickerItems = items.map((name) => {
        return(
          <Picker.Item key={name} label={name} value={name} color={'#A30000'}/>
        )
      })

      return pickerItems
    }

    render() { 
      if(this.props.gpsButton == true) {
        return(
          <View style={style.container}>
            <TouchableOpacity onPress={()=>this.pressedGpsButton()}>
                <Image source={require('../assets/logo.png')} style={{marginRight:em(.5)}}/>
            </TouchableOpacity>
            <View style={style.picker}>
              <Picker
                prompt="Selecione o local"
                itemStyle={{color: 'black'}}
                style={this.props.dimensions}
                selectedValue={this.state.options}
                onValueChange={(name) => this.setState({options: name})}>
                <Picker.Item color={'#A30000'} key={this.state.defaultOption} label={(this.state.gpsActive)?this.state.defaultOption:"Selecione seu Local"} value={this.state.gpsActive || this.state.defaultOption}/>
                {this.renderPickerItem()}
              </Picker>
              <View style={[style.pickerLineStatus, 
                ((this.state.options != this.state.defaultOption) || this.state.gpsActive)?{backgroundColor:'#A30000'}:{backgroundColor:'#B7B7B7'}]}>
              </View>
              
            </View>
          </View>    
          )
      }

      else {
        return(
          <View style={style.container}>
            <View style={style.picker}>
              <Picker
                prompt="Selecione o local"
                itemStyle={{color: 'black'}}
                style={this.props.dimensions}
                selectedValue={this.state.options}
                onValueChange={(name) => this.setState({options: name})}>
                <Picker.Item key={this.state.defaultOption} label={this.state.defaultOption} value={this.state.defaultOption}/>
                {this.renderPickerItem()}
              </Picker>
              <View style={[style.pickerLineStatus, 
                ((this.state.options != this.state.defaultOption))?{backgroundColor:'#A30000'}:{backgroundColor:'#B7B7B7'}]}>
              </View>
              
            </View>
          </View>    
          )
      }

    }
}

const style = StyleSheet.create({
  picker: {
    backgroundColor: '#ECECEC',
    padding: 0,
    marginLeft: em(2.5)
  },
  pickerLineStatus: {
    height: em(0.8),
    width: '100%',
  },
  itemStyle: {
    color: 'green'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})