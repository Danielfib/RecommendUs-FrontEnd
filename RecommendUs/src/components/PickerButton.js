import React from 'react';
import  {  View, 
          Text,  
          StyleSheet, 
          Picker,
          FlatList
} from 'react-native';

import em from '../properties/responsive'

export default class PickerButton extends React.Component { 
    state = {
        defaultOption: this.props.defaultOption,
        options: this.props.defaultOption, 
        data: this.props.data
    };

    renderPickerItem() {
      let items = new Array()
      let pickerItems

      for(i = 0; i < this.state.data.length; i++) {
        items.push(this.state.data[i])
      }

      pickerItems = items.map((name) => {
        return(
          <Picker.Item key={name} label={name} value={name} />
        )
      })

      return pickerItems
    }

    render() {
        return(
          <View style={style.picker}>
            <Picker
              style={{height: em(6.5), width: em(32.5)}}
              selectedValue={this.state.options}
              onValueChange={(name) => this.setState({options: name})}>
              <Picker.Item label={this.state.defaultOption} value={this.state.defaultOption} />
              {this.renderPickerItem()}
            </Picker>
            <View style={[style.pickerLineStatus, (this.state.options == this.state.defaultOption)?{backgroundColor:'#B7B7B7'}:{backgroundColor:'#A30000'}]}></View>   
          </View>    
        )
    }
}

const style = StyleSheet.create({
  picker: {
    backgroundColor: '#ECECEC',
    height: em(7),
    width: em(30),
    padding: 0
  },
  pickerLineStatus: {
    height: em(0.5),
    width: '100%',
  },
})