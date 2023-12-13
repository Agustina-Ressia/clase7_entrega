// components/ProductosScreen.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from './Header';

const ProductosScreen = ({goBack}) => {
    return (
        <View>
            <Header title="Productos"/>
            <Text>Productos Screen</Text>
            <Button title="Atrás" onPress={goBack}/>
        </View>
    );
};

export default ProductosScreen;
