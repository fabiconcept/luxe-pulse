import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function FavouriteBtn() {
    return (
        <View style={styles.btn}>
            <Ionicons
                name="heart-outline"
                size={24}
                color="black"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 7,
        aspectRatio: 1,
        backgroundColor: "#fff",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#8E8E9355",
    }
})