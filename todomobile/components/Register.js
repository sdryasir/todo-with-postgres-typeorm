import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

    const navigation = useNavigation();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.loginWrapper}>
            <View>
                <Title style={{ textAlign: 'center' }}>Create Account</Title>
                <TextInput
                    label="Fullname"
                    value={fullname}
                    onChangeText={fullname => setFullname(fullname)}
                    style={{ marginBottom: 12 }}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    style={{ marginBottom: 12, marginTop: 12 }}
                />
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={password => setPassword(password)}
                    style={{ marginBottom: 12 }}
                />

                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Create New Account
                </Button>
                <Button mode="text" onPress={() => navigation.navigate('Login')}>
                    Login!
                </Button>
            </View>
        </View>
    )
}

export default Register;

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