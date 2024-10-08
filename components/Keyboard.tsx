import React from 'react';
import { Button, Box, HStack, AspectRatio } from "native-base";
import { Dimensions } from 'react-native'

type KeyboardProps = {
  onKeyPress: (value: string) => void;
  onClear: (value: string) => void;
};

const { height, width } = Dimensions.get('window');

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

  const space = height > 800 ? height*0.02 : width*0.015;

  return (
    <Box p={4}>
      <HStack space={3} justifyContent="center" mt={space}>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('7')}>7</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('8')}>8</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('9')}>9</Button>
        <Button {...operatorButtonStyles} onPress={() => onClear('')}>CE</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={space}>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('4')}>4</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('5')}>5</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('6')}>6</Button>
        <Button {...operatorButtonStyles} onPress={() => onKeyPress('')}>-</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={space}>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('1')}>1</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('2')}>2</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('3')}>3</Button>
        <Button {...operatorButtonStyles} onPress={() => onKeyPress('')}>+</Button>
      </HStack>
      <HStack space={3} justifyContent="center" mt={space}>
        <Button {...doubleButtonStyles} onPress={() => onKeyPress('0')}>0</Button>
        <Button {...normalButtonStyles} onPress={() => onKeyPress('.')}>.</Button>
        <Button {...operatorButtonStyles} onPress={() => console.log("Button pressed")}>=</Button>
      </HStack>
    </Box>
  );
};

export default Keyboard;