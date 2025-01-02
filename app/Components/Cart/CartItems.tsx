import { StyleSheet, Text, View } from 'react-native'
import CartItem from './CartItem'

export default function CartItems() {
    return (
        <View style={{ padding: 5, gap: 10 }}>
            <CartItem />
            <CartItem />
        </View>
    )
}

const styles = StyleSheet.create({})