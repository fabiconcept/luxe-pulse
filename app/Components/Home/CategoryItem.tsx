import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function CategoryItem({ category }: {
    category: {
        id: number;
        title: string;
        icon: string;
    }
}) {
    return (
        <Link href={`/explore`}>
            <View style={styles.container}>
                <View style={[styles.imageContainer, {
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 85%)`
                }]}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Gilroy-Bold' }}>{(category.icon).slice(0, 1).toUpperCase()}</Text>
                </View>
                <Text style={{ fontSize: 14, fontFamily: 'Gilroy-Medium' }}>{category.title}</Text>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5,
        alignItems: 'center',
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E9355',
        backgroundColor: '#ffffff88',
        alignItems: 'center',
        justifyContent: 'center'
    }
});