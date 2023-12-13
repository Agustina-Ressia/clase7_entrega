// components/ServiciosScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from './Header';

const ServiciosScreen = ({goBack}) => {
    return (
        <View>
            <Header title="Servicios"/>
            <Text>Servicios Screen</Text>
            <Button title="Atrás" onPress={goBack}/>
        </View>
    );
};

export default ServiciosScreen;
