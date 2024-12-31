import { IndexStyles } from '@/Styles';
import { View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../Components/Home/SearchBar';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import PromoCard from '../Components/Home/PromoCard';
import CategorySection from '../Components/Home/CategorySection';
import RecommendedStylesSection from '../Components/Home/RecommendedStylesSection';
import { ScrollView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <SafeAreaView style={IndexStyles.container}>
      <View style={IndexStyles.header}>
        <SearchBar />
        <FavouriteBtn />
      </View>
      <ScrollView
            showsVerticalScrollIndicator={false}
      >
        <PromoCard />
        <CategorySection />
        <RecommendedStylesSection />
      </ScrollView>
    </SafeAreaView>
  );
}

