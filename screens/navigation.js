import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import {StackNavigator} from 'react-navigation';
import RegisterScreen from './register';
import ProfileScreen from './profile';

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#f3580e',

  },
  titleStyle:{
    color: 'white'
  },
  logo: {
    marginLeft: 14,
    height: 40,
    width: 35,
  }
});
const logo = () => (
  <Image style={styles.logo} source={require("../assets/logo.png")}/>
);

const Navigation = StackNavigator({
  Register:{
    screen : RegisterScreen,
    navigationOptions : {
      title: 'JOIN US',
      headerLeft:logo(),
      headerTitleStyle:styles.titleStyle,
      headerStyle : styles.nav
    }

  },
  Profile:{
    screen : ProfileScreen ,
    navigationOptions : {title: 'Profile'}
  }
});

export default class NavigationStack extends React.Component {
  render() {

    return (
      <Navigation/>
    );
  }
}
