import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import Footer from './src/components/Footer'; 
import logo from './Img/nutri.png'; 

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Title />
            <Form />
            <Footer />
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 350,
        height: 190,
        marginBottom: -20,
    },
});
