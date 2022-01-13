import * as React from 'react';
import Home from './Home';
import Login from './Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from '../components/Detail';
import Register from '../components/Register';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export default MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginStackScreen}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

function HomeStackScreen({ navigation }) {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="HomeScreen" component={Home} />
            <HomeStack.Screen name="Details" component={Detail} />
            <HomeStack.Screen name="Register" component={Register} />
        </HomeStack.Navigator>
    );
}

function LoginStackScreen({ navigation }) {
    return (
        <LoginStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <LoginStack.Screen name="LoginScreen" component={Login} />
        </LoginStack.Navigator>
    );
}