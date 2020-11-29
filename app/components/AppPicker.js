import React, { useState } from 'react';

import { View, StyleSheet, Modal, Button, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Screen from './Screen';
import PickerItem from './PickerItem';
const AppPicker = ({
    icon,
    items,
    onSelectItem,
    placeholder,
    selectedItem,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <FontAwesome5
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text}>
                        {selectedItem ? selectedItem.label : placeholder}
                    </AppText>
                    <FontAwesome5
                        name='angle-down'
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button
                        title='Close'
                        onPress={() => setModalVisible(false)}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },

    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
});
export default AppPicker;
