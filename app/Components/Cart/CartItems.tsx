import { StyleSheet, Text, View } from 'react-native'
import CartItem from './CartItem'
import { demoProducts } from '@/constants/DemoProducts'
import { ProductsSectionStyles } from '@/Styles'

export default function CartItems() {
    return (
        <View style={[ProductsSectionStyles.container, {
            marginTop: 0,
            gap: 10
        }]}>
            {demoProducts
                .sort(() => 0.5 - Math.random())
                .slice(0, 5)
                .map((product) => (
                    <CartItem key={product.id} {...product} />
                ))}
        </View>
    )
}

const styles = StyleSheet.create({})