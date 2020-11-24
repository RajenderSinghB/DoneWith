import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'bars',
            backgroundColor: colors.primary,
        },
    },
    {
        title: 'My Messages',
        icon: {
            name: 'envelope',
            backgroundColor: colors.secondary,
        },
    },
];
const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='Rajender Singh Banoula'
                    subTitle='banoularajendersingh880@gmail.com'
                    image={require('../assets/raju.jpeg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={
                    <Icon name='sign-out-alt' backgroundColor='#ffe66d' />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});
export default AccountScreen;
