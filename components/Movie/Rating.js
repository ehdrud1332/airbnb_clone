import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const Rating = ({rating}) => {

    const filledStarts = Math.floor(rating / 2)
    const maxStars = Array(5 - filledStarts).fill('staro')
    const r = [...Array(filledStarts).fill('star'), ...maxStars]

    return (
        <View style={styles.rating}>
            <Text style={styles.ratingNumber}>{rating} </Text>
            {r.map((type, index) => {
                return <AntDesign key={index} name={type} size={12} color="tomato" />
            })}
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    ratingNumber: {marginRight: 4, fontSize: 14},
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 4
    }
})
