import { FlatList, RefreshControl, View } from 'react-native';
import CartItem from './CartItem';
import { demoProducts } from '@/constants/DemoProducts';
import { ProductsSectionStyles } from '@/Styles';
import { useState } from 'react';

export default function CartItems() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <View style={[ProductsSectionStyles.container, {
            marginTop: 0,
            gap: 10
        }]}>
            <FlatList
                data={demoProducts.sort(() => 0.5 - Math.random()).slice(0, 5)}
                renderItem={({ item }) => <CartItem {...item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <View style={{ height: 60 }} />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="#FFC10B"
                        colors={["#FFC10B"]}
                        progressBackgroundColor="#ffffff"
                    />
                }
            />
        </View>
    )
}
