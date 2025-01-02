import { View, ViewStyle } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FavouriteStyles } from '@/Styles';

export default function FavouriteBtn({ extraStyle }: { extraStyle?: ViewStyle }) {
    return (
        <View style={[FavouriteStyles.btn, extraStyle]}>
            <Ionicons
                name="heart-outline"
                size={24}
                color="black"
            />
        </View>
    )
}
