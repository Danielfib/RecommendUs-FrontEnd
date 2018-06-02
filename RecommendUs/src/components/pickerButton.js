import React from 'react';
import  {  View, 
          Text,  
          StyleSheet, 
          Picker
} from 'react-native';

export default class PickerButton extends React.Component {
    state = {
        option: 'Estado',
        option1: 'Cidade',
        option2: 'Bairro'
    };

    render() {
        return(
            <View style = {style.pickerContainer}>
              <View style={style.picker}>
                <Picker
                  style={{height: 29, width: 140,}}
                  //mode ={'dropdown'}
                  selectedValue={this.state.option}
                  onValueChange={(name) => this.setState({option: name})}>
                  <Picker.Item label="Estado" value="Estado" />
                  <Picker.Item label="Pernambuco" value="Pernambuco" />
                </Picker>
                <View style={[style.pickerLineStatus, (this.state.option == "Estado")?{backgroundColor:'#B7B7B7'}:{backgroundColor:'#A30000'}]}></View>
               
              </View>
              <View style={style.picker}>
                <Picker
                  //mode ={'dropdown'}
                  itemStyle = {style.itemStyle}
                  style={{height: 29, width: 140,}}
                  selectedValue={this.state.option1}
                  onValueChange={(name) => this.setState({option1: name})}>
                  <Picker.Item label="Cidade" value="Cidade" />
                  <Picker.Item label="Recife" value="Recife" />
                </Picker>
                <View style={[style.pickerLineStatus, (this.state.option1 == "Cidade")?{backgroundColor:'#B7B7B7'}:{backgroundColor:'#A30000'}]}></View>
               
              </View>
              <View style={style.picker}>
                  <Picker
                    //mode ={'dropdown'}
                    style={{height: 29, width: 140,}}
                    selectedValue={this.state.option2}
                    onValueChange={(name) => this.setState({option2: name})}>
                    <Picker.Item label="Bairro" value="Bairro" />
                    <Picker.Item label="Prazeres" value="Prazeres" />
                  </Picker>
                  <View style={[style.pickerLineStatus, (this.state.option2 == "Bairro")?{backgroundColor:'#B7B7B7'}:{backgroundColor:'#A30000'}]}></View>
              </View>
              
            </View>
        )
    }
}

const style = StyleSheet.create({
    // Picker Settings //
    picker: {
      backgroundColor: '#ECECEC',
      height: 32,
      width: '30%',
      marginRight: 10,
      padding: 0
    },
    pickerContainer: {
      flex: 1,
      flexDirection: 'row',
      //backgroundColor: 'green',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '10%',
      //marginBottom: -10,
      padding: 0
    },
    pickerLineStatus: {
      height: 2,
      width: '100%',
    },
    itemStyle: {
      fontFamily: 'Roboto',
      fontSize: 13,
    }
    // End Picker Settings //
  })
  
  
  