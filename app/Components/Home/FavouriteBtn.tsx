import { View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FavouriteStyles } from '@/Styles';

export default function FavouriteBtn() {
    return (
        <View style={FavouriteStyles.btn}>
            <Ionicons
                name="heart-outline"
                size={24}
                color="black"
            />
        </View>
    )
}
