import { Text, View } from 'react-native';
import { ProductsSectionStyles, CategoryStyles } from '@/Styles';
import { demoProducts } from '@/constants/DemoProducts';
import BentoItem from '../Home/BentoItem';

export default function Products() {
    return (
        <View style={ProductsSectionStyles.container}>
            <View style={CategoryStyles.header}>
                <Text style={CategoryStyles.headerText}>Most Popular</Text>
            </View>
            <View style={ProductsSectionStyles.bentoGrid}>
                <View style={ProductsSectionStyles.bentoItem}>
                    {demoProducts.filter((_) => _.id % 2 === 0).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
                <View style={ProductsSectionStyles.bentoItem}>
                    {demoProducts.filter((_) => _.id % 2 === 1).map((product) => (
                        <BentoItem key={product.id} product={product} />
                    ))}
                </View>
            </View>
        </View>
    )
}