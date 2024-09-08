import React from 'react'
import { useState, useEffect } from 'react';
import { Text, StyleSheet, Image } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Button, Box, HStack, Select, CheckIcon, Divider, Input } from "native-base";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import '.././fontAwesomeLib';
import Config from 'react-native-config';
import axios from 'axios';

type SelectorProps = {
  value: string;
  onClear: (value: string) => void;
};

export default function Selector({ value, onClear }: SelectorProps) {

  const interButtonStyles = {
    //flex: 1,
    //aspectRatio: 1,
    height:10,
    width: 10,
    backgroundColor: 'blue.800',
    _text: { color: 'white', fontWeight: 'bold', fontSize: 14},
    borderRadius: "full",
    //size: "sm"
  };

  //const conversionRate = 0.5; 

  const [coin, setSelectedCoin] = React.useState('emp');
  const [convertedCoin, setConvertedCoin] = React.useState('emp');
  const [convertedValue, setConvertedValue] = useState('');
  const [conversionRate, setConversionRate] = useState<number | null>(null);
  const [conversionRates, setConversionRates] = useState<any>({});

  const apiUrl = Config.API_URL;

  const fetchConversionRate = async () => {

    if (!apiUrl) {
      console.error('La URL de la API no está definida.'); //wena chatgpt
      return;
    }

    try {
      const response = await axios.get(apiUrl);  // Hacemos una solicitud GET a la API
      console.log(response.data);
      //setConversionRate(response.data.rate);  // Asumimos que la tasa viene en "rate"
      setConversionRates({
        clp: 1,  // Asumiendo que CLP es el valor del dólar en pesos chilenos
        uf: response.data.uf.valor,
        usd: response.data.dolar.valor,
        eur: response.data.euro.valor,
        utm: response.data.utm.valor,
        btc: response.data.bitcoin.valor * response.data.dolar.valor,
      });
    } catch (error) {
      console.error('Error al obtener la tasa de conversión:', error);
    } finally {
      //setLoading(false);  // Termina la carga
    }
  };

  useEffect(() => {
    fetchConversionRate();
  }, []);

  useEffect(() => {
    if (coin !== 'emp' && convertedCoin !== 'emp' && conversionRates[coin] && conversionRates[convertedCoin]) {
      const rate = conversionRates[coin] / conversionRates[convertedCoin];  // Tasa de conversión entre las dos monedas
      setConversionRate(rate);
    }
  }, [coin, convertedCoin, conversionRates]);

  useEffect(() => {
    if (conversionRate !== null){
      const newValue = (parseFloat(value) || 0) * conversionRate;
      setConvertedValue(newValue.toFixed(2));
    }
     // Actualiza el valor convertido
  }, [value, conversionRate]);

  const handleSwapCoins = () => {
    const tempCoin = coin;
    setSelectedCoin(convertedCoin);      // Cambiar moneda base a moneda objetivo
    setConvertedCoin(tempCoin);          // Cambiar moneda objetivo a moneda base
  };

  //console.log('API URL: ', Config.IMAGE_PATH_CLP);
  //console.log('Config', Config);
  const flags: Record <string, number> = {
    clp: require('.././src/chile.png'),
    uf: require('.././src/money.png'),
    usd: require('.././src/united-states.png'),
    eur: require('.././src/european.png'),
    utm: require('.././src/statistic.png'),
    btc: require('.././src/bitcoin.png'),
    emp: require('.././src/empty-set.png')
  };

  return (
    <Box flex={1} marginTop={10} p={2}>
      <Box
          w="100%"
          p="5" bg="white"
          borderRadius= "17"
          shadow={2}
          flex={1}
        >
        <Box flex={1}>
          <Text style={styles.text}>Amount</Text>
        </Box>
        <Box flex={1} p="2">
          <HStack flex={1} justifyContent="space-between" alignItems="center">
            <Box width="50%">
              <HStack flex={1} justifyContent="center" alignItems="center">
                <Image
                  source={ flags[coin] } //enums no funcionan para require
                  //source={require('.././src/chile.png')}  // Importa tu imagen local
                  style={styles.image}
                />
                <Box>
                <RNPickerSelect
                  onValueChange={(value) => {setSelectedCoin(value); if(value === 'emp') onClear('')}} //hooks hooks y hooks
                  value={coin}
                  items={[
                    { label: 'CLP', value: 'clp' },
                    { label: 'UF', value: 'uf' },
                    { label: 'USD', value: 'usd' },
                    { label: 'EUR', value: 'eur' },
                    { label: 'UTM', value: 'utm' },
                    { label: 'BTC', value: 'btc' },
                  ]}
                  placeholder={{ label: ' 🤑 ', value: 'emp' }}
                  style={pickerSelectStyles}  // una tortura
                  useNativeAndroidPickerStyle={false}  // siento que no hace nada
                  Icon={() => {
                    return <FontAwesomeIcon icon="chevron-down" size={15} color="gray" />;  // chat gpt malo, no te bases en expo
                  }}
                />
                </Box>
                </HStack>
            </Box>
            <Box width="50%">
              <Input mx="3" value={value} placeholder="000.0" w="100%" size="2xl" editable={false} showSoftInputOnFocus={true} _input={{ fontWeight: 'bold', textAlign: 'right'}}/>
            </Box>
          </HStack>
        </Box>
        <Box flex={1}>
          <HStack alignItems="center" space={0} justifyContent="center">
            <Divider flex={1} bg="#B8B7B7" thickness="1" />
            <Button {...interButtonStyles} onPress={handleSwapCoins}>
              <FontAwesomeIcon transform={{ rotate: 90 }} color="white" icon="arrow-right-arrow-left" size={16} />
            </Button>
            <Divider flex={1} bg="#B8B7B7" thickness="1" />
          </HStack>
        </Box>
        <Box flex={1}>
        <Text style={styles.text}>Converted Amount</Text>
        </Box>
        <Box flex={1} p="2">
          <HStack flex={1} justifyContent="space-between" alignItems="center">
            <Box width="50%">
              <HStack flex={1} justifyContent="center" alignItems="center">
                <Image
                  source={ flags[convertedCoin] }
                  style={styles.image}
                />
                <Box>
                <RNPickerSelect
                  onValueChange={(value) => {setConvertedCoin(value); if(value === 'emp') onClear('')}}
                  value={convertedCoin}
                  items={[
                    { label: 'CLP', value: 'clp' },
                    { label: 'UF', value: 'uf' },
                    { label: 'USD', value: 'usd' },
                    { label: 'EUR', value: 'eur' },
                    { label: 'UTM', value: 'utm' },
                    { label: 'BTC', value: 'btc' },
                  ]}
                  placeholder={{ label: ' 🤑 ', value: 'emp' }}
                  style={pickerSelectStyles} 
                  useNativeAndroidPickerStyle={false}
                  Icon={() => {
                    return <FontAwesomeIcon icon="chevron-down" size={15} color="gray" />;
                  }}
                />
                </Box>
                </HStack>
            </Box>
            <Box width="50%">
              <Input mx="3" value={convertedValue} placeholder="000.0" w="100%" size="2xl" editable={false} showSoftInputOnFocus={true} _input={{ fontWeight: 'bold', textAlign: 'right'}}/>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
)}

const styles = StyleSheet.create({
    text: {
    color: '#4B4B4B',
    //fontWeight: 'bold',
    fontSize: 12
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,  // La mitad del tamaño (width/2 o height/2) para hacerla circular
    marginRight: 5
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, //ios vale callampa
  },
  inputAndroid: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 8,
    color: 'black',
    fontWeight: 'bold',
    minWidth: 90,
    backgroundColor: 'white',
    paddingRight: 40,
  },
  iconContainer: {
    top: 15,
    right: 10,
  }
});