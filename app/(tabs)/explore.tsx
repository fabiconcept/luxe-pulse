import { StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function Explore() {
    return (
        <View style={styles.container}>
            <ThemedText style={styles.title}>Explore</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "plum"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})