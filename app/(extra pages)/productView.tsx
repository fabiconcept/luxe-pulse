import { IndexStyles } from '@/Styles';
import { Dimensions, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
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
            <View style={styles.bottomNav}>
                <View style={styles.bottomBtn}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                </View>
                <View style={[styles.bottomBtn, { backgroundColor: '#FFC10B' }]}>
                    <Text style={styles.btnText}>Buy Now</Text>
                </View>
            </View>
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
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: Dimensions.get('window').width,
        bottom: 0,
        left: 0,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#fff',
        zIndex: 10,
        gap: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#8E8E9355',
    },
    bottomBtn: {
        flex: 1,
        paddingVertical: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000011',
    },
    btnText: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Gilroy-Medium'
    }
})