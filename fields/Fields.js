import React, { Component } from 'react';
import { TextInput,View ,Text } from 'react-native';

export default class Fields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: 'Gre banm'
    };
  }

  render() {
    let a = this.props.line_number === 1 ? false:true;
    return (
      <TextInput
        style={{height: 40* this.props.line_number,width:'90%', backgroundColor: '#FAFAFA',margin: 10,padding: 5,borderRadius: 5 }}
        onChangeText={(text) => this.props.func(text)}
        maxLength = {this.props.max_length}
        numberOfLines = {this.props.line_number}
        multiline= {a}
        placeholder= {this.props.name_plc}
      />

    );
  }
}
