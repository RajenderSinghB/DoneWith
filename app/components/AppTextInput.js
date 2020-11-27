import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && (
                <FontAwesome5
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput style={defaultStyles.text} {...otherProps} />
        </View>
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
});
export default AppTextInput;
