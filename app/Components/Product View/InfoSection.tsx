import { CategoryStyles } from '@/Styles';
import { FontAwesome6 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InfoSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const description = "Crafted from the finest mulberry silk, this DG embroidered shirt exemplifies luxury craftsmanship. Features intricate hand-embroidered DG monogram details on the chest pocket and cuffs. The relaxed fit and mother-of-pearl buttons create an effortlessly elegant look. Perfect for both formal occasions and sophisticated casual wear. Made in Italy with meticulous attention to detail and sustainable practices."

    return (
        <View style={[styles.container]}>
            <View style={styles.titleContainer}>
                <Text style={[styles.title, { flex: 2 }]}>DG Embroidered Silk Shirt</Text>
                <View style={[styles.quantity, { flex: 1 }]}>
                    <View style={styles.btn}>
                        <FontAwesome6
                            name="minus"
                            size={14}
                        />
                    </View>
                    <Text>01</Text>
                    <View style={[styles.btn, {
                        backgroundColor: '#FFC10B',
                    }]}>
                        <FontAwesome6
                            name="plus"
                            size={14}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.priceText}><Text style={{ color: '#00000055' }}>From:</Text> <Text style={{ fontWeight: 700 }}>$975.00</Text></Text>
                <View style={styles.colors}>
                    <View style={[styles.colorOption, {
                        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`,
                    }]}></View>
                    <View style={[styles.colorOption, {
                        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`,
                    }]}></View>
                    <View style={[styles.colorOption, {
                        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`,
                    }]}></View>
                    <View style={[styles.colorOption, {
                        backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`,
                    }]}></View>
                </View>
            </View>

            <View style={[CategoryStyles.header, { paddingHorizontal: 0 }]}>
                <Text style={[CategoryStyles.headerText, { fontFamily: 'Gilroy-Regular',}]}>Size</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <AntDesign name="star" size={14} color="#FFC10B" />
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Regular', }}>4.6/5 <Text style={{ color: '#00000055' }}>(2k+ Reviews)</Text></Text>
                </View>
            </View>
            <View style={styles.sizes}>
                <Text style={[styles.sizeOption]}>S</Text>
                <Text style={[styles.sizeOption, { backgroundColor: '#FFC10B', borderColor: 'transparent' }]}>M</Text>
                <Text style={[styles.sizeOption]}>L</Text>
                <Text style={[styles.sizeOption]}>XL</Text>
                <Text style={[styles.sizeOption]}>XXL</Text>
            </View>

            <View>
                <View style={[CategoryStyles.header, { paddingHorizontal: 0, marginTop: 20, marginBottom: 10 }]}>
                    <Text style={[CategoryStyles.headerText, { fontFamily: 'Gilroy-SemiBold', }]}>Description</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'Gilroy-Regular'}}>
                        <Text style={{ opacity: isExpanded ? 1 : 0.5 }}>
                            {isExpanded ? description : description.slice(0, 100) + "..."}
                        </Text>
                        <Text onPress={() => setIsExpanded(!isExpanded)} style={styles.readMore}>
                            {isExpanded ? " Read less" : " Read more"}
                        </Text>
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#FFF',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 20
    },
    quantity: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 5,
        backgroundColor: '#F9F4EC',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#FFC10B',
        borderRadius: 50
    },
    title: {
        fontSize: 22,
        fontWeight: 500,
        fontFamily: 'Gilroy-Regular',
    },
    btn: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFC10B',
        backgroundColor: '#FFF',
        aspectRatio: 1
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    priceText: {
        fontSize: 18,
        fontFamily: 'Gilroy-Regular',
    },
    colors: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    },
    colorOption: {
        width: 32,
        height: 32,
        borderRadius: 50,
    },
    sizes: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 10
    },
    sizeOption: {
        borderRadius: 50,
        flex: 1,
        paddingVertical: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#00000055',
        fontFamily: 'Gilroy-Regular',
        fontSize: 16
    },
    readMore: {
        fontFamily: 'Gilroy-SemiBold',
        fontSize: 16,
    }
})