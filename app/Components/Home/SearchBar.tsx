import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { SearchBarstyles } from '@/Styles'

export default function SearchBar() {
    return (
        <View style={SearchBarstyles.container}>
            <TextInput
                placeholder="Search here..."
                style={SearchBarstyles.input}
            />
            <View style={SearchBarstyles.btn}>
                <Ionicons
                    name="search"
                    size={24}
                    color="black"
                />
            </View>
        </View>
    )
}