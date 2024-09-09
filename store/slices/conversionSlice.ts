import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

type ConversionRates = {
  [key: string]: number;
}

type ConversionState = {
  conversionRates: ConversionRates;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;  // Error puede ser string o null
};

const initialState: ConversionState = {
  conversionRates: {},
  status: 'idle',
  error: null,  // Inicialmente es null
};

// Acción asincrónica para obtener las tasas de conversión
export const fetchConversionRates = createAsyncThunk<
  ConversionRates,
  void,
  {rejectValue: string}
>(
  'conversion/fetchRates',
  async (_, {rejectWithValue}) => {
    const apiUrl = Config.API_URL;

    if (!apiUrl) {
      throw new Error('La URL de la API no está definida');
    }
    try {
      const response = await axios.get(apiUrl);
      return {
        clp: response.data.dolar.valor,
        uf: response.data.uf.valor,
        usd: response.data.dolar.valor,
        eur: response.data.euro.valor,
        utm: response.data.utm.valor,
        btc: response.data.bitcoin.valor * response.data.dolar.valor,
      };
    } catch (error: any){
      return rejectWithValue('Error al obtener las tasas de conversión');
    }
  }
);

const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversionRates.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchConversionRates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.conversionRates = action.payload;
        state.error = null;
      })
      .addCase(fetchConversionRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error desconocido';
      });
  },
});

//export const { } = conversionSlice.actions;

export default conversionSlice.reducer;