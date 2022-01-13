import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput, Button, Title, Paragraph, Surface } from 'react-native-paper';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Detail = () => {

    const route = useRoute()
    const { id } = route.params;

    const [todo, setTodo] = useState({});

    const getTodo = async () => {
        try {
            await axios.get(`http://10.0.2.2:3001/todos/${id}`)
                .then(response => {
                    setTodo(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodo();
    }, [id])

    return (
        <View style={styles.detailWrapper}>
            <Surface style={styles.surface}>
                <Title>{todo.title}</Title>
                <Paragraph>{todo.description}</Paragraph>
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <MaterialCommunityIcons name="comment-edit" size={26} />
                    <MaterialCommunityIcons name="trash-can" size={26} />
                </View>
            </Surface >
        </View >
    )
}

export default Detail

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'column',
        backgroundColor: '#ddd',
        flex: 1,
        padding: 6
    },
    surface: {
        elevation: 4,
        padding: 8
    }
});