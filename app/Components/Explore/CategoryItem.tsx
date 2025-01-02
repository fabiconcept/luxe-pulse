import { useRouter, useSearchParams } from 'expo-router/build/hooks';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function CategoryItem({ title }: { title: string }) {
    const router = useRouter();
    const params = useSearchParams();
    const categoryParam = params.get("category") as string;

    // Split categories string into array, handle empty case
    const categories = categoryParam ? categoryParam.split(',') : [];
    const isActive = categories.includes(title.toLowerCase());

    const handleCategoryToggle = () => {
        if(title.toLowerCase() === "all") {
            router.push("/explore");
            return;
        }

        const updatedCategories = isActive
            ? categories.filter(cat => cat !== title.toLowerCase())
            : [...categories, title.toLowerCase()];

        router.push(`/explore?category=${updatedCategories.join(',')}`);
    };

    return (
        <Pressable onPress={handleCategoryToggle}>
            <View style={[styles.container, title.toLowerCase() === "all" && categories.length === 0 ? styles.active : isActive ? styles.active : styles.inactive]}>
                <Text>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    active: {
        backgroundColor: "#FFC10B",
    },
    inactive: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#8E8E9388"
    }
});