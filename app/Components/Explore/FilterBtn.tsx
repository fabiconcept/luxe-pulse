import { View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { FavouriteStyles } from '@/Styles';

export default function FilterBtn() {
    return (
        <View style={[FavouriteStyles.btn, { backgroundColor: '#FFC10B',}]}>
            <Feather 
                name="sliders" 
                size={24} 
                color="black" 
            />
        </View>
    )
}
