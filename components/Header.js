// components/Header.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontFamily:"Kalnia"
    }
})
export default Header;
