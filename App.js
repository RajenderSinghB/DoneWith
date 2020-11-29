import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
    {
        label: 'Furniture',
        value: 1,
    },
    {
        label: 'Clothing',
        value: 2,
    },
    {
        label: 'Cameras',
        value: 3,
    },
];

export default function App() {
    const [category, setCategory] = useState(categories[0]);
    return (
        <Screen>
            <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                placeholder='Username'
                icon='th'
            />
            <AppTextInput placeholder='Username' icon='envelope' />
        </Screen>
    );
}
