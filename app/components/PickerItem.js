import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

const PickerItem = ({ label, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.text}>{label}</AppText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});
export default PickerItem;
