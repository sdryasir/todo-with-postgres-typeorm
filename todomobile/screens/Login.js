import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Settings = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.loginWrapper}>
            <View>
                <Title style={{ textAlign: 'center' }}>Login</Title>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setText(email)}
                    style={{ marginBottom: 12 }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={{ marginBottom: 12 }}
                />
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Login
                </Button>
                <Button mode="text" onPress={() => navigation.navigate('Register')}>
                    create account?
                </Button>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    loginWrapper: {
        flexDirection: 'column',
        backgroundColor: '#ddd',
        padding: 6,
        justifyContent: 'center',
        padding: 24,
        flex: 1
    },
});