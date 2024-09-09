import React from "react";
import { useState, useEffect } from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Box } from "native-base";
import Keyboard from "./components/Keyboard";
import Selector from "./components/Selector";
import store from "./store/store";
import { Provider } from 'react-redux';

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
  
  
  return(
    //<SafeAreaView style={styles.container}>
    <Provider store={store}>
      <NativeBaseProvider>
        <Box
            w="100%"
            p="2" bg="blue.800"
            shadow={2}
            flex = {1}>
          <Box alignSelf = "center" marginTop={9}>
            <Text style={styles.text}>Indicadores Chile xD</Text>
          </Box>
          <Selector value={inputValue} onClear={handleClear}/>
          <Keyboard onKeyPress={handleKeyPress} onClear={handleClear}/>
        </Box>
      </NativeBaseProvider>
    </Provider>
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