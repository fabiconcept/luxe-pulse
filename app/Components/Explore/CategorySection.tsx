import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CategoryStyles } from '@/Styles';
import { Link } from 'expo-router';
import CategoryItem from './CategoryItem';

const categories = [
    { id: 1, title: 'T-Shirts' },
    { id: 2, title: 'Jeans' },
    { id: 3, title: 'Jackets' },
    { id: 4, title: 'Hats' },
    { id: 5, title: 'Shoes' },
    { id: 6, title: 'Dresses' },
    { id: 7, title: 'Skirts' },
    { id: 8, title: 'Shorts' },
    { id: 9, title: 'Sweaters' },
    { id: 10, title: 'Coats' },
];


export default function CategorySection() {
    return (
        <View style={CategoryStyles.container}>
            <View style={CategoryStyles.header}>
                <Text style={CategoryStyles.headerText}>Select by Category</Text>
                <Link style={CategoryStyles.link} href={"/explore"}>See all</Link>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={CategoryStyles.scrollViewContainer}
            >
                <CategoryItem key={"index"} title={"All"} />
                {categories.map((category) => (
                    <CategoryItem key={category.id} title={category.title} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})