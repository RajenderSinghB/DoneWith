import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../config/colors';

const ListItemDelete = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome5 name='trash' size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.danger,
        width: 70,
    },
});

export default ListItemDelete;
