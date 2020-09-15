import React from 'react';
import {
    View,
    Text,
    FlatList,
    Animated,
    Dimensions,
    Platform,
    Image
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const {width, height} = Dimensions.get('window');

const BACKDROP_HEIGHT = height * 0.65;
const ITEM_SIZE = Platform.OS === 'android' ? width * 0.74 : width * 0.72


const Backdrop = ({movies, scrollX}) => {
    return (
        <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
            <FlatList
                data={movies.reverse()}
                keyExtractor={(item) => item.key + '-backdrop'}
                removeClippedSubviews={false}
                contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
                renderItem={({item, index}) => {
                    if (!item.backdrop) {
                        return null;
                    }
                    const translateX = scrollX.interpolate({
                        inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                        outputRange: [0, width],
                    });
                    return (
                        <Animated.View
                            removeClippedSubviews={false}
                            style={{
                                position: 'absolute',
                                width: translateX,
                                height,
                                overflow: 'hidden'
                            }}
                        >
                            <Image
                                source={{uri: item.backdrop}}
                                style={{
                                    width,
                                    height: BACKDROP_HEIGHT,
                                    position: 'absolute'
                                }}
                            />
                        </Animated.View>
                    );
                }}
            />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'white']}
                style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: 'absolute',
                    bottom: 0
                }}
            />
        </View>
    );
};

export default Backdrop;
