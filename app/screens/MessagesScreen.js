import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';
const initalMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/raju.jpeg'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/raju.jpeg'),
    },
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initalMessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    };
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Hiiii ', item)}
                        renderRightActions={() => (
                            <ListItemDelete
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/raju.jpeg'),
                        },
                        {
                            id: 4,
                            title: 'T4',
                            description: 'D4',
                            image: require('../assets/raju.jpeg'),
                        },
                    ]);
                }}
            />
        </Screen>
    );
};

export default MessagesScreen;
