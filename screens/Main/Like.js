import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity,
    Platform
} from 'react-native';
import Loader from '../../components/Movie/Loader';
import Backdrop from "../../components/Movie/Backdrop";

const Like = () => {
    return (
        <View style={styles.container}>
            <Backdrop />
        </View>
    );
};

export default Like;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
