import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CategoryStyles, ProductsSectionStyles } from '@/Styles';
import { Link } from 'expo-router';
import {  } from '@expo/vector-icons/FontAwesome6';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import BentoItem from './BentoItem';
import { demoProducts } from '@/constants/DemoProducts';

export default function RecommendedStylesSection() {
    return (
        <View style={ProductsSectionStyles.container}>
            <View style={CategoryStyles.header}>
                <Text style={CategoryStyles.headerText}>Recommended Styles</Text>
                <Link style={CategoryStyles.link} href={"/explore"}>See All</Link>
            </View>
            <View style={ProductsSectionStyles.bentoGrid}>
                <View style={ProductsSectionStyles.bentoItem}>
                    <View style={ProductsSectionStyles.filter}>
                        <Text style={{ color: '#fff', padding: 10 }}>Filter</Text>
                        <View style={ProductsSectionStyles.filterBtn}>
                            <FontAwesome6 name="sliders" size={18} color="black" />
                        </View>
                    </View>
                    {demoProducts.filter((_) => _.id % 2 === 0).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
                <View style={ProductsSectionStyles.bentoItem}>
                    {demoProducts.filter((_) => _.id % 2 === 1).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
            </View>
        </View>
    )
}