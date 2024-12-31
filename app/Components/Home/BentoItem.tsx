import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import BlurView from '@/components/BlurView';

export default function BentoItem({ product }: {
    product: {
        id: number;
        title: string;
        price: string;
        image: any;
        rating: number;
        bgColor: string;
    }
}) {
    const [isLiked, setIsLiked] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <View 
            style={[styles.container, { backgroundColor: product.bgColor }]}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
            <Image
                source={product.image}
                style={{
                    width: "95%",
                    height: 200,
                    objectFit: 'contain',
                }}
            />
            <View style={styles.header}>
                <View style={styles.ratingContainer}>
                    <Ionicons
                        name="star" 
                        size={16} 
                        color="gold"
                    />
                    <Text style={styles.rating}>{product.rating}</Text>
                </View>
                <Pressable onPress={handleLike} style={styles.favBtn}>
                    <View>
                        <Ionicons
                            name={isLiked ? "heart" : "heart-outline" }
                            size={16}
                            color={isLiked ? "red" : "black"}
                        />
                    </View>
                </Pressable>
            </View>
            {isHovered && (
                <BlurView intensity={30} tint="dark" style={styles.informationCard}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </BlurView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: "90%",
        height: 50,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2.5,
        backgroundColor: '#ffffff66',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 50,
    },
    rating: {
        color: 'black',
    },
    favBtn: {
        alignItems: 'center',
        gap: 2.5,
        justifyContent: 'center',
        backgroundColor: '#ffffff66',
        paddingHorizontal: 8,
        aspectRatio: 1,
        borderRadius: 50,
    },
    Liked: {
        color: 'red',
    },
    favIcon: {
        color: 'black',
    },
    informationCard: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#00000099',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
    price: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    }
})