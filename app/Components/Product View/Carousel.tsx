import { Image, StyleSheet, View, FlatList, Dimensions, ViewToken, ImageSourcePropType } from 'react-native';
import { useRef, useState, useCallback, useEffect } from 'react';

const carouselImages: ImageSourcePropType[] = [
    require("@/assets/images/jacket-1.png"),
    require("@/assets/images/jacket-2.png"),
    require("@/assets/images/jacket-3.png"),
    require("@/assets/images/jacket-4.png"),
    require("@/assets/images/jacket-5.png"),
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = 82.5; // 70px width + 10px total horizontal margin

export default function Carousel() {
    const [selectedImage, setSelectedImage] = useState(carouselImages[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const flatListRef = useRef<FlatList<ImageSourcePropType>>(null);
    
    const repeatedImages = [...carouselImages, ...carouselImages, ...carouselImages];
    const startIndex = carouselImages.length;

    useEffect(() => {
        flatListRef.current?.scrollToIndex({
            index: startIndex,
            animated: false
        });
    }, []);

    const onViewableItemsChanged = useCallback(({ viewableItems }: { 
        viewableItems: ViewToken[]
    }) => {
        const centerItem = viewableItems[0];
        if (centerItem && typeof centerItem.index === 'number') {
            const normalizedIndex = centerItem.index % carouselImages.length;
            setSelectedImage(carouselImages[normalizedIndex]);
            setSelectedIndex(normalizedIndex);

            if (centerItem.index < carouselImages.length) {
                flatListRef.current?.scrollToIndex({
                    index: centerItem.index + carouselImages.length,
                    animated: false
                });
            } else if (centerItem.index >= carouselImages.length * 2) {
                flatListRef.current?.scrollToIndex({
                    index: centerItem.index - carouselImages.length,
                    animated: false
                });
            }
        }
    }, []);

    const viewabilityConfigCallbackPairs = useRef([{
        viewabilityConfig: {
            itemVisiblePercentThreshold: 60,
            minimumViewTime: 0,
        },
        onViewableItemsChanged
    }]).current;

    const renderCarouselItem = ({ item, index }: { 
        item: ImageSourcePropType, 
        index: number 
    }) => (
        <View 
            style={[styles.carouselItem, selectedIndex === index % carouselImages.length && styles.selectedItem]}
        >
            <Image source={item} style={styles.carouselImage} />
        </View>
    );

    return (
        <View style={styles.productView}>
            <Image source={selectedImage} style={styles.productViewImg} />
            <FlatList
                ref={flatListRef}
                data={repeatedImages}
                renderItem={renderCarouselItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[styles.carousel]}
                getItemLayout={(_, index) => ({
                    length: ITEM_WIDTH,
                    offset: ITEM_WIDTH * index,
                    index,
                })}
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs}
                bounces={false}
                onScrollToIndexFailed={() => {}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    productView: {
        backgroundColor: "#F9F4EC",
        width: SCREEN_WIDTH,
        paddingVertical: 20,
    },
    productViewImg: {
        width: '60%',
        height: 320,
        objectFit: 'contain',
        marginHorizontal: '20%',
        marginBottom: -40,
    },
    carousel: {
        paddingHorizontal: (SCREEN_WIDTH - ITEM_WIDTH) / 2,
        gap: 0,
        paddingTop: 21,
        marginBottom: 20,
    },
    carouselItem: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: "#fff",
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2.5
    },
    selectedItem: {
        borderColor: '#FFC10B',
        borderWidth: 1,
        transform: [{ scale: 1.3 }, { translateY: -8 }],
        marginHorizontal: 15
    },
    carouselImage: {
        width: '80%',
        height: '80%',
        objectFit: 'contain'
    }
});