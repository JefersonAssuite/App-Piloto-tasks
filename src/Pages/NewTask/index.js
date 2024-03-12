import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { collection, addDoc } from "firebase/firestore"; 
import database from '../../Config/firebaseConfig';
import styles from './styles';

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState('');

    const addTask = async () => {
        try {
            await addDoc(collection(database, "Tasks"), {
                description: description,
                status: false
            });
         
            navigation.navigate("Task", { description }); // Passa a descrição da tarefa como parâmetro ao navegar para a tela Task
        } catch (error) {
            console.error('Erro ao adicionar a tarefa:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Digite a sua Tarefa..."
                style={styles.input}
            />
            <TouchableOpacity onPress={addTask} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
