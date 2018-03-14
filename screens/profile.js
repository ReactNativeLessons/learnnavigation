import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,Button } from 'react-native';

export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      };
  }

  render() {

    let { state } = this.props.navigation
    return (
      <View style={styles.container}>
      <Text style={{color:'black',fontSize: 30}}>{ state.params.data}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#e2e0e0',
    alignItems: 'center',
  }
});
