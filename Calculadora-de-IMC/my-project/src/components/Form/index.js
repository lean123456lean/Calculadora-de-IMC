
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import ResultImc from '../ResultImc';

const Form = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [mensagemImc, setMensagemImc] = useState('');
    const [imc, setImc] = useState(null);

    const calcularImc = () => {
        const alturaNum = parseFloat(altura.replace(',', '.')); 
        const pesoNum = parseFloat(peso.replace(',', '.')); 

        if (!isNaN(alturaNum) && !isNaN(pesoNum) && alturaNum > 0) {
            const imcValue = pesoNum / (alturaNum * alturaNum);
            setImc(imcValue.toFixed(2));
            
            // Definindo mensagem de interpretação do IMC
            let mensagem;
            if (imcValue < 18.5) {
                mensagem = 'Abaixo do peso';
            } else if (imcValue < 25) {
                mensagem = 'Peso normal';
            } else if (imcValue < 30) {
                mensagem = 'Sobrepeso';
            } else {
                mensagem = 'Obesidade';
            }
            setMensagemImc(`Seu IMC é: ${imcValue.toFixed(2)} - ${mensagem}`);
        } else {
            setMensagemImc('Por favor, insira valores válidos para altura e peso.');
            setImc(null);
        }
    };

    const limparCampos = () => {
        setAltura('');
        setPeso('');
        setMensagemImc('');
        setImc(null);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Altura</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex. 1.70"
                            keyboardType="numeric"
                            value={altura}
                            onChangeText={setAltura}
                        />
                        <Text style={styles.label}>Peso</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex. 75.365"
                            keyboardType="numeric"
                            value={peso}
                            onChangeText={setPeso}
                        />
                        <TouchableOpacity style={styles.button} onPress={calcularImc}>
                            <Text style={styles.buttonText}>Calcular IMC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clearButton} onPress={limparCampos}>
                            <Text style={styles.clearButtonText}>Limpar</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <ResultImc menssageResultImc={mensagemImc} resultImc={imc} />
                    
                    {/* Tabela de Interpretação */}
                    <View style={styles.tableContainer}>
                        <Text style={styles.tableTitle}>Interpretação do IMC</Text>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>Abaixo de 18.5</Text>
                            <Text style={styles.tableCell}>Abaixo do peso</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>18.5 - 24.9</Text>
                            <Text style={styles.tableCell}>Peso normal</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>25.0 - 29.9</Text>
                            <Text style={styles.tableCell}>Sobrepeso</Text>
                        </View>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>30.0 e acima</Text>
                            <Text style={styles.tableCell}>Obesidade</Text>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b5ffe9',
        padding:10,
        borderRadius: 7,
        paddingBottom: 60,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#3498db',
        borderWidth: 2,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 10, // Adicionado borderRadius
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10, // Adicionado borderRadius
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    clearButton: {
        backgroundColor: '#e74c3c',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10, // Adicionado borderRadius
        marginTop: 20,
    },
    clearButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tableContainer: {
        marginTop: 20,
        width: '100%',
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableCell: {
        fontSize: 16,
        
    },
});

export default Form;