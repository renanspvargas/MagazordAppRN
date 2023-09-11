import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export function WeatherPge() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
          Pesquise por cidade
        </Text>
        <TextInput
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
        <Text style={{marginTop: 20, fontSize: 24, fontWeight: 'bold'}}>
          Nome da cidade
        </Text>
        <Text style={{fontSize: 16}}>País pertencente</Text>
        <Text style={{marginTop: 15, fontSize: 20, fontWeight: '500'}}>
          Temperatura
        </Text>
        <Text style={{fontSize: 16}}>Descritivo</Text>
      </View>
    </View>
  );
}
