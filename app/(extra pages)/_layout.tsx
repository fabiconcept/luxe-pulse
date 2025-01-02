import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export default function ExtraPagesLayout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }}
            >
                <Stack.Screen
                    name="productView"
                    options={{
                        presentation: 'fullScreenModal',
                        animation: 'slide_from_bottom'
                    }}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});