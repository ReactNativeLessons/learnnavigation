import React from 'react';
import NavigationStack from './screens/navigation';
import { StyleSheet,  View } from 'react-native';

import Expo from 'expo';

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

export default class App extends React.Component {

  state = {
     appIsReady: false,
   }

   componentWillMount() {
     this._loadAssetsAsync();
   }

   render() {
     if (!this.state.appIsReady) {
       return <Expo.AppLoading />;
     }

     return (
       <NavigationStack/>
     );
   }

   async _loadAssetsAsync() {
     const fontAssets = cacheFonts([
       { 'FontAwesome': require('@expo/vector-icons/fonts/FontAwesome.ttf'),
       },
       { 'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
       },
     ]);



     await Promise.all([
       ...fontAssets,
     ]);

     this.setState({appIsReady: true});
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
