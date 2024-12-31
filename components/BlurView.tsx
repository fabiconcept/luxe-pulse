import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView as ExpoBlurView } from 'expo-blur';

const BlurView = ({ intensity = 50, tint = 'default', style, children }: {
    intensity?: number;
    tint?: 'default' | 'light' | 'dark';
    style?: any;
    children?: React.ReactNode;
}) => {
    // iOS uses native blur through expo-blur
    if (Platform.OS === 'ios') {
        return (
            <ExpoBlurView intensity={intensity} tint={tint} style={style}>
                {children}
            </ExpoBlurView>
        );
    }

    // Android fallback using semi-transparent background
    return (
        <View
            style={[
                styles.androidBlur,
                style,
                {
                    backgroundColor: tint === 'dark' ? `rgba(0, 0, 0, ${intensity / 100})` : `rgba(255, 255, 255, ${intensity / 100 * 0.7})`,
                },
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    androidBlur: {
        overflow: 'hidden',
        backdropFilter: 'blur(10px)', // This works on web
    },
});

export default BlurView;