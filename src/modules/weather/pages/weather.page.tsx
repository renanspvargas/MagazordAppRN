import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useWeather} from '../hooks/useWeather';

export function WeatherPge() {
  const {weatherDetails, errorMessage, isLoading, getWeatherDataForInput} =
    useWeather();

  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    if (errorMessage.message !== '') {
      showErrorMessage(errorMessage.message);
    }
  }, [errorMessage]);

  function showErrorMessage(message: string) {
    Alert.alert('Erro ao buscar dados', message);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {isLoading && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      )}
      <View style={{padding: 10, alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
          Pesquise por cidade
        </Text>
        <TextInput
          onChangeText={setTextInput}
          placeholder="Digite aqui"
          style={{
            height: 50,
            width: '100%',
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#C0C0C0',
            padding: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (textInput !== '') {
              getWeatherDataForInput(textInput);
            }
          }}
          style={{
            backgroundColor: '#241468',
            marginTop: 10,
            height: 50,
            width: '70%',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Buscar dados de clima
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: 2,
            width: '100%',
            backgroundColor: '#C0C0C0',
            marginTop: 15,
          }}
        />
        {weatherDetails ? (
          <>
            <Text style={{marginTop: 20, fontSize: 24, fontWeight: 'bold'}}>
              {weatherDetails.location.name}
            </Text>
            <Text style={{fontSize: 16}}>
              {weatherDetails.location.country}
            </Text>
            <Text style={{marginTop: 15, fontSize: 20, fontWeight: '500'}}>
              Temperature: {weatherDetails.current.temp_c}°C
            </Text>
            <Text style={{fontSize: 16}}>
              Condition: {weatherDetails.current.condition.text}
            </Text>
          </>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
