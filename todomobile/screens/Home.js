import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SurfaceCard from '../components/SurfaceCard'
import { FlatList } from 'react-native';
import axios from 'axios';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const Home = () => {

    const renderItem = ({ item }) => (
        <SurfaceCard item={item} />
    );

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            await axios.get('http://10.0.2.2:3001/todos')
                .then(response => {
                    setTodos(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <View style={styles.surfaceWrapper}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                nestedScrollEnabled={true}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    surfaceWrapper: {
        flexDirection: 'column',
        width: screenWidth,
        backgroundColor: '#222',
        padding: 6,
        flex: 1
    },
});