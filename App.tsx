import React from "react";
import { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import { Center, NativeBaseProvider } from 'native-base';
import { Box } from "native-base";
import { LogBox } from "react-native";
import Keyboard from "./components/Keyboard";
import Selector from "./components/Selector";

if (__DEV__) {
  require("./ReactotronConfig");
}


function App(){

  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (value: string) => {
    setInputValue((prev) => prev + value);
  };

  const handleClear = () => {
    setInputValue('');
  };
  
  
  //const isDarkMode = useColorScheme() === 'dark';
  //const dynamicStyle = isDarkMode ? whiteStyles : darkStyles;
  //console.log('DARKMODE?',isDarkMode);
  return(
    //<SafeAreaView style={styles.container}>
    <NativeBaseProvider>
      {/*<View style={styles.container}>*/}
      <Box
          w="100%"
          p="2" bg="blue.800"
          shadow={2}
          flex = {1}>
        <Box alignSelf = "center" marginTop={9}>
          <Text style={styles.text}>Indicadores Chile xD</Text>
        </Box>
        {/*<Text>Hola Divisassss</Text>*/}
        <Selector value={inputValue} onClear={handleClear}/>
        <Keyboard onKeyPress={handleKeyPress} onClear={handleClear}/>
      </Box>
      {/*</View>*/}
    </NativeBaseProvider>
    //</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20
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