import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Text, View } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Cart</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#F9F4EC"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
