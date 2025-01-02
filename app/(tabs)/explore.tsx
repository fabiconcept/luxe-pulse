import { StyleSheet, Text, View } from 'react-native';
import { IndexStyles } from '@/Styles';
import SearchBar from '../Components/Home/SearchBar';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategorySection from '../Components/Explore/CategorySection';

export default function Explore() {
    return (
        <SafeAreaView style={IndexStyles.container}>
            <View style={[IndexStyles.header, { paddingBottom: 10 }]}>
                <SearchBar />
                <FavouriteBtn />
            </View>
            <CategorySection />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})