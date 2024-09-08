import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Box, HStack, AspectRatio } from "native-base";

const Keyboard = () => {

  const normalButtonStyles = {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "white",
    _text: { color: "blue.600", fontWeight: "bold", fontSize: 24},
    borderRadius: "full",
    size: "xs"
  };
  const operatorButtonStyles = {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "blue.500",
    _text: { color: "white", fontWeight: "bold", fontSize: 24},
    borderRadius: "full",
    size: "sm"
  };

  const doubleButtonStyles = {
    flex: 2.6,
    //aspectRatio: 1,
    backgroundColor: "white",
    _text: { color: "blue.600", fontWeight: "bold", fontSize: 24},
    borderRadius: "full",
    size: "sm"
  };


  return (
    <Box p={4}>
      {/*<Text>FlatCards</Text>*/}
      <HStack space={3} justifyContent="center" mt={3}>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>7</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>8</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>9</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("hello world")}>CE</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>4</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>5</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>6</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("hello world")}>-</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>1</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>2</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>3</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("hello world")}>+</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...doubleButtonStyles} onPress={() => console.log("hello world")}>0</Button>
        <Button {...normalButtonStyles} onPress={() => console.log("hello world")}>.</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("hello world")}>=</Button>
      </HStack>
    </Box>
  );
};

export default Keyboard;