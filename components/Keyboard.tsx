import React from 'react';
import { useState } from 'react';
import { Button, Box, HStack, AspectRatio } from "native-base";

type KeyboardProps = {
  onKeyPress: (value: string) => void;
  onClear: (value: string) => void;
};

const Keyboard: React.FC<KeyboardProps>  = ({ onKeyPress, onClear}) => {

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
        <Button {...normalButtonStyles} onPress={() => onKeyPress('7')}>7</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('8')}>8</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('9')}>9</Button>
        <Button {...operatorButtonStyles} onPress={() => onClear('')}>CE</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('4')}>4</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('5')}>5</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('6')}>6</Button>
        <Button {...operatorButtonStyles} onPress={() => onKeyPress('')}>-</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('1')}>1</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('2')}>2</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('3')}>3</Button>
        <Button {...operatorButtonStyles} onPress={() => onKeyPress('')}>+</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={5}>
        <Button {...doubleButtonStyles} onPress={() => onKeyPress('0')}>0</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('.')}>.</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("Button pressed")}>=</Button>
      </HStack>
    </Box>
  );
};

export default Keyboard;