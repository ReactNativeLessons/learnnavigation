import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,Button } from 'react-native';
import  Fields from './../fields/Fields';

export default class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details:{name:'',email:'',phone:'',about_us:''},
      placeholders: {name:'Anunm grir',email:'Maylm gre co',phone:'Hamarm gr',about_us:'Masit banm@ gre'}
    };
  }

  componentDidMount(){
    console.log('did');
    this.setState({
      details:{name:'',email:'',phone:'',about_us:''}
    });
  }

  render() {
    console.log('renders');
    let {name, email, phone, about_us} = this.state.details;
    let {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Fields line_number={1} max_length={40} name_plc={this.state.placeholders.name} func={(text)=>{this.setState({details:{name: text, email: email, phone: phone, about_us: about_us}})}}/>
        <Fields line_number={1} max_length={40} name_plc={this.state.placeholders.email} func={(text)=>{this.setState({details:{name: name, email: text, phone: phone, about_us: about_us}})}}/>
        <Fields line_number={1} max_length={40} name_plc={this.state.placeholders.phone} func={(text)=>{this.setState({details:{name: name, email: email, phone: text, about_us: about_us}})}}/>
        <Text></Text>
        <Fields line_number={4} max_length={200} name_plc={this.state.placeholders.about_us} func={(text)=>{this.setState({details:{name: name, email: email, phone: phone, about_us: text}})}}/>
        <Text>{this.state.details.name}</Text>
        <Button
          onPress={()=>(navigate('Profile',{ data: this.state.details.name }))}
          title="Sxmir indz"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e0e0',
    alignItems: 'center',
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    height: 60,
    width: '100%',
    backgroundColor: '#f3580e',
  },
  logo: {
    height: 50,
    width: 50,
  }
});
//
// <View style={styles.header}>
//   <Image style={styles.logo} source={require("../assets/logo.png")}/>
//   <Text  style={{color:'#FAFAFA',fontSize: 15}}>{'JOIN US'}</Text>
//
// </View>
