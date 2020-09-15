import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Loader = () => {
    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.paragraph}>1234</Text>
        </View>
    );
};

export default Loader;


const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
