import React, { useState } from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import HomeScreen from './components/HomeScreen';
import ProductosScreen from './components/ProductosScreen';
import ServiciosScreen from './components/ServiciosScreen';
import {useFonts} from 'expo-font';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [fontsLoaded] = useFonts({'Kalnia': require('./fonts/kalnia/static/Kalnia-Thin.ttf')});
  if(!fontsLoaded) return null;

  const goToProductos = () => setCurrentScreen('Productos');
  const goToServicios = () => setCurrentScreen('Servicios');
  const goBack = () => setCurrentScreen('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen goToProductos={goToProductos} goToServicios={goToServicios} />;
      case 'Productos':
        return <ProductosScreen goBack={goBack} />;
      case 'Servicios':
        return <ServiciosScreen goBack={goBack} />;
      default:
        return null;
    }
  };

  return <View>{renderScreen()}</View>;
};

export default App;
