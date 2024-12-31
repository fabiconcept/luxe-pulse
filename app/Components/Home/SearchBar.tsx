import { View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SearchBarstyles } from '@/Styles';

export default function SearchBar() {
    return (
        <View style={SearchBarstyles.container}>
            <TextInput
                placeholder="Search here..."
                style={SearchBarstyles.input}
            />
            <View style={[SearchBarstyles.btn, { padding: 10}]}>
                <Ionicons
                    name="search"
                    size={20}
                    color="black"
                />
            </View>
        </View>
    )
}