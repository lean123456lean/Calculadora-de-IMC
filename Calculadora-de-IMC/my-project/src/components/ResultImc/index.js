
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultImc = ({ mensagemResultImc, resultImc }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>{mensagemResultImc}</Text>
            {resultImc && <Text style={styles.resultValue}>{resultImc}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3498db',
    },
});

export default ResultImc;