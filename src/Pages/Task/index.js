import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import database from '../../Config/firebaseConfig';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Task({ navigation, route }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const querySnapshot = await getDocs(collection(database, 'Tasks'));
                const taskList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTasks(taskList);
            } catch (error) {
                console.error('Erro ao buscar tarefas:', error);
            }
        };

        fetchTasks();
    }, [route.params?.description]); // Adiciona route.params?.description como dependência do useEffect

    const deleteTask = async (id) => {
        try {
            const taskRef = doc(database, 'Tasks', id);
            await deleteDoc(taskRef);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Erro ao excluir a tarefa:', error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => (
                    <View style={styles.Tasks}>
                        <TouchableOpacity
                            style={styles.deleteTask}
                            onPress={() => deleteTask(item.id)}>
                            <FontAwesome
                                name="star"
                                size={23}
                                color="#1E90FF"></FontAwesome>
                        </TouchableOpacity>
                        <Text
                style={styles.DescriptionTask}
                onPress={() => {
                  navigation.navigate('Details', {
                    id: item.id,
                    description: item.description
                  })
                }}
              >
                {item.description}
              </Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.buttonNewTask}
                onPress={() => navigation.navigate('NewTask')}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
