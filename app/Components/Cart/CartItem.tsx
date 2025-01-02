import { FontAwesome6 } from '@expo/vector-icons'
import { Link } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    runOnJS
} from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.2;

export default function CartItem({
    title,
    price,
    image,
    bgColor,
    size,
    color,
}: {
    id: number,
    title: string,
    price: string,
    image: any,
    rating: number,
    bgColor: string,
    size: string,
    color: string,
}) {
    const translateX = useSharedValue(0);
    const isSliderActive = useSharedValue(false);

    const panGesture = useAnimatedGestureHandler({
        onStart: (_, context: any) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            // If not at threshold, only allow left swipe
            if (!isSliderActive.value) {
                translateX.value = Math.max(
                    Math.min(0, context.startX + event.translationX),
                    TRANSLATE_X_THRESHOLD
                );
            } else {
                // If at threshold, only allow right swipe
                translateX.value = Math.max(
                    TRANSLATE_X_THRESHOLD,
                    Math.min(0, context.startX + event.translationX)
                );
            }
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD / 1.5;
            if (shouldBeDismissed) {
                translateX.value = withSpring(TRANSLATE_X_THRESHOLD);
                isSliderActive.value = true;
            } else {
                translateX.value = withSpring(0);
                isSliderActive.value = false;
            }
        },
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value,
        }],
    }));

    const [counter, setCounter] = useState(1);

    const handleCounterAdd = () => {
        setCounter(counter + 1);
    };

    const handleCounterRemove = () => {
        setCounter(Math.max(1, counter - 1));
    };

    return (
        <View style={{ position: 'relative' }}>
            <View style={[styles.deleteContainer]}>
                <FontAwesome6 name="trash-can" size={24} color="#FF0000" />
            </View>
            <PanGestureHandler 
                onGestureEvent={panGesture}
                activeOffsetX={[-10, 10]}
                failOffsetY={[-5, 5]}
            >
                <Animated.View style={[styles.container, rStyle]}>
                    <Link href={"/productView"}>
                        <View style={[styles.imageContainer, { backgroundColor: bgColor }]}>
                            <Image
                                source={image}
                                style={styles.image}
                            />
                        </View>
                    </Link>
                    <View style={{ flex: 1, gap: 10 }}>
                        <Text style={styles.title}>{title}</Text>
                        <View style={{ gap: 8 }}>
                            <View>
                                <Text style={styles.info}><Text style={styles.label}>Size:</Text> {size}</Text>
                                <Text style={styles.info}><Text style={styles.label}>Color:</Text> {color}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Pressable onPress={handleCounterRemove}>
                                        <View style={styles.btn}>
                                            <FontAwesome6
                                                name="minus"
                                                size={14}
                                            />
                                        </View>
                                    </Pressable>
                                    <Text>{counter}</Text>
                                    <Pressable onPress={handleCounterAdd}>
                                        <View style={[styles.btn, { borderWidth: 0, backgroundColor: '#FFC10B', }]}>
                                            <FontAwesome6
                                                name="plus"
                                                size={14}
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                                <Text style={styles.price}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(price) * counter)}</Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    imageContainer: {
        width: 100,
        height: 120,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '80%',
        height: '80%',
        objectFit: 'contain'
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    info: {
        fontSize: 14,
        fontWeight: '400',
    },
    label: {
        color: '#00000055',
        paddingRight: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: '600'
    },
    btn: {
        padding: 8,
        aspectRatio: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#00000088'
    },
    deleteContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#FFD7BE',
        borderRadius: 20,
        paddingRight: 30
    }
});