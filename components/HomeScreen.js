// components/HomeScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from './Header';

const HomeScreen = ({goToProductos, goToServicios}) => {
    return (
        <View>
            <Header title="Home"/>
            <Text>Home Screen</Text>
            <Button title="Productos" onPress={goToProductos}/>
            <Button title="Servicios" onPress={goToServicios}/>
        </View>
    );
};

export default HomeScreen;
