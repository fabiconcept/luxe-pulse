import { IndexStyles } from '@/Styles';
import { Dimensions, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn } from '../Components/Product View/BackBtn';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import Carousel from '../Components/Product View/Carousel';
import InfoSection from '../Components/Product View/InfoSection';

export default function productView() {
    return (
        <SafeAreaView style={[IndexStyles.container, { paddingVertical: 0, paddingHorizontal: 0 }]}>
            <View style={styles.profuctViewHeader}>
                <BackBtn />
                <FavouriteBtn />
            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <Carousel />
                <InfoSection />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    profuctViewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        position: 'absolute',
        width: Dimensions.get('window').width,
        top: StatusBar.currentHeight,
        left: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
        zIndex: 10
    },
})