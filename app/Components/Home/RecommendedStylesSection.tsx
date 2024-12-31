import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CategoryStyles } from '@/Styles';
import { Link } from 'expo-router';
import {  } from '@expo/vector-icons/FontAwesome6';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import BentoItem from './BentoItem';

const demoProducts = [
    {
        id: 1,
        title: 'Martine Rose',
        price: '12.99',
        image: require('@/assets/images/jacket-1.png'),
        rating: 4.6,
        bgColor: "#ff000033"
    },
    {
        id: 2,
        title: 'Himalayan Hood',
        price: '29.99',
        image: require('@/assets/images/jacket-2.png'),
        rating: 4.6,
        bgColor: "#00A2E833"
    },
    {
        id: 3,
        title: 'Eclipse Jacket',
        price: '49.99',
        image: require('@/assets/images/jacket-3.png'),
        rating: 4.6,
        bgColor: "#FFC90E33"
    },
    {
        id: 4,
        title: 'Cosmic Hoodie',
        price: '9.99',
        image: require('@/assets/images/jacket-4.png'),
        rating: 4.6,
        bgColor: "#0000ff33"
    },
    {
        id: 5,
        title: 'Color Product Hoodie',
        price: '69.99',
        image: require('@/assets/images/jacket-5.png'),
        rating: 4.6,
        bgColor: "#00000011"
    },
    {
        id: 6,
        title: 'Watch',
        price: '99.99',
        image: require('@/assets/images/jacket-1.png'),
        rating: 4.6,
        bgColor: "#ff000033"
    },
    {
        id: 7,
        title: 'Sunglasses',
        price: '19.99',
        image: require('@/assets/images/jacket-2.png'),
        rating: 4.6,
        bgColor: "#00A2E833"
    },
    {
        id: 8,
        title: 'Belt',
        price: '14.99',
        image: require('@/assets/images/jacket-3.png'),
        rating: 4.6,
        bgColor: "#FFC90E33"
    },
    {
        id: 9,
        title: 'Sock',
        price: '5.99',
        image: require('@/assets/images/jacket-4.png'),
        rating: 4.6,
        bgColor: "#0000ff33"
    },
    {
        id: 10,
        title: 'Tie',
        price: '7.99',
        image: require('@/assets/images/jacket-5.png'),
        rating: 4.6,
        bgColor: "#00000011"
    },
]


export default function RecommendedStylesSection() {
    return (
        <View style={styles.container}>
            <View style={CategoryStyles.header}>
                <Text style={CategoryStyles.headerText}>Recommended Styles</Text>
                <Link style={CategoryStyles.link} href={"/explore"}>See All</Link>
            </View>
            <View style={styles.bentoGrid}>
                <View style={styles.bentoItem}>
                    <View style={styles.filter}>
                        <Text style={{ color: '#fff', padding: 10 }}>Filter</Text>
                        <View style={styles.filterBtn}>
                            <FontAwesome6 name="sliders" size={18} color="black" />
                        </View>
                    </View>
                    {demoProducts.filter((_) => _.id % 2 === 0).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
                <View style={styles.bentoItem}>
                    {demoProducts.filter((_) => _.id % 2 === 1).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    bentoGrid: {
        flexDirection: 'row',
        gap: 10
    },
    bentoItem: {
        flex: 1,
        alignItems: 'flex-start',
        gap: 10,
    },
    filter: {  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 15,
        paddingRight: 2.5,
        paddingVertical: 2.5,
        backgroundColor: '#000',
        borderRadius: 50,
    },
    filterBtn: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50,
    }
})