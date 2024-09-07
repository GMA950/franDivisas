import React from "react";
import {View, Text, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
if (__DEV__) {
  require("./ReactotronConfig");
}

function App(){
  const isDarkMode = useColorScheme() === 'dark';
  const dynamicStyle = isDarkMode ? whiteStyles : darkStyles;
  console.log('DARKMODE?',isDarkMode);
  return(
    //<SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={dynamicStyle.text}>Hola Divisas</Text>
        {/*<Text>Hola Divisassss</Text>*/}
      </View>
    //</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center'
  }
})

const darkStyles = StyleSheet.create({
  text: {
    color: '#000000'
  }
})

const whiteStyles = StyleSheet.create({
  text: {
    color: '#FFFFFF'
  },
})

export default App;