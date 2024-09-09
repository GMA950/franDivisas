import React from "react";
import { useState, useEffect } from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Box } from "native-base";
import Keyboard from "./components/Keyboard";
import Selector from "./components/Selector";
import store from "./store/store";
import { Provider } from 'react-redux';
import BootSplash from 'react-native-bootsplash'

if (__DEV__) {
  require("./ReactotronConfig");
}

//const { width } = Dimensions.get('window');

function App(){

  const { height, width } = Dimensions.get('window');

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  

  const handleKeyPress = (value: string) => {
    setInputValue((prev) => prev + value);
  };

  const handleClear = () => {
    setInputValue('');
  };
  
  //console.log(height)

  const space = height > 800 ? height*0.03 : width*0.001;
  
  return(
    //<SafeAreaView style={styles.container}>
    <Provider store={store}>
      <NativeBaseProvider>
        <Box
            w="100%"
            p="2" bg="blue.800"
            shadow={2}
            flex = {1}>
          <Box alignSelf = "center" marginTop={space}>
            <Text style={styles.text}>Indicadores Chile</Text>
          </Box>
          <Box height='40%'>
            <Selector value={inputValue} onClear={handleClear}/>
          </Box>
          <Box>
            <Keyboard onKeyPress={handleKeyPress} onClear={handleClear}/>
          </Box>
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