import { IndexStyles } from '@/Styles';
import { View, RefreshControl, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../Components/Home/SearchBar';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import PromoCard from '../Components/Home/PromoCard';
import CategorySection from '../Components/Home/CategorySection';
import RecommendedStylesSection from '../Components/Home/RecommendedStylesSection';
import { useState, useCallback } from 'react';

export default function Index() {
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
      <View style={[IndexStyles.header, { paddingBottom: 5 }]}>
        <SearchBar />
        <FavouriteBtn />
      </View>
      <ScrollView
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
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <PromoCard />
        <CategorySection />
        <RecommendedStylesSection />
      </ScrollView>
    </SafeAreaView>
  );
}
