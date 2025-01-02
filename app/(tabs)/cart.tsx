import { CategoryStyles, IndexStyles } from '@/Styles';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import Items from '../Components/Cart/CartItems';

export default function Cart() {
  return (
    <SafeAreaView style={IndexStyles.container}>
      <View style={CategoryStyles.header}>
        <Text style={[CategoryStyles.headerText]}>Cart (03)</Text>
        <FavouriteBtn extraStyle={{ padding: 10 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      > 
        <Items />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#F9F4EC"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFC10B'
  },
});
