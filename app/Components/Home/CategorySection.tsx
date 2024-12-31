import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

const categories = [
    { id: 1, title: 'T-Shirts', icon: 'tshirt' },
    { id: 2, title: 'Jeans', icon: 'jeans' },
    { id: 3, title: 'Jackets', icon: 'jacket' },
    { id: 4, title: 'Hats', icon: 'hat' },
    { id: 5, title: 'Shoes', icon: 'shoe' },
];

export default function CategorySection() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select by Category</Text>
                <Link style={styles.link} href={"/explore"}>See All</Link>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContainer}
            >
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 20
    },
    link: {
        color: '#FFC10B',
        fontWeight: 600
    },
    headerText: {
        fontSize: 14,
        fontWeight: 600
    },
    scrollViewContainer: {
        gap: 10,
        paddingHorizontal: 5
    }
})