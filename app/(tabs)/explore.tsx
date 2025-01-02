import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IndexStyles } from '@/Styles';
import SearchBar from '../Components/Home/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorySection from '../Components/Explore/CategorySection';
import Products from '../Components/Explore/Products';
import { useCallback, useState } from 'react';
import FilterBtn from '../Components/Explore/FilterBtn';

export default function Explore() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Add your refresh logic here
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={IndexStyles.container}>
            <View style={[IndexStyles.header, { paddingBottom: 10 }]}>
                <SearchBar />
                <FilterBtn />
            </View>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="#FFC10B"
                        colors={["#FFC10B"]}
                        progressBackgroundColor="#ffffff"
                    />
                }
            >
                <CategorySection />
                <Products />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})