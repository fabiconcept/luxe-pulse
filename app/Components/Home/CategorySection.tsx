import { Link } from 'expo-router';
import { Text, View, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';
import { CategoryStyles } from '@/Styles';

const categories = [
    { id: 1, title: 'T-Shirts', icon: 'tshirt' },
    { id: 2, title: 'Jeans', icon: 'jeans' },
    { id: 3, title: 'Jackets', icon: 'jacket' },
    { id: 4, title: 'Hats', icon: 'hat' },
    { id: 5, title: 'Shoes', icon: 'shoe' },
    { id: 6, title: 'Dresses', icon: 'dress' },
    { id: 7, title: 'Skirts', icon: 'skirt' },
    { id: 8, title: 'Shorts', icon: 'shorts' },
    { id: 9, title: 'Sweaters', icon: 'sweater' },
    { id: 10, title: 'Coats', icon: 'coat' },
];

export default function CategorySection() {
    return (
        <View style={CategoryStyles.container}>
            <View style={CategoryStyles.header}>
                <Text style={CategoryStyles.headerText}>Select by Category</Text>
                <Link style={CategoryStyles.link} href={"/explore"}>See All</Link>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={CategoryStyles.scrollViewContainer}
            >
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </ScrollView>
        </View>
    );
}
