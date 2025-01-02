import { IndexStyles } from '@/Styles';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn } from '../Components/Product View/BackBtn';
import FavouriteBtn from '../Components/Home/FavouriteBtn';
import Carousel from '../Components/Product View/Carousel';

export default function productView() {
    return (
        <SafeAreaView style={[IndexStyles.container, { paddingVertical: 0, paddingHorizontal: 0 }]}>
            <View style={styles.profuctViewHeader}>
                <BackBtn />
                <FavouriteBtn />
            </View>
            <Carousel />
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
        zIndex: 10
    },
})