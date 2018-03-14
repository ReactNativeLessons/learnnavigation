import React from 'react';
import NavigationStack from './screens/navigation';
import { StyleSheet, Text, View, TextInput,Image,Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      };
  }

  render() {

    return (
      <NavigationStack/>
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
