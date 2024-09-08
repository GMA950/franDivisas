import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Box, HStack, Icon, Divider } from "native-base";

export default function Selector() {

  const interButtonStyles = {
    //flex: 1,
    aspectRatio: 1,
    height:12,
    width: 12,
    backgroundColor: "blue.800",
    _text: { color: "white", fontWeight: "bold", fontSize: 14},
    borderRadius: "full",
    //size: "sm"
  };

  return (
    <Box flex={1} marginTop={10} p={2}>
      <Box
          w="100%"
          p="2" bg="white"
          borderRadius= "17"
          shadow={2}
        >
        <Box>
          <Text style={styles.text}>Amount</Text>
        </Box>
        <Box alignItems = "center">
          Paises
        </Box>
        <Box>
          <HStack alignItems="center" space={0} justifyContent="center">
            <Divider flex={1} bg="#B8B7B7" thickness="1" />
            <Button {...interButtonStyles} onPress={() => console.log("Button pressed")}>A</Button>
            <Divider flex={1} bg="#B8B7B7" thickness="1" />
          </HStack>
        </Box>
        <Box>
        <Text style={styles.text}>Converted AMount</Text>
        </Box>
        <Box alignItems = "center">
          Paises
        </Box>
      </Box>
    </Box>
)}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#4B4B4B',
    //fontWeight: 'bold',
    fontSize: 12
  }
})