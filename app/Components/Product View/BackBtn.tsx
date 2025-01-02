import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const BackBtn = () => {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.back()}>
            <View style={styles.btn}>
                <FontAwesome6
                    name="angle-left"
                    size={24}
                    color="black"
                    style={{ aspectRatio: 1, marginLeft: 8 }}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 50,
        aspectRatio: 1
    }
})