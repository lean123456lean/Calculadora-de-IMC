import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
    <View style={styles.footer}>
        <Text style={styles.text}>© 2024 Tag-Tech. Todos os direitos reservados.</Text>
    </View>
);
};

const styles = StyleSheet.create({
footer: {
    backgroundColor: '#f0f0f0', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
},
text: {
    fontSize: 12,
    color: '#666', 
},
});

export default Footer;
