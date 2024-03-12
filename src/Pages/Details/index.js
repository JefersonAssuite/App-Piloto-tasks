import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { doc, updateDoc } from "firebase/firestore";
import styles from './styles'
import database from '../../Config/firebaseConfig'; 

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    const editTask = async (description, id) => {
        try {
            const taskRef = doc(database, "Tasks", id);
            await updateDoc(taskRef, {
                description: description, 
            });
            console.log("Tarefa atualizada com sucesso!");
            
            navigation.navigate('Task', { description });
        } catch (error) {
            console.error("Erro ao atualizar tarefa:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                value={descriptionEdit}
                style={styles.input}
                onChangeText={setDescriptionEdit}
            />
            <TouchableOpacity style={styles.button} 
            onPress={() => editTask(descriptionEdit, idTask)}>
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>
    );
}
