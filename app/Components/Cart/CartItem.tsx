import { StyleSheet, Text, View } from 'react-native'

export default function CartItem() {
    return (
        <View style={styles.container}>
            <Text>CartItem</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})