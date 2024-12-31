import { PromoCardStyles } from '@/Styles';
import { Image, Text, View } from 'react-native';
const jacket_1 = require('@/assets/images/jacket-1.png');
const jacket_2 = require('@/assets/images/jacket-2.png');

export default function PromoCard() {
    return (
        <View style={{ marginBottom: 30, position: 'relative' }}>
            <View style={PromoCardStyles.container}>
                <View style={PromoCardStyles.textContainer}>
                    <Text style={PromoCardStyles.title}>
                        Get Your Special Sale Up to 50%
                    </Text>
                    <View style={PromoCardStyles.shopNow}>
                        <Text style={PromoCardStyles.shopNowText}>Shop Now</Text>
                    </View>
                </View>
                <View style={PromoCardStyles.imageCOntainer}>
                    <Image style={PromoCardStyles.image} source={jacket_1} />
                    <Image style={[PromoCardStyles.image, PromoCardStyles.secondImage]} source={jacket_2} />
                </View>
            </View>
            <View style={PromoCardStyles.decoContainer}></View>
            <View style={PromoCardStyles.decoContainer2}></View>
        </View>
    )
}